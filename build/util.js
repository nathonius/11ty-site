export function runMode() {
  return process.env.ELEVENTY_RUN_MODE ?? "build";
}
