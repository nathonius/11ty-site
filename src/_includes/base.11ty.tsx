import type { FunctionComponent, VNode } from "preact";
import { Boilerplate } from "./components/boilerplate";

interface BaseProps {
  title: string;
  stylesheets: string[];
  head?: VNode;
  post?: VNode;
}

export const Base: FunctionComponent<BaseProps> = (props) => {
  const { title, children, stylesheets, head, post } = props;
  return (
    <html lang="en" data-theme="emerald">
      <head>
        <script type="module" src="/modules/theme.js" />
        <Boilerplate />
        {stylesheets.map((s) => (
          <link rel="stylesheet" href={s} />
        ))}
        {head}
        <title>{title}</title>
      </head>
      <body>{children}</body>
      {post}
    </html>
  );
};

export default Base;
