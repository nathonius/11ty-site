import { LayoutData } from "../../11ty";
import { absolute } from "../util";
import { Boilerplate } from "./components/boilerplate";
import { OpenGraph } from "./components/open-graph";

interface BaseProps extends LayoutData {
  title?: string;
  tags?: string[];
  summary?: string;
}

export function Base(props: BaseProps): JSX.Element {
  const { content, title, tags, summary, page, date } = props;
  return (
    <html>
      <head>
        <Boilerplate />
        <meta name="description" content="{{ summary }}" />
        <title>{title ?? "Nathan Smith"}</title>
        {title && <OpenGraph property="title" content={title} />}
        {summary && <OpenGraph property="type" content="article" />}
        <OpenGraph property="url" content={absolute(page.url)} />
        {summary && <OpenGraph property="description" content={summary} />}
        {title && <OpenGraph property="title" content={title} />}
        {/* add og:article:published_time here */}
        <OpenGraph property="article:author" content="Nathan Smith" />
      </head>
      <body>
        <h1>{title}</h1>
        <div>{content}</div>
      </body>
    </html>
  );
}

export const render = Base;
