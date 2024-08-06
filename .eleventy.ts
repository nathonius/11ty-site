import CalloutPlugin from "markdown-it-obsidian-callouts";
import { defineConfig } from "./11ty";
import registerPlugins from "./config/plugins";
import MarkdownIt from "markdown-it";

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
