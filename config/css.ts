import { join } from "node:path";
import { readFile, writeFile } from "node:fs/promises";
import autoprefixer from "autoprefixer";
import postcss from "postcss";
import tailwindcss from "tailwindcss";
import tailwindConfig from "../tailwind.config";
import type { EleventyConfig } from "../11ty.js";

export function registerCss(config: EleventyConfig) {
  config.on("eleventy.after", async function ({ directories }) {
    const css = await readFile(join(directories.input, "root.css"), {
      encoding: "utf-8",
    });
    const postcssResult = await postcss([
      tailwindcss(tailwindConfig),
      autoprefixer(),
    ]).process(css);
    await writeFile(join(directories.output, "root.css"), postcssResult.css);
  });
  config.addWatchTarget("root.css");
}
