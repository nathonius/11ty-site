import type { TSXProps } from "../../11ty";
import { Boilerplate } from "./components/boilerplate";
import { Footer } from "./components/footer";
import { Header } from "./components/header";

const daScript = `const themes = ['mocha', 'macchiato', 'frappe', 'latte'];
  function getToggle() {
    return document.querySelector('button#theme-toggle');
  }
  function setTheme(theme, store) {
    const newTheme = theme ?? 'frappe';
    document.documentElement.dataset.theme = newTheme;
    if (store) {
      window.localStorage.setItem('prefers-theme', newTheme);
    }
    window.requestIdleCallback(() => {
      const themeName = document.querySelector('#theme-name');
      themeName.dataset.hint = \`\${newTheme} theme\`;
    });
  }

  let theme = 'frappe';
  const themePreference = window.localStorage.getItem('prefers-theme');
  if (themePreference && themes.includes(themePreference)) {
    theme = themePreference;
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    theme = 'latte';
  }
  setTheme(theme);`;

export function Home(props: TSXProps): JSX.Element {
  const { title, content, page } = props;

  return (
    <html lang="en" data-theme="frappe">
      <head>
        <Boilerplate />
        <script>{daScript}</script>
        <link rel="stylesheet" href="/base.css" />
        <link rel="stylesheet" href="/home.css" />
        <title>{title}</title>
      </head>
      <body>
        <div class="home-wrapper">
          <Header url={page.url} />
          <main class="site-content">{content}</main>
          <Footer />
        </div>
      </body>
      <script type="module" src="/modules/theme-toggle.js"></script>
    </html>
  );
}

export const render = Home;
