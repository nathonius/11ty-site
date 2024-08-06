declare module "@11ty/eleventy-img" {
  type Plugin = import("../11ty").EleventyPlugin;
  export const eleventyImageTransformPlugin: Plugin;
}
