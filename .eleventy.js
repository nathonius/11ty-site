// @ts-check

import CalloutPlugin from "markdown-it-obsidian-callouts";
import {
  InputPathToUrlTransformPlugin,
  IdAttributePlugin,
} from "@11ty/eleventy";
import { defineConfig } from "11ty.ts";
import { draftsPlugin } from "./build/drafts-plugin.js";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import { minifyPlugin } from "./build/minify-plugin.js";
import navigation from "@11ty/eleventy-navigation";
import output from "@11ty/eleventy-plugin-directory-output";
import { shikiPlugin } from "./build/shiki-plugin.js";
import RedirectsPlugin from "eleventy-plugin-redirects";
import IconsPlugin from "eleventy-plugin-icons";
import Filters from "./build/filters.js";

const plugins = [
  { plugin: Filters },
  { plugin: navigation },
  { plugin: IdAttributePlugin },
  { plugin: InputPathToUrlTransformPlugin, options: { extensions: "html" } },
  { plugin: output },
  { plugin: eleventyImageTransformPlugin, options: { extensions: "html" } },
  { plugin: shikiPlugin },
  { plugin: minifyPlugin },
  { plugin: draftsPlugin },
  { plugin: RedirectsPlugin, options: { template: "netlify" } },
  {
    plugin: IconsPlugin,
    options: {
      sources: [
        {
          name: "lucide",
          path: "node_modules/lucide-static/icons",
          default: true,
        },
      ],
    },
  },
];

export default defineConfig(function (config) {
  for (const { plugin, options } of plugins) {
    // @ts-expect-error - Types are just inaccurate for this
    config.addPlugin(plugin, options);
  }

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
});
