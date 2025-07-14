import type { ProjectInformation } from "~/shared/types/github";

export type Project = {
  fullName: string;
  description: string;
  previewUrl: string;
  languages: Record<string, number>;
} & ProjectInformation;
