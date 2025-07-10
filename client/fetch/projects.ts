import type { AsyncData } from "#app";
import type { Project } from "~/client/types/project";
import type { Repository } from "~/shared/types/github";
import type { FetchError } from "ofetch";

const mapProjects = (project: Repository) => ({
  fullName: project.name,
  description: project.description ?? "",
  previewUrl: project.social_preview_url,
});
const transform = (apiProjects: Array<Repository>): Array<Project> =>
  apiProjects.map(mapProjects);

export function useProjects() {
  return useFetch("/api/projects", {
    transform,
  });
}
