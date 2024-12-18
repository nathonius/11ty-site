export function absolute(
  value: string,
  base: string = "https://nathan-smith.org"
) {
  return new URL(value, base).href;
}
