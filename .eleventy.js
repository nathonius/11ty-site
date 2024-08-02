// @ts-check

import CalloutPlugin from "markdown-it-obsidian-callouts";
import { InputPathToUrlTransformPlugin } from "@11ty/eleventy";
import { defineConfig } from "11ty.ts";
import { draftsPlugin } from "./build/drafts-plugin.js";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import { minifyPlugin } from "./build/minify-plugin.js";
import navigation from "@11ty/eleventy-navigation";
import output from "@11ty/eleventy-plugin-directory-output";
import { shikiPlugin } from "./build/shiki-plugin.js";
import RedirectsPlugin from "eleventy-plugin-redirects";
import IconsPlugin from "eleventy-plugin-icons";

const plugins = [
  { plugin: navigation },
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

  // @ts-expect-error - This can return any value, not just a string
  config.addFilter("keys", function (value) {
    return Object.keys(value);
  });

  config.addFilter("activeRoute", function (value, baseRoute) {
    if (
      (baseRoute === "/" && value.length < 2) ||
      (baseRoute !== "/" && value.startsWith(baseRoute))
    ) {
      return "active";
    }
    return "";
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
