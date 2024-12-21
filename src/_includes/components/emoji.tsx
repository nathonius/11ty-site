export function Emoji(props: { label: string; value: string }): JSX.Element {
  return (
    <span class="eleventy-emoji" role="img" aria-label={props.label}>
      {props.value}
    </span>
  );
}
