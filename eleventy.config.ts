import { jsxToString } from "jsx-async-runtime";
import { InputPathToUrlTransformPlugin } from "@11ty/eleventy";
import { EleventyConfig } from "./11ty";

export default function (eleventyConfig: EleventyConfig) {
  eleventyConfig.addExtension("11ty.tsx", {
    compile: async (_, path: string) => {
      const module = await import(path);
      return async (props) => await jsxToString(module.render(props));
    },
    useJavaScriptImport: true,
    outputFileExtension: "html",
  });
  eleventyConfig.addTemplateFormats("11ty.tsx");
  eleventyConfig.addPlugin(InputPathToUrlTransformPlugin, {
    extensions: "html,11ty.tsx",
  });

  return {
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
    dir: {
      input: "src",
      output: "public",
    },
  };
}
