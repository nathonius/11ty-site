import { LayoutData } from "../../11ty";
import { absolute } from "../util";
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
