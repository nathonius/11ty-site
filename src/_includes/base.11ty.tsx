import type { TSXProps } from "../../11ty";
import { Boilerplate } from "./components/boilerplate";

export function Base(props: TSXProps): JSX.Element {
  const { title, content } = props;
  return (
    <html lang="en" data-theme="frappe">
      <head>
        <Boilerplate />
        <link rel="stylesheet" href="/base.css" />
        <title>{title}</title>
      </head>
      <body>{content}</body>
    </html>
  );
}

export const render = Base;
