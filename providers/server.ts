import { createOperationsGenerator } from "#image";
import type { ProviderGetImage } from "@nuxt/image";
import { joinURL } from "ufo";

const operationsGenerator = createOperationsGenerator();

export const getImage: ProviderGetImage = (src, { modifiers = {} } = {}) => {
  const operations = operationsGenerator(modifiers);
  const appendedPath = "api/image";
  return {
    url: joinURL(appendedPath, src + (operations ? "?" + operations : "")),
  };
};
