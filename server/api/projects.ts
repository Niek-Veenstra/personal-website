import { Octokit } from "octokit";
import { getProjects } from "../utils/github";

export default defineEventHandler(async (_) => {
  return await getProjects().catch(_ => []);
});
