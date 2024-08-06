import { minify } from "html-minifier";
import { runMode } from "./util.js";

export function minifyHtml(config) {
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
