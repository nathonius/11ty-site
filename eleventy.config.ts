import { jsxToString } from "jsx-async-runtime";
import { InputPathToUrlTransformPlugin } from "@11ty/eleventy";
import { EleventyConfig } from "./11ty";

export default function (eleventyConfig: EleventyConfig) {
  eleventyConfig.addExtension("11ty.tsx", {
    key: "11ty.js",
  });
  eleventyConfig.addTemplateFormats("11ty.tsx");

  eleventyConfig.addTransform("tsx", async (content: JSX.Element) => {
    const result = await jsxToString(content);
    return `<!doctype html>\n${result}`;
  });
  eleventyConfig.addPlugin(InputPathToUrlTransformPlugin, {
    extensions: "html",
  });

  return {
    dir: {
      input: "src",
      output: "public",
      layouts: "_includes",
    },
  };
}
