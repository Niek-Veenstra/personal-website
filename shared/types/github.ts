import type { GithubApiRepository } from "~/server/types/github";

type ProjectInformation = GithubApiRepository & {
  social_preview_url: string;
  languages: Record<string, number>;
};
export type { ProjectInformation };
