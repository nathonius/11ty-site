import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import type { EleventyConfig } from "../11ty";

export function feed(config: EleventyConfig) {
  config.addPlugin(feedPlugin, {
    type: "atom",
    outputPath: "/feed.xml",
    collection: {
      name: "post",
      limit: 10,
    },
    metadata: {
      language: "en",
      title: "Nathan Smith dot org",
      subtitle:
        "Writings on cool tech, web development, and occasionally life.",
      base: "https://nathan-smith.org/",
      author: {
        name: "Nathan Smith",
      },
    },
  });
}
