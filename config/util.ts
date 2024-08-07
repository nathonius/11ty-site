export function runMode() {
  return Deno.env.get("ELEVENTY_RUN_MODE") ?? "build";
}
