/* eslint-disable @typescript-eslint/consistent-type-imports */
declare module "markdown-it-obsidian-callouts" {
  type Plugin = import("markdown-it").PluginSimple;
  const plugin: Plugin;
  export default plugin;
}
declare module "eleventy-plugin-redirects" {
  type Plugin = import("../11ty").EleventyPlugin;
  const plugin: Plugin;
  export default plugin;
}
declare module "@11ty/eleventy" {
  type Plugin = import("../11ty").EleventyPlugin;
  export const InputPathToUrlTransformPlugin: Plugin;
  export const IdAttributePlugin: Plugin;
}
declare module "@11ty/eleventy-plugin-rss" {
  type Plugin = import("../11ty").EleventyPlugin;
  export const feedPlugin: Plugin;
}
declare module "@11ty/eleventy-navigation" {
  type Plugin = import("../11ty").EleventyPlugin;
  const plugin: Plugin;
  export default plugin;
}
declare module "@11ty/eleventy-img" {
  type Plugin = import("../11ty").EleventyPlugin;
  export const eleventyImageTransformPlugin: Plugin;
}
declare module "@11ty/eleventy-plugin-directory-output" {
  type Plugin = import("../11ty").EleventyPlugin;
  const plugin: Plugin;
  export default plugin;
}
declare module "eleventy-plugin-emoji" {
  type Plugin = import("../11ty").EleventyPlugin;
  const plugin: Plugin;
  export default plugin;
}
