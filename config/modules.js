import { runMode } from "./util.js";
import { minify } from "uglify-js";
import path from "node:path";
import through from "through2";

export function registerJsModules(config) {
  config.addPassthroughCopy("src/modules", {
    transform: (src, _dest, _stats) => {
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
