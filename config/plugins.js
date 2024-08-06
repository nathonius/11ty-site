import {
  InputPathToUrlTransformPlugin,
  IdAttributePlugin,
} from "@11ty/eleventy";
import { drafts } from "./drafts.js";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import navigation from "@11ty/eleventy-navigation";
import output from "@11ty/eleventy-plugin-directory-output";
import { syntaxHighlight } from "./syntax-highlight.js";
import RedirectsPlugin from "eleventy-plugin-redirects";
import { registerFilters } from "./filters.js";
import { registerShortcodes } from "./shortcodes.js";
import { feed } from "./feed.js";
import { registerCss } from "./css.js";
import { minifyHtml } from "./html.js";
import { registerJsModules } from "./modules.js";
import { icons } from "./icons.js";

const plugins = [
  { plugin: registerFilters },
  { plugin: registerShortcodes },
  { plugin: navigation },
  { plugin: IdAttributePlugin },
  { plugin: InputPathToUrlTransformPlugin, options: { extensions: "html" } },
  { plugin: output },
  { plugin: eleventyImageTransformPlugin, options: { extensions: "html" } },
  { plugin: syntaxHighlight },
  { plugin: minifyHtml },
  { plugin: registerCss },
  { plugin: registerJsModules },
  { plugin: drafts },
  { plugin: RedirectsPlugin, options: { template: "netlify" } },
  { plugin: icons },
  { plugin: feed },
];

export default function (config) {
  for (const { plugin, options } of plugins) {
    config.addPlugin(plugin, options);
  }
}
