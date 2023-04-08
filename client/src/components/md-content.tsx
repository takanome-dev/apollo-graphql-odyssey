import React from "react";
import ReactMarkdown from "react-markdown";
import { cn } from "../utils/classname";

/**
 * Markdown component is a simple style wrapper for markdown content used across our app
 */
const MarkDown = ({ content }: { content: string }) => {
  return (
    <ReactMarkdown
      children={content}
      className={cn(
        "text-slate-600 text-sm",
        "[&>h1]:text-2xl [&>h1]:font-semibold [&>h1]:text-slate-700",
        "[&>h2]:text-xl [&>h2]:font-semibold [&>h2]:text-slate-700",
        "[&>h3]:text-lg [&>h3]:font-semibold [&>h3]:text-slate-700",
        "[&>a]:text-pink-500 [&>a]:hover:text-pink-600",
        "[&>pre]:p-5 [&>pre]:rounded-md [&>pre]:border [&>pre]:border-slate-500 [&>pre]:bg-slate-100 [&>pre]:text-slate-700 [&>pre]:font-mono [&>pre]:text-sm"
      )}
    />
  );
};

export default MarkDown;
