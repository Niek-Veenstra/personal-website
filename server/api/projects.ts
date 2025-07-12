import { getProjects } from "../cached_functions/github";

export default defineEventHandler(async (_) => {
  return await getProjects().catch((err) => {
    return [];
  });
});
