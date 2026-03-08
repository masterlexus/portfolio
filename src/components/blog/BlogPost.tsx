import Markdown from 'react-markdown';

interface BlogPostProps {
  content: string;
}

const components = {
  img: ({
    src,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => {
    const videoExtensions = ['.mp4', '.webm', '.ogg'];
    const isVideo = src && videoExtensions.some((ext) => src.endsWith(ext));

    if (isVideo) {
      return (
        <video
          src={src}
          controls
          className="max-h-[70vh] w-auto mx-auto rounded-lg border border-border"
          preload="metadata"
        >
          {alt}
        </video>
      );
    }

    return <img src={src} alt={alt} {...props} />;
  },
};

export default function BlogPost({ content }: BlogPostProps) {
  return (
    <div className="prose max-w-none prose-headings:font-mono prose-a:text-accent prose-code:rounded prose-code:bg-bgTertiary prose-code:px-1.5 prose-code:py-0.5 prose-code:text-accent prose-code:before:content-none prose-code:after:content-none prose-pre:bg-bgSecondary prose-pre:border prose-pre:border-border">
      <Markdown components={components}>{content}</Markdown>
    </div>
  );
}
