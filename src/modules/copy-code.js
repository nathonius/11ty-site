import { Check, createElement } from "./icons.js";

function addCopyCodeButtons() {
  const codeblocks = document.querySelectorAll("pre.shiki");
  for (const block of codeblocks) {
    addCopyCodeButton(block);
  }
}

function addCopyCodeButton(codeblock) {
  const button = document.createElement("button");
  button.type = "button";
  button.classList.add("copy-code-button");
  button.title = "copy code";

  // Language text shown most of the time
  const lang = document.createElement("span");
  lang.innerText = codeblock.dataset.lang ?? "code";
  button.appendChild(lang);

  const icon = createElement(Check);
  button.appendChild(icon);
  button.addEventListener("click", () => {
    copyCodeToClipboard(codeblock).then(() => {
      button.classList.add("copied");
      lang.innerText = "copied";
      window.setTimeout(() => {
        lang.innerText = codeblock.dataset.lang ?? "code";
        button.classList.remove("copied");
      }, 2000);
    });
  });
  codeblock.appendChild(button);
}

function copyCodeToClipboard(codeblock) {
  const code = codeblock.innerText;
  return navigator.clipboard.writeText(code);
}

addCopyCodeButtons();
