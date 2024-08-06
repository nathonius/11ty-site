declare module "@11ty/eleventy-navigation" {
  type Plugin = import("../11ty").EleventyPlugin;
  const plugin: Plugin;
  export default plugin;
}
