import Shiki from "@shikijs/markdown-it";

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

export function shikiPlugin(config) {
  config.amendLibrary("md", (mdLib) => {
    mdLib.use(shiki);
  });
}
