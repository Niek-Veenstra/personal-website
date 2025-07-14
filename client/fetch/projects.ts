import type { Project } from "~/client/types/project";
import type { ProjectInformation } from "~/shared/types/github";

const mapProjects = (project: ProjectInformation) => ({
  ...project,
  fullName: project.name,
  description: project.description ?? "",
  previewUrl: project.social_preview_url,
  languages: project.languages,
});
const transform = (apiProjects: Array<ProjectInformation>): Array<Project> =>
  apiProjects.map(mapProjects);

export function useProjects() {
  return useFetch("/api/projects", {
    transform,
  });
}
