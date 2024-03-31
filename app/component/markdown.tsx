import React from "react";
import markdownit from "markdown-it";
import DOMPurify from 'dompurify';

type Props = {
  text: string;
};

const md = markdownit({
});

const Markdown = ({ text }: Props) => {
  const htmlcontent = md.render(text);
  const sanitized = DOMPurify.sanitize(htmlcontent);
  const styles = {
    color: "#333",
    padding: "10px",
    
  };

  return <div style={styles} dangerouslySetInnerHTML={{ __html: sanitized }}></div>;
};

export default Markdown;
