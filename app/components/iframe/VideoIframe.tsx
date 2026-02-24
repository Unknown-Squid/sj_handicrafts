import { useMemo } from 'react';

const VideoIframe = ({
    src,
    isVisible,
    animationClass,
    iframeRef,
    autoplay = false,
  }: {
    src: string;
    isVisible: boolean;
    animationClass: string;
    iframeRef: React.RefObject<HTMLIFrameElement>;
    autoplay?: boolean;
  }) => {
    const videoSrc = useMemo(() => {
      if (autoplay && isVisible) {
        // Check if URL already has query parameters
        const separator = src.includes('?') ? '&' : '?';
        return `${src}${separator}autoplay=1&mute=1`;
      }
      return src;
    }, [src, autoplay, isVisible]);
  
    return (
      <iframe
        className={`${isVisible ? animationClass : "opacity-0"} w-full h-full`}
        ref={iframeRef}
        src={videoSrc}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    );
  }
  
export default VideoIframe