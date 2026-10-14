import Markdown from 'react-markdown';
import type { Root, Parent } from 'mdast';

interface BlogPostProps {
  content: string;
}

/** Drops `<!-- ... -->` blocks, which react-markdown would otherwise render as escaped text. */
function remarkStripComments() {
  const strip = (node: Parent) => {
    node.children = node.children.filter(
      (child) =>
        !(child.type === 'html' && child.value.trimStart().startsWith('<!--')),
    );
    for (const child of node.children) {
      if ('children' in child) strip(child);
    }
  };
  return (tree: Root) => strip(tree);
}

const components = {
  img: ({ src, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => {
    const videoExtensions = ['.mp4', '.webm', '.ogg'];
    const isVideo = src && videoExtensions.some((ext) => src.endsWith(ext));

    if (isVideo) {
      return (
        <video
          src={src}
          controls
          className="max-h-[70vh] w-auto rounded-xl border border-border"
          preload="metadata"
        >
          {alt}
        </video>
      );
    }

    return (
      <img
        src={src}
        alt={alt}
        className="rounded-xl border border-border"
        {...props}
      />
    );
  },
};

export default function BlogPost({ content }: BlogPostProps) {
  return (
    <div className="prose max-w-prose prose-headings:font-medium prose-headings:tracking-[-0.02em] prose-h2:mt-12 prose-h2:text-h3 prose-h3:text-base prose-p:leading-relaxed prose-a:font-normal prose-a:underline-offset-4 prose-code:rounded prose-code:bg-surface prose-code:px-1.5 prose-code:py-0.5 prose-code:font-mono prose-code:text-[0.85em] prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-pre:border prose-pre:border-border prose-pre:font-mono">
      <Markdown remarkPlugins={[remarkStripComments]} components={components}>
        {content}
      </Markdown>
    </div>
  );
}
