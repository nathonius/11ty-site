import { runMode } from "./util.ts";
import { minify } from "uglify-js";
import path from "node:path";
import through from "through2";
import { EleventyConfig } from "../11ty.ts";

export function registerJsModules(config: EleventyConfig) {
  config.addPassthroughCopy("src/modules", {
    transform: (src: string, _dest, _stats) => {
      if (path.extname(src) !== ".js" || runMode() !== "build") {
        return null;
      }
      return through(function (chunk, _enc, done) {
        const { code } = minify(chunk.toString(), { toplevel: true });
        done(null, code);
      });
    },
  });
}
