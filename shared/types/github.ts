import type { GithubApiRepository } from "~/server/types/github";

type Repository = GithubApiRepository & { social_preview_url: string };
export type { Repository };
