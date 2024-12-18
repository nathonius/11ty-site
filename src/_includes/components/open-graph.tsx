interface OpenGraphProps {
  property:
    | "title"
    | "type"
    | "url"
    | "description"
    | "article:published_time"
    | "article:author";
  content: string;
}

export const OpenGraph = ({ property, content }: OpenGraphProps) => (
  <meta property={"og:" + property} content={content} />
);
