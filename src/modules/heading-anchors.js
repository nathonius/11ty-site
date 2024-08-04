// Modified from https://github.com/daviddarnes/heading-anchors

class HeadingAnchors extends HTMLElement {
  static register(tagName) {
    if ("customElements" in window) {
      customElements.define(tagName || "heading-anchors", HeadingAnchors);
    }
  }

  connectedCallback() {
    this.headings.forEach((heading) => {
      if (!heading.hasAttribute("tabindex")) {
        heading.setAttribute("tabindex", -1);
      }
      heading.insertAdjacentHTML(this.position, this.anchor(heading));
    });
  }

  anchor(heading) {
    const anchor = document.createElement("a");
    anchor.href = `#${heading.id}`;
    anchor.classList.add("heading-anchor");
    anchor.innerHTML = `<span class="sr-only">Jump to heading</span><span aria-hidden="true">${heading.localName}</span>`;
    return anchor.outerHTML;
  }

  get headings() {
    return this.querySelectorAll(this.selector);
  }

  get selector() {
    return this.getAttribute("selector") || "h1[id], h2[id], h3[id], h4[id]";
  }

  get position() {
    return this.getAttribute("position") || "afterbegin";
  }
}

HeadingAnchors.register();
