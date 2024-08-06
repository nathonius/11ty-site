import IconsPlugin from "eleventy-plugin-icons";
import { EleventyConfig } from "../11ty";

export function icons(config: EleventyConfig) {
  config.addPlugin(IconsPlugin, {
    sources: [
      {
        name: "lucide",
        path: "node_modules/lucide-static/icons",
        default: true,
      },
    ],
    // @ts-expect-error - type should be partial
    icon: {
      attributes: {
        "aria-hidden": "true",
      },
    },
  });
}
