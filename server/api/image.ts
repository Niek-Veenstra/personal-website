import { createIPX, createIPXH3Handler, ipxFSStorage } from "ipx";
import { join } from "node:path";

const ipx = createIPX({
  storage: ipxFSStorage({
    dir: join(process.cwd(), "images"),
  }),
});
export default createIPXH3Handler(ipx);
