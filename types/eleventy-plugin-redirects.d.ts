declare module "eleventy-plugin-redirects" {
  type Plugin = import("../11ty").EleventyPlugin;
  const plugin: Plugin;
  export default plugin;
}
