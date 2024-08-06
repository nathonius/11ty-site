declare module "@11ty/eleventy-plugin-rss" {
  type Plugin = import("../11ty").EleventyPlugin;
  export const feedPlugin: Plugin;
}
