import type { EleventyConfig } from "../11ty.js";

export function registerJsModules(config: EleventyConfig) {
  config.addPassthroughCopy("src/modules");
}
