/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

export function eventListener<K extends keyof GlobalEventHandlersEventMap>(
  selector: string,
  event: K,
  f: (this: Element, ev: Event) => any
) {
  const executor = (
    selector: string,
    event: K,
    f: (this: Element, ev: Event) => any
  ) => {
    const element = document.querySelector(selector);
    element?.addEventListener(event, f);
    if (!element) {
      console.warn(`Could not attach listener to element ${selector}`);
    }
  };
  const scriptContent = `(${executor.toString()})('${selector}', '${event}', ${f.toString()})`;

  return <script dangerouslySetInnerHTML={{ __html: scriptContent }} />;
}
