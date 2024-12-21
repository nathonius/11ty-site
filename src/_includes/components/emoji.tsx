import type { FunctionComponent } from "preact";

export const Emoji: FunctionComponent<{ label: string; value?: string }> = (
  props
) => {
  const { label, value, children } = props;
  return (
    <span class="eleventy-emoji" role="img" aria-label={label}>
      {children}
      {value}
    </span>
  );
};
