import { Octokit } from "octokit";
import dotenv from "dotenv";
import { graphql as graphQlUnauthenticated } from "@octokit/graphql";
import type { GithubApiRepository } from "../types/github";
import type { Repository } from "~/shared/types/github";
import { HTTP_OK } from "~/shared/http/status_codes";
dotenv.config();
const authToken = process.env?.GITHUB_TOKEN;
if (authToken == null) {
  throw new Error("Authentication token for Github cannot be undefined.");
}
const graphql = graphQlUnauthenticated.defaults({
  headers: {
    authorization: `token ${authToken}`,
  },
});
const octoKitInstance = new Octokit({
  auth: authToken,
  userAgent: "personalwebsiteserver/",
});

const HOUR_IN_SECONDS = 60 * 60;
const addProjectPreview = async (
  repository: GithubApiRepository,
  owner: string,
): Promise<Repository> => {
  //@ts-ignore
  const {
    repository: { openGraphImageUrl },
  } = await graphql(
    `
      query getSocialMediaUrl($owner: String!, $name: String!) {
        repository(owner: $owner, name: $name) {
          openGraphImageUrl
        }
      }
    `,
    {
      owner,
      name: repository.name,
    },
  );
  return { social_preview_url: openGraphImageUrl, ...repository };
};

const emptyOnCatch = (func: () => any) => {
  return () => {
    try {
      return func();
    } catch (exc) {
      return [];
    }
  };
};
const fetchImplementation = async (): Promise<Array<Repository>> => {
  const githubProjectsResponse =
    await octoKitInstance.rest.repos.listForAuthenticatedUser({
      affiliation: "owner",
    });
  if (githubProjectsResponse.status !== HTTP_OK) {
    return [];
  }
  const projects = githubProjectsResponse.data;
  const authenticatedUserResponse =
    await octoKitInstance.rest.users.getAuthenticated();
  if (authenticatedUserResponse.status !== HTTP_OK) {
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
  emptyOnCatch(fetchImplementation),
  {
    maxAge: HOUR_IN_SECONDS,
    name: "projects_fetcher",
    getKey: () => "projects",
  },
);
