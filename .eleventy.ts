/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import CalloutPlugin from "markdown-it-obsidian-callouts";
import type MarkdownIt from "markdown-it";
import { render } from "preact-render-to-string";
import type { FunctionComponent, VNode } from "preact";
import type { TSXProps } from "./11ty";
import { defineConfig } from "./11ty";
import registerPlugins from "./config/plugins";

export default defineConfig(function (config) {
  registerPlugins(config);

  config.addExtension("11ty.tsx", {
    getInstanceFromInputPath: async function (path) {
      const module: { default: FunctionComponent } = await import(path);
      return module.default;
    },
    compile: function (component: FunctionComponent<TSXProps>) {
      return (props: TSXProps) => {
        const result = render(component(props) as VNode);
        return result;
      };
    },
    useJavaScriptImport: true,
    outputFileExtension: "html",
  });

  // Add markdown-it plugins
  config.amendLibrary("md", (mdLib: MarkdownIt) => {
    mdLib.use(CalloutPlugin);
  });

  config.setLiquidOptions({
    jsTruthy: true,
    dateFormat: "%a, %b %d, %Y",
  });

  config.addWatchTarget("./tailwind.config.js");

  return {
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
    dir: {
      input: "src",
      output: "public",
    },
  };
});
