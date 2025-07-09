import type { Project } from "~/client/types/project";
import type { Repository } from "~/shared/types/github";

const SUCCESS = "success";
export async function useProjects(): Promise<Ref<Array<Project>>> {
  const result = useFetch<Array<Repository>>("/api/projects");

  if (result.error.value || result.status.value !== SUCCESS) {
    console.log(result.error.value);
    console.log(result.status.value);
    return ref([]);
  }

  return ref(
    result?.data?.value?.map((project) => ({
      fullName: project.name,
      description: project.description ?? "",
      previewUrl: project.social_preview_url,
    })) ?? [],
  );
}
