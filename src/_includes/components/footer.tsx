export function Footer(): JSX.Element {
  const absolute = (
    value: string,
    base: string = "https://nathan-smith.org"
  ) => {
    return new URL(value, base).href;
  };
  return (
    <footer>
      <nav aria-label="Footer navigation">
        <span>© {new Date().toLocaleDateString()} Nathan Smith</span>
        <a href={absolute("/feed.xml")}>RSS</a>
        <a href="contact.md">Contact</a>
      </nav>
    </footer>
  );
}
