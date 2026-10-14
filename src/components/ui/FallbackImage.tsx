import { useState, type ReactNode } from 'react';

interface FallbackImageProps {
  src: string;
  alt: string;
  className?: string;
  /** Rendered until the image loads, and kept if it fails to load. */
  placeholder: ReactNode;
  srcSet?: string;
  sizes?: string;
  width?: number;
  height?: number;
  loading?: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'low' | 'auto';
}

/** Shows `placeholder` until `src` loads; if the file is missing the placeholder stays. */
export default function FallbackImage({
  src,
  alt,
  className = '',
  placeholder,
  srcSet,
  sizes,
  width,
  height,
  loading,
  fetchPriority,
}: FallbackImageProps) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>(
    'loading',
  );

  return (
    <>
      {status !== 'loaded' && placeholder}
      {status !== 'error' && (
        <img
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          width={width}
          height={height}
          loading={loading}
          fetchPriority={fetchPriority}
          alt={alt}
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
          className={`${className} ${status === 'loaded' ? '' : 'invisible absolute'}`}
          decoding="async"
        />
      )}
    </>
  );
}
