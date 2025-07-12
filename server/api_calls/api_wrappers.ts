import { graphql as graphQlUnauthenticated } from "@octokit/graphql";
import { Octokit } from "octokit";
import dotenv from "dotenv";
dotenv.config();

const authToken = process.env?.GITHUB_TOKEN;
if (authToken == null) {
  throw new Error("Authentication token for Github cannot be undefined.");
}

export const graphql = graphQlUnauthenticated.defaults({
  headers: {
    authorization: `token ${authToken}`,
  },
});
export const octokit = new Octokit({
  auth: authToken,
  userAgent: "personalwebsiteserver/",
});
