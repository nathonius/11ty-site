import CalloutPlugin from "markdown-it-obsidian-callouts";
import registerPlugins from "./config/plugins.js";

export default function (config) {
  registerPlugins(config);

  // Add markdown-it plugins
  config.amendLibrary("md", (mdLib) => {
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
}
