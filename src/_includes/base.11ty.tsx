import type { FunctionComponent } from "preact";
import type { TSXProps } from "../../11ty";
import { Boilerplate } from "./components/boilerplate";

export const Base: FunctionComponent<TSXProps> = (props) => {
  const { title, content, children } = props;
  return (
    <html lang="en" data-theme="frappe">
      <head>
        <Boilerplate />
        <link rel="stylesheet" href="/base.css" />
        <title>{title}</title>
      </head>
      <body>
        {content && <div dangerouslySetInnerHTML={{ __html: content }}></div>}
        {children}
      </body>
    </html>
  );
};

export default Base;
