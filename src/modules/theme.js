function update(newTheme) {
  document.documentElement.dataset.theme = newTheme;
  window.localStorage.setItem("prefers-theme", newTheme);
}

function get() {
  return document.documentElement.dataset.theme ?? "emerald";
}

function toggle() {
  const currentTheme = get();
  if (currentTheme === "emerald") {
    update("dark");
  } else {
    update("emerald");
  }
}

function init() {
  const themePreference = window.localStorage.getItem("prefers-theme");
  if (themePreference && ["emerald", "dark"].includes(themePreference)) {
    update(themePreference);
  } else if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    update("dark");
  }
}

Object.assign(window, { theme: { update, get, toggle } });
init();
