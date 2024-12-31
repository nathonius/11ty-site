import type { FunctionComponent } from "preact";
import type { TSXProps } from "../../11ty";
import { PostTags } from "./components/post-tags";
import { Home } from "./home.11ty";

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

export const Post: FunctionComponent<TSXProps> = (props: TSXProps) => {
  // const {title, page, summary}
  const { content, tags, title, ...rest } = props;
  // const { title, content, page, summary, tags } = props;
  // const head = (
  //   <>
  //     <meta property="og:title" content={title} />
  //     <meta property="og:type" content="article" />
  //     {/* <meta property="og:url" content="{{ page.url | absolute }}"/> */}
  //     <meta property="og:description" content={summary} />
  //     {/* <meta property="og:article:published_time" content="{{ date | date_to_xmlschema }}"> */}
  //     <meta property="og:article:author" content="Nathan Smith"></meta>
  //     <script dangerouslySetInnerHTML={{ __html: daScript }}></script>
  //   </>
  // );
  // const post = (
  //   <>
  //     <script type="module" src="/modules/theme-toggle.js"></script>
  //     <script type="module" src="/modules/copy-code.js"></script>
  //   </>
  // );

  return (
    <Home {...rest} title={title}>
      <h1>{title}</h1>
      <div class="flex gap-2">
        <span>{new Date().toLocaleDateString()}</span>
        <span aria-hidden="true">/</span>
        <span>
          tagged: <PostTags tags={tags} />
        </span>
      </div>
      <div class="prose bg-base-100">
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </Home>
  );
};

export default Post;
