import { cx } from "../utils/classnames";
import { activeRoute } from "../utils/active-route";
import { Emoji } from "./emoji";
import { Icon } from "./icon";

export function Header(props: { url: string }) {
  const { url } = props;

  return (
    <header>
      <nav class="site-nav" aria-label="Primary navigation">
        <ul class="header-link-list">
          <li>
            <a
              class={cx("header-link", { active: activeRoute(url, "/") })}
              href="index.md"
            >
              Home
            </a>
          </li>
          <li>
            <a
              class={cx("header-link", { active: activeRoute(url, "/posts") })}
              href="posts.md"
            >
              Posts
            </a>
          </li>
          <li>
            <a
              class={cx("header-link", {
                active: activeRoute(url, "/projects"),
              })}
              href="projects.md"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              class={cx("header-link", "bp-tablet-up", {
                active: activeRoute(url, "/contact"),
              })}
              href="contact.md"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              class={cx("header-link", "bp-tablet-up", {
                active: activeRoute(url, "/search"),
              })}
              href="search.liquid"
            >
              Search
            </a>
          </li>
        </ul>
        <div class="header-right">
          <a
            id="search-icon"
            href="search.liquid"
            class={cx("icon-button", "bp-phone-only", {
              active: activeRoute(url, "/search"),
            })}
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
