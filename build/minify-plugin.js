import { Buffer } from "node:buffer";
import { transform as cssMinify } from "lightningcss";
import { minify as htmlMinify } from "html-minifier";
import { minify as jsMinify } from "uglify-js";
import path from "node:path";
import through from "through2";
import { runMode } from "./util.js";

export function minifyPlugin(config) {
  // Minify css
  config.addTemplateFormats("css");
  config.addExtension("css", {
    key: "liquid",
    outputFileExtension: "css",
  });
  config.addTransform("cssmin", function (content, outputPath) {
    if (outputPath.endsWith(".css") && runMode() === "build") {
      const { code } = cssMinify({
        filename: path.parse(outputPath).base,
        code: Buffer.from(content),
        minify: true,
      });
      return code.toString();
    }
    return content;
  });

  // Minify js modules
  config.addPassthroughCopy("src/modules", {
    transform: (src, _dest, _stats) => {
      if (path.extname(src) !== ".js" || runMode() !== "build") {
        return null;
      }
      return through(function (chunk, _enc, done) {
        const { code } = jsMinify(chunk.toString(), { toplevel: true });
        done(null, code);
      });
    },
  });

  // Minify html
  config.addTransform("htmlmin", function (content, outputPath) {
    if (outputPath.endsWith(".html") && runMode() === "build") {
      return htmlMinify(content, {
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
