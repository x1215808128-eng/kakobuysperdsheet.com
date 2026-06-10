import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function MarkdownContent({ content }: { content: string }) {
  return (
    <div className="prose prose-zinc max-w-none prose-headings:font-bold prose-headings:text-zinc-900 prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-zinc-900">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}
