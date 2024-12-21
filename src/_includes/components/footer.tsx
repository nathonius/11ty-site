import { absoluteUrl } from "../utils/absolute-url";

export function Footer() {
  return (
    <footer>
      <nav aria-label="Footer navigation">
        <span>© {new Date().toLocaleDateString()} Nathan Smith</span>
        <a href={absoluteUrl("/feed.xml")}>RSS</a>
        <a href="contact.md">Contact</a>
      </nav>
    </footer>
  );
}
