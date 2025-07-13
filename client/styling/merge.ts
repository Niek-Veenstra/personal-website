import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const mergeCn = (classList: string, prioritizedClassList: string) =>
  twMerge(clsx(classList, prioritizedClassList));
