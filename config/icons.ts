import IconsPlugin from "eleventy-plugin-icons";
import type { EleventyConfig } from "../11ty";

export function icons(config: EleventyConfig) {
  config.addPlugin(IconsPlugin, {
    sources: [
      {
        name: "lucide",
        path: "node_modules/lucide-static/icons",
        default: true,
      },
    ],
    icon: {
      attributes: {
        "aria-hidden": "true",
      },
    },
  });
}
