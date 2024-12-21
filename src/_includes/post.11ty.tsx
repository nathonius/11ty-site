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

export function Post(props: TSXProps): JSX.Element {
  const { title, content, page, summary } = props;

  return (
    <html lang="en" data-theme="frappe">
      <head>
        <Boilerplate />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="article" />
        {/* <meta property="og:url" content="{{ page.url | absolute }}"/> */}
        <meta property="og:description" content={summary} />
        {/* <meta property="og:article:published_time" content="{{ date | date_to_xmlschema }}"> */}
        <meta property="og:article:author" content="Nathan Smith"></meta>
        <script>{daScript}</script>
        <link rel="stylesheet" href="/base.css" />
        <link rel="stylesheet" href="/home.css" />
        <link rel="stylesheet" href="/post.css" />
        <title>{title}</title>
      </head>
      <body>
        <div class="home-wrapper">
          <Header url={page.url} />
          <main class="site-content">
            <heading-anchors>
              <div class="post-wrapper">
                <h1 class="post-title">{title}</h1>
                <div class="post-meta">
                  <span>{new Date().toLocaleDateString()}</span>
                  <span aria-hidden="true">/</span>
                  <span>tagged: (some tags)</span>
                </div>
                <div class="post-content">{content}</div>
              </div>
            </heading-anchors>
          </main>
          <Footer />
        </div>
      </body>
      <script type="module" src="/modules/theme-toggle.js"></script>
      <script src="/modules/heading-anchors.js"></script>
      <script type="module" src="/modules/copy-code.js"></script>
    </html>
  );
}

export const render = Post;
