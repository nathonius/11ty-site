import CalloutPlugin from "markdown-it-obsidian-callouts";
import type MarkdownIt from "markdown-it";
import { defineConfig } from "./11ty";
import registerPlugins from "./config/plugins";

export default defineConfig(function (config) {
  registerPlugins(config);

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
