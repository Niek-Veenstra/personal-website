import type { GithubApiRepository } from "../types/github";
import type { Repository } from "~/shared/types/github";
import { status } from "http-status";
import { writeImage } from "./../utils/image";
import {
  fetchOpenGraphImages,
  getAuthenticatedUserInformation,
  getOpenGraphImageUrls,
  getOwnGithubProjects,
} from "../api_calls/github";
import { emptyOnCatchAsync } from "../utils/functional";

const HOUR_IN_SECONDS = 60 * 60;
const addProjectPreview = async (
  repository: GithubApiRepository,
  owner: string,
): Promise<Repository> => {
  //@ts-ignore
  let {
    repository: { openGraphImageUrl },
  } = await getOpenGraphImageUrls(owner, repository.name);
  const empty = { social_preview_url: "", ...repository };

  const openGraphImageResponse = await fetchOpenGraphImages(openGraphImageUrl);
  if (openGraphImageResponse.status !== status.OK) return empty;
  const fileExtension =
    openGraphImageResponse.headers["content-type"]?.split("/")[1] ?? null;
  if (fileExtension === null) return empty;

  writeImage(
    `${repository.name}.${fileExtension}`,
    Buffer.from(openGraphImageResponse.data),
  );

  return {
    social_preview_url: `${repository.name}.${fileExtension}`,
    ...repository,
  };
};

const fetchImplementation = async (): Promise<Array<Repository>> => {
  const githubProjectsResponse = await getOwnGithubProjects();
  if (githubProjectsResponse.status !== status.OK) {
    return [];
  }
  const projects = githubProjectsResponse.data;
  const authenticatedUserResponse = await getAuthenticatedUserInformation();

  if (authenticatedUserResponse.status !== status.OK) {
    return [];
  }

  const promises: Array<Promise<Repository>> = [];
  projects.forEach((project) => {
    promises.push(
      addProjectPreview(project, authenticatedUserResponse.data.login),
    );
  });

  const rejectedHandler = () => [];
  const resolveHandler = (promises: any[]) =>
    promises
      .filter((promise) => promise.status === "fulfilled")
      .map((promise) => promise.value);
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
