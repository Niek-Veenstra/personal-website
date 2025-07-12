import { createIPX, createIPXH3Handler, ipxFSStorage } from "ipx";
import { join } from "node:path";

const ipx = createIPX({
  storage: ipxFSStorage({
    dir: join(process.cwd(), "images"),
  }),
});
export default defineEventHandler((evt) => {
  evt._path = evt.path.replace("/image", "");
  return createIPXH3Handler(ipx)(evt);
});
