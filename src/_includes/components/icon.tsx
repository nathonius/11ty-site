import { readFileSync } from "node:fs";

export function Icon(props: { name: string }) {
  const svgIcon = readFileSync(
    `node_modules/lucide-static/icons/${props.name}.svg`,
    "utf-8"
  );
  return <>{svgIcon.replaceAll("lucide", "icon")}</>;
}
