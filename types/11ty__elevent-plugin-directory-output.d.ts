declare module "@11ty/eleventy-plugin-directory-output" {
  type Plugin = import("../11ty").EleventyPlugin;
  const plugin: Plugin;
  export default plugin;
}
