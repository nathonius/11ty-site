import autoprefixer from "autoprefixer";
import postcss from "postcss";
import tailwindcss from "tailwindcss";
import tailwindConfig from "../tailwind.config";
import type { EleventyConfig } from "../11ty.js";

export function registerCss(config: EleventyConfig) {
  config.addTemplateFormats("css");
  config.addExtension("css", {
    key: "liquid",
    outputFileExtension: "css",
  });
  config.addTransform("postcss", async (content, output) => {
    if (!output.endsWith("/root.css")) {
      return content;
    }
    const postcssResult = await postcss([
      tailwindcss(tailwindConfig),
      autoprefixer(),
    ]).process(content);
    return postcssResult.css;
  });
}
