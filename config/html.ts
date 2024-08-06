import { minify } from "html-minifier";
import { runMode } from "./util.js";
import { EleventyConfig } from "../11ty.js";

export function minifyHtml(config: EleventyConfig) {
  config.addTransform("htmlmin", function (content, outputPath) {
    if (outputPath.endsWith(".html") && runMode() === "build") {
      return minify(content, {
        collapseBooleanAttributes: true,
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
        decodeEntities: true,
        minifyJS: true,
        preserveLineBreaks: true,
      });
    }
    return content;
  });
}
