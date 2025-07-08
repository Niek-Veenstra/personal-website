import { Octokit } from "octokit"
import dotenv from 'dotenv'
dotenv.config();

const authToken = process.env?.GITHUB_TOKEN;
if(authToken == null){
  throw new Error("Authentication token for Github cannot be undefined.");
}
const octoKitInstance = new Octokit({
  auth: authToken,
  userAgent: "personalwebsiteserver/"
})

const HOUR_IN_SECONDS = 60 * 60;
export const getProjects = defineCachedFunction(async () => {
    return await octoKitInstance.rest.repos.listForAuthenticatedUser({
      affiliation : "owner",
  });
}, {
    maxAge: HOUR_IN_SECONDS,
    name: "projects_fetcher",
    getKey: () => "projects"
  }
)
