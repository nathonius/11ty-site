import { feedPlugin } from "@11ty/eleventy-plugin-rss";

export default function (config) {
  config.addPlugin(feedPlugin, {
    type: "atom",
    outputPath: "/feed.xml",
    collection: {
      name: "post", // iterate over `collections.posts`
      limit: 10, // 0 means no limit
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
