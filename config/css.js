import { runMode } from "./util.js";
import { transform } from "lightningcss";
import { Buffer } from "node:buffer";
import path from "node:path";

export function registerCss(config) {
  config.addTemplateFormats("css");
  config.addExtension("css", {
    key: "liquid",
    outputFileExtension: "css",
  });
  config.addTransform("cssmin", function (content, outputPath) {
    if (outputPath.endsWith(".css") && runMode() === "build") {
      const { code } = transform({
        filename: path.parse(outputPath).base,
        code: Buffer.from(content),
        minify: true,
      });
      return code.toString();
    }
    return content;
  });
}
