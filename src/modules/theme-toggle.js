const themeToggle = getToggle();
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const themeIndex =
      themes.indexOf(document.documentElement.dataset.theme) ?? -1;
    const newTheme = themes[(themeIndex + 1) % 4];
    setTheme(newTheme, true);
  });
}
