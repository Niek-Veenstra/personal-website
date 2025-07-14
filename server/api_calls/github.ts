import { HTTPMethod } from "~/shared/http/http";
import { graphql, octokit } from "./api_wrappers";

export const fetchGithubUrl = async (imageUrl: string) =>
  await octokit.request({
    method: HTTPMethod.GET,
    url: imageUrl,
  });

export const getOpenGraphImageUrls = async (
  owner: string,
  repositoryName: string,
) =>
  await graphql(
    `
      query getSocialMediaUrl($owner: String!, $name: String!) {
        repository(owner: $owner, name: $name) {
          openGraphImageUrl
        }
      }
    `,
    {
      owner,
      name: repositoryName,
    },
  );

export const getOwnGithubProjects = async () =>
  await octokit.rest.repos.listForAuthenticatedUser({
    affiliation: "owner",
  });

export const getAuthenticatedUserInformation = async () =>
  await octokit.rest.users.getAuthenticated();
