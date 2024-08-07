import type { EleventyConfig } from "../11ty";

export function registerShortcodes(config: EleventyConfig) {
  config.addShortcode(
    "postTags",
    function (tags: string[], ...filterTags: string[]) {
      const _filterTags =
        !filterTags || filterTags.length === 0 ? ["post"] : filterTags;
      const displayTags = tags.filter((t) => !_filterTags.includes(t));
      const links = displayTags.map((t) => `<a href="/tagged/${t}/">${t}</a>`);
      return links.join(", ");
    }
  );
}
