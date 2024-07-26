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
  const text = document.createElement("div");
  text.innerText = "Copy";
  button.appendChild(text);
  const icon = lucide.createElement(lucide.Check);
  button.appendChild(icon);
  button.addEventListener("click", () => {
    copyCodeToClipboard(codeblock).then(() => {
      button.classList.add("copied");
      text.innerText = "Copied";
      window.setTimeout(() => {
        text.innerText = "Copy";
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
