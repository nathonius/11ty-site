import { Buffer } from "node:buffer";
import { transform as cssMinify } from "lightningcss";
import { minify as htmlMinify } from "html-minifier";
import { minify as jsMinify } from "uglify-js";
import path from "node:path";

export function minifyPlugin(config) {
  // Minify css
  config.addExtension("css", {
    outputFileExtension: "css",
    compile: (content, filePath) => () => {
      const { code } = cssMinify({
        filename: path.parse(filePath).base,
        code: Buffer.from(content),
        minify: true,
      });
      return code.toString();
    },
  });

  // Minify js modules
  config.addTemplateFormats("js");
  config.addExtension("js", {
    outputFileExtension: "js",
    compile: (content, outputPath) => () => {
      if (outputPath.endsWith(".11tydata.js")) {
        return;
      }
      const { code } = jsMinify(content, { toplevel: true });
      return code;
    },
  });

  // Minify html
  config.addTransform("htmlmin", function (content, outputPath) {
    if (outputPath.endsWith(".html")) {
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
