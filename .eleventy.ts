import CalloutPlugin from "markdown-it-obsidian-callouts";
import type MarkdownIt from "markdown-it";
import { jsxToString } from "jsx-async-runtime";
import { render } from "preact-render-to-string";
import type { JavaScriptTemplate, TSXProps } from "./11ty";
import { defineConfig } from "./11ty";
import registerPlugins from "./config/plugins";

export default defineConfig(function (config) {
  registerPlugins(config);

  config.addExtension("11ty.tsx", {
    compile: async (_, path: string) => {
      const module = (await import(path)) as any;
      return (props: TSXProps) => {
        const result = render(module.default(props));
        return result;
      };
    },
    useJavaScriptImport: true,
    outputFileExtension: "html",
  });
  config.addTemplateFormats("11ty.tsx");

  // Add markdown-it plugins
  config.amendLibrary("md", (mdLib: MarkdownIt) => {
    mdLib.use(CalloutPlugin);
  });

  config.setLiquidOptions({
    jsTruthy: true,
    dateFormat: "%a, %b %d, %Y",
  });

  return {
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
    dir: {
      input: "src",
      output: "public",
    },
  };
});
