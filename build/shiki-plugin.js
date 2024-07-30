import Shiki from "@shikijs/markdown-it";

export function shikiPlugin(config) {
  // empty call to notify 11ty that we use this feature
  // eslint-disable-next-line no-empty-function
  config.amendLibrary("md", () => {});

  config.on("eleventy.before", async () => {
    const plugin = await Shiki({
      themes: {
        light: "vitesse-light",
        dark: "vitesse-dark",
      },
      transformers: [
        {
          root: function () {
            this.pre.properties.dataLang = this.options.lang;
          },
        },
      ],
    });
    config.amendLibrary("md", (mdLib) => {
      mdLib.use(plugin);
    });
  });
}
