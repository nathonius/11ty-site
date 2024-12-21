import { readFileSync } from "node:fs";
import { jsxTemplate } from "preact/jsx-runtime";

export function Icon(props: { name: string }) {
  const svgIcon = readFileSync(
    `node_modules/lucide-static/icons/${props.name}.svg`,
    "utf-8"
  );
  const eleventyIcon = svgIcon.replaceAll("lucide", "icon");
  return jsxTemplate([eleventyIcon]);
}
