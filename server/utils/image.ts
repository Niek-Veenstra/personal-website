import { writeFile } from "fs";
import { join } from "path";

type ImageSerializable = string | NodeJS.ArrayBufferView;

const directory = join(process.cwd(), "images");

export const writeImage = (path: string, data: ImageSerializable) => {
  writeFile(join(directory, path), data, (err) => {
    if (!err) return;
    console.log("Write image error: " + err.message);
  });
};
