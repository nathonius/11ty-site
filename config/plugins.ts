import {
  InputPathToUrlTransformPlugin,
  IdAttributePlugin,
} from "@11ty/eleventy";
import { drafts } from "./drafts.ts";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import navigation from "@11ty/eleventy-navigation";
import output from "@11ty/eleventy-plugin-directory-output";
import { syntaxHighlight } from "./syntax-highlight.ts";
import RedirectsPlugin from "eleventy-plugin-redirects";
import { registerFilters } from "./filters.ts";
import { registerShortcodes } from "./shortcodes.ts";
import { feed } from "./feed.ts";
import { registerCss } from "./css.ts";
import { minifyHtml } from "./html.ts";
import { registerJsModules } from "./modules.ts";
import { icons } from "./icons.ts";
import { EleventyConfig } from "../11ty.ts";

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

export default function (config: EleventyConfig) {
  for (const { plugin, options } of plugins) {
    config.addPlugin(plugin, options);
  }
}
