import Shiki from "@shikijs/markdown-it";
import { EleventyConfig } from "../11ty";
import MarkdownIt from "markdown-it";

const shiki = await Shiki({
  themes: {
    light: "vitesse-light",
    dark: "vitesse-dark",
  },
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
