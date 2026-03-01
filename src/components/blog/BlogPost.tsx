import Markdown from 'react-markdown';

interface BlogPostProps {
  content: string;
}

export default function BlogPost({ content }: BlogPostProps) {
  return (
    <div className="prose max-w-none prose-headings:font-mono prose-a:text-accent prose-code:rounded prose-code:bg-bgTertiary prose-code:px-1.5 prose-code:py-0.5 prose-code:text-accent prose-code:before:content-none prose-code:after:content-none prose-pre:bg-bgSecondary prose-pre:border prose-pre:border-border">
      <Markdown>{content}</Markdown>
    </div>
  );
}
