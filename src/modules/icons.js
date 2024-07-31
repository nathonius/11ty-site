/* Lucide icons rendered in the browser, not build time */

const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
};

export const Check = [
  "svg",
  defaultAttributes,
  [["path", { d: "M20 6 9 17l-5-5" }]],
];

function _createElement(tag, attrs, children) {
  const element = document.createElementNS("http://www.w3.org/2000/svg", tag);

  Object.keys(attrs).forEach((name) => {
    element.setAttribute(name, String(attrs[name]));
  });

  if (children?.length) {
    for (const child of children) {
      const childElement = _createElement(...child);
      element.appendChild(childElement);
    }
  }

  return element;
}

export function createElement([tag, attrs, children]) {
  return _createElement(tag, attrs, children);
}
