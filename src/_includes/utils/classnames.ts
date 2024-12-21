type ValidClassname = string | string[] | Record<string, boolean>;

export function classnames(...args: ValidClassname[]): string {
  const result: string[] = [];
  for (const arg of args) {
    if (Array.isArray(arg)) {
      result.push(...arg);
    } else if (typeof arg === "object") {
      Object.entries(arg).forEach(([c, v]) => {
        if (v === true) {
          result.push(c);
        }
      });
    } else {
      result.push(arg);
    }
  }
  return result.join(" ");
}

export const cx = classnames;
