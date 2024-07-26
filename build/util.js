/**
 * Attempts to handle getting a nested property using a string of js object notation
 */
export function getProp(value, prop) {
  if (!prop.includes(".")) {
    return value[prop] ?? null;
  }

  const parts = prop.split(".");
  let val = value;
  for (const part of parts) {
    try {
      val = val[part];
    } catch (_err) {
      return null;
    }
  }

  return val ?? null;
}
