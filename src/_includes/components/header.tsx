import { cx } from "../utils/classnames";
import { activeRoute } from "../utils/active-route";
import { eventListener } from "../utils/event-listener";
import { Icon } from "./icon";

export function Header(props: { url: string }) {
  const { url } = props;
  const themeListener = eventListener("#header--theme-toggle", "click", () => {
    (window as any).theme.toggle();
  });

  return (
    <header>
      <nav
        class="navbar bg-base-100 gap-1 md:gap-2"
        aria-label="Primary navigation"
      >
        <a
          class={cx("btn btn-ghost", { "btn-active": activeRoute(url, "/") })}
          href="index.md"
        >
          Home
        </a>
        <a
          class={cx("btn btn-ghost", {
            "btn-active": activeRoute(url, "/posts"),
          })}
          href="posts.md"
        >
          Posts
        </a>
        <a
          class={cx("btn btn-ghost", {
            "btn-active": activeRoute(url, "/projects"),
          })}
          href="projects.md"
        >
          Projects
        </a>
        <a
          class={cx("btn btn-ghost hidden md:flex", {
            "btn-active": activeRoute(url, "/contact"),
          })}
          href="contact.md"
        >
          Contact
        </a>
        <a
          class={cx("btn btn-ghost hidden md:flex", {
            "btn-active": activeRoute(url, "/search"),
          })}
          href="search.liquid"
        >
          Search
        </a>
        <div class="flex gap-2">
          <a
            id="search-icon"
            href="search.liquid"
            class={cx("btn btn-ghost md:hidden", {
              "btn-active": activeRoute(url, "/search"),
            })}
          >
            <span class="sr-only">Search</span>
            <Icon name="search" />
          </a>
          <div class="tooltip tooltip-bottom" data-tip="Toggle theme">
            <button
              id="header--theme-toggle"
              type="button"
              class="btn btn-ghost"
              aria-label="Toggle theme"
            >
              <Icon name="sun-moon" />
            </button>
          </div>
          {themeListener}
        </div>
      </nav>
    </header>
  );
}
