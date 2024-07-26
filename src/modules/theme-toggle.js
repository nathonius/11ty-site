const toggle = getToggle();
if (toggle) {
  toggle.addEventListener("click", () => {
    const newTheme =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    setTheme(newTheme, true);
  });
  updateEmoji(document.documentElement.dataset.theme);
}
