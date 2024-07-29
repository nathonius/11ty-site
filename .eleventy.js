// @ts-check

import CalloutPlugin from "markdown-it-obsidian-callouts";
import { InputPathToUrlTransformPlugin } from "@11ty/eleventy";
import { defineConfig } from "11ty.ts";
import { draftsPlugin } from "./build/drafts-plugin.js";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import { getProp } from "./build/util.js";
import { minifyPlugin } from "./build/minify-plugin.js";
import navigation from "@11ty/eleventy-navigation";
import output from "@11ty/eleventy-plugin-directory-output";
import { shikiPlugin } from "./build/shiki-plugin.js";
import RedirectsPlugin from "eleventy-plugin-redirects";

const plugins = [
  { plugin: navigation },
  { plugin: InputPathToUrlTransformPlugin, options: { extensions: "html" } },
  { plugin: output },
  { plugin: eleventyImageTransformPlugin, options: { extensions: "html" } },
  { plugin: shikiPlugin },
  { plugin: minifyPlugin },
  { plugin: draftsPlugin },
  { plugin: RedirectsPlugin, options: { template: "netlify" } },
];

export default defineConfig(function (config) {
  for (const { plugin, options } of plugins) {
    // @ts-expect-error - Types are just inaccurate for this
    config.addPlugin(plugin, options);
  }

  // @ts-expect-error - This can return any value, not just a string
  config.addFilter("keys", function (value) {
    return Object.keys(value);
  });

  config.addFilter("projectStatusSort", function (value) {
    if (!Array.isArray(value)) {
      return value;
    }
    const copy = [...value];
    const projectStatus = {
      Active: 1,
      Maintenance: 2,
      Archived: 3,
    };
    copy.sort((a, b) => {
      if (
        projectStatus[a.data["project-status"]] &&
        projectStatus[b.data["project-status"]]
      ) {
        return projectStatus[a.data["project-status"]] >
          projectStatus[b.data["project-status"]]
          ? 1
          : -1;
      } else if (projectStatus[a.data["project-status"]]) {
        return 1;
      } else if (projectStatus[b.data["project-status"]]) {
        return -1;
      }
      return -1;
    });
    return copy;
  });

  config.addFilter("includes", function (value, key, test) {
    return value.filter((v) => getProp(v, key).includes(test));
  });

  // Add markdown-it plugins
  config.amendLibrary("md", (mdLib) => {
    mdLib.use(CalloutPlugin);
  });

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "public",
    },
  };
});
