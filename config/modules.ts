import path from "node:path";
import { minify } from "uglify-js";
import through from "through2";
import type { EleventyConfig } from "../11ty.js";
import { runMode } from "./util.js";

export function registerJsModules(config: EleventyConfig) {
  config.addPassthroughCopy("src/modules", {
    transform: (src: string, _dest, _stats) => {
      if (path.extname(src) !== ".js" || runMode() !== "build") {
        return null;
      }
      return through(function (chunk, _enc, done) {
        const { code } = minify((chunk as string).toString(), {
          toplevel: true,
        });
        done(null, code);
      });
    },
  });
}
