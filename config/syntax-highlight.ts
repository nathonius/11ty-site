import Shiki from "@shikijs/markdown-it";
import type MarkdownIt from "markdown-it";
import type { EleventyConfig } from "../11ty";

const shiki = await Shiki({
  themes: {
    mocha: "catppuccin-mocha",
    macchiato: "catppuccin-macchiato",
    frappe: "catppuccin-frappe",
    latte: "catppuccin-latte",
  },
  defaultColor: false,
  transformers: [
    {
      pre: function () {
        // Add data-lang="<lang>"
        this.pre.properties.dataLang = this.options.lang;

        // Add data-file="<filename>" ; note this is probably unstable
        const filenameMeta = this.options.meta?.__raw ?? "";
        if (
          filenameMeta &&
          filenameMeta.startsWith("; ") &&
          filenameMeta.length > 2
        ) {
          const filename = filenameMeta.slice(2);
          this.pre.properties.dataFile = filename;
        }
      },
    },
  ],
});

export function syntaxHighlight(config: EleventyConfig) {
  config.amendLibrary("md", (mdLib: MarkdownIt) => {
    mdLib.use(shiki);
  });
}
