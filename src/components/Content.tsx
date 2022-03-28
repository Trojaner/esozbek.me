import * as React from "react";

interface ContentProps {
  className?: string;
  content: string;
}
export const HTMLContent = (props: ContentProps) => (
  <div className={props.className} dangerouslySetInnerHTML={{ __html: props.content }} />
);

export const TextContent = (props: ContentProps) => (
  <div className={props.className}>{props.content}</div>
);

