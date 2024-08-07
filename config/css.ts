import { Buffer } from "node:buffer";
import path from "node:path";
import { transform } from "lightningcss";
import type { EleventyConfig } from "../11ty";
import { runMode } from "./util";

export function registerCss(config: EleventyConfig) {
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
