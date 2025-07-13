import { joinURL, encodePath, encodeParam } from "ufo";
import { createOperationsGenerator } from "#image";
const operationsGenerator = createOperationsGenerator({
  keyMap: {
    format: "f",
    fit: "fit",
    width: "w",
    height: "h",
    resize: "s",
    quality: "q",
    background: "b",
  },
  joinWith: "&",
  formatter: (key, val) => encodeParam(key) + "_" + encodeParam(val),
});
import type { ProviderGetImage } from "@nuxt/image";

export const getImage: ProviderGetImage = (src, { modifiers = {} } = {}) => {
  let operations = operationsGenerator(modifiers) || "";
  if (operations.length !== 0) {
    operations = "_ipx/" + operations;
  }
  const appendedPath = "api/image/";
  return {
    url: joinURL(appendedPath, operations, src),
  };
};
