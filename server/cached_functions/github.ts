import type { GithubApiRepository } from "../types/github";
import type { ProjectInformation } from "~/shared/types/github";
import { status } from "http-status";
import { writeImage } from "./../utils/image";
import {
  fetchGithubUrl,
  getAuthenticatedUserInformation,
  getOpenGraphImageUrls,
  getOwnGithubProjects,
} from "../api_calls/github";
import { emptyOnCatchAsync } from "../utils/functional";

const HOUR_IN_SECONDS = 60 * 60;
const addProjectPreview = async (
  repository: GithubApiRepository,
  owner: string,
): Promise<string> => {
  let {
    //@ts-ignore
    repository: { openGraphImageUrl },
  } = await getOpenGraphImageUrls(owner, repository.name);
  const empty = "";

  const openGraphImageResponse = await fetchGithubUrl(openGraphImageUrl);
  if (openGraphImageResponse.status !== status.OK) return empty;
  const fileExtension =
    openGraphImageResponse.headers["content-type"]?.split("/")[1] ?? null;
  if (fileExtension === null) return empty;

  writeImage(
    `${repository.name}.${fileExtension}`,
    Buffer.from(openGraphImageResponse.data),
  );

  return `${repository.name}.${fileExtension}`;
};

const fetchLanguages = async (
  repository: GithubApiRepository,
): Promise<Array<Record<string, number>>> => {
  const response = await fetchGithubUrl(repository.languages_url);
  return response.data;
};

const fetchImplementation = async (): Promise<Array<ProjectInformation>> => {
  const githubProjectsResponse = await getOwnGithubProjects();
  if (githubProjectsResponse.status !== status.OK) {
    return [];
  }
  const repositories = githubProjectsResponse.data;
  const authenticatedUserResponse = await getAuthenticatedUserInformation();

  if (authenticatedUserResponse.status !== status.OK) {
    return [];
  }

  //Huge respect to the Haskell programming language for providing me this insight, i love Maybe.
  const maybe = (promise: PromiseSettledResult<any>, nothingValue: any) =>
    promise.status === "fulfilled" ? promise.value : nothingValue;
  const promises: Array<Promise<ProjectInformation>> = [];
  repositories.forEach((repository) => {
    promises.push(
      Promise.allSettled([
        addProjectPreview(repository, authenticatedUserResponse.data.login),
        fetchLanguages(repository),
      ]).then(([previewPromise, languagesPromise]) => ({
        ...repository,
        social_preview_url: maybe(previewPromise, ""),
        languages: maybe(languagesPromise, []),
      })),
    );
  });

  const rejectedHandler = () => [];
  const resolveHandler = (promises: any[]): Array<ProjectInformation> =>
    promises.map((promise) => promise.value);
  return await Promise.allSettled(promises).then(
    resolveHandler,
    rejectedHandler,
  );
};

export const getProjects = defineCachedFunction(
  emptyOnCatchAsync(fetchImplementation),
  {
    maxAge: HOUR_IN_SECONDS,
    name: "projects_fetcher",
    getKey: () => "projects",
  },
);
