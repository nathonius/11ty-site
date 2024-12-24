import type { EleventyConfig } from "../11ty";

export function registerCss(config: EleventyConfig) {
  config.addTemplateFormats("css");
  config.addExtension("css", {
    key: "liquid",
    outputFileExtension: "css",
  });
}
