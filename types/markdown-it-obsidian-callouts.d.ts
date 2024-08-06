declare module "markdown-it-obsidian-callouts" {
  type Plugin = import("markdown-it").PluginSimple;
  const plugin: Plugin;
  export default plugin;
}
