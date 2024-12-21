import { Emoji } from "./emoji";
import { Icon } from "./icon";

export function Header(props: { url: string }) {
  const { url } = props;
  const activeRoute = (
    value: string,
    baseRoute: string,
    desktopOnly = false,
    phoneOnly = false
  ) => {
    let classname = "header-link";

    if (
      (baseRoute === "/" && value.length < 2) ||
      (baseRoute !== "/" && value.startsWith(baseRoute))
    ) {
      classname += " active";
    }
    if (desktopOnly) {
      classname += " bp-tablet-up";
    }
    if (phoneOnly) {
      classname += " bp-phone-only";
    }
    return classname;
  };
  return (
    <header>
      <nav class="site-nav" aria-label="Primary navigation">
        <ul class="header-link-list">
          <li>
            <a class={activeRoute(url, "/")} href="index.md">
              Home
            </a>
          </li>
          <li>
            <a class={activeRoute(url, "/posts")} href="posts.md">
              Posts
            </a>
          </li>
          <li>
            <a class={activeRoute(url, "/projects")} href="projects.md">
              Projects
            </a>
          </li>
          <li>
            <a class={activeRoute(url, "/contact", true)} href="contact.md">
              Contact
            </a>
          </li>
          <li>
            <a class={activeRoute(url, "/search", true)} href="search.liquid">
              Search
            </a>
          </li>
        </ul>
        <div class="header-right">
          <a
            id="search-icon"
            href="search.liquid"
            class={"icon-button" + activeRoute(url, "/search", false, true)}
          >
            <span class="sr-only">Search</span>
            <Icon name="search" />
          </a>
          <button
            id="theme-toggle"
            type="button"
            class="icon-button"
            aria-label="Toggle theme"
          >
            <span id="theme-name" class="hint--bottom" data-hint="mocha-theme">
              <Emoji label="mocha theme">🌿</Emoji>
              <Emoji label="macchiato theme">🌺</Emoji>
              <Emoji label="frappe theme">🪴</Emoji>
              <Emoji label="latte theme">🌻</Emoji>
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}
