declare module "@11ty/eleventy" {
  type Plugin = import("../11ty").EleventyPlugin;
  export const InputPathToUrlTransformPlugin: Plugin;
  export const IdAttributePlugin: Plugin;
}
