import {
  InputPathToUrlTransformPlugin,
  IdAttributePlugin,
} from "@11ty/eleventy";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import navigation from "@11ty/eleventy-navigation";
import output from "@11ty/eleventy-plugin-directory-output";
import RedirectsPlugin from "eleventy-plugin-redirects";
import emoji from "eleventy-plugin-emoji";
import type { EleventyConfig } from "../11ty.js";
import { drafts } from "./drafts.js";
import { syntaxHighlight } from "./syntax-highlight.js";
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
  { plugin: emoji },
];

export default function (config: EleventyConfig) {
  for (const { plugin, options } of plugins) {
    config.addPlugin(plugin, options);
  }
}
