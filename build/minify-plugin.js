import { Buffer } from "node:buffer";
import { transform as cssMinify } from "lightningcss";
import { minify as htmlMinify } from "html-minifier";
import { minify as jsMinify } from "uglify-js";
import path from "node:path";
import through from "through2";

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
  config.addPassthroughCopy("src/modules", {
    transform: (src, _dest, _stats) => {
      if (path.extname(src) !== ".js") {
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
