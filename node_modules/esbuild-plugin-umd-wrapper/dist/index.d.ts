import type { Plugin } from "esbuild";
import type { UmdOptions } from "./declaration";
declare const umdWrapper: (customOptions?: UmdOptions) => Plugin;
export default umdWrapper;
export { umdWrapper };
