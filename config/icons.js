import IconsPlugin from "eleventy-plugin-icons";

export function icons(config) {
  config.addPlugin(IconsPlugin, {
    sources: [
      {
        name: "lucide",
        path: "node_modules/lucide-static/icons",
        default: true,
      },
    ],
  });
}
