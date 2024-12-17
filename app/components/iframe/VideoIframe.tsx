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
    const videoSrc = autoplay && isVisible ? `${src}&autoplay=1&mute=1&${Date.now()}` : src;
  
    return (
      <iframe
        className={`${isVisible ? animationClass : "opacity-0"}`}
        ref={iframeRef}
        width="90%"
        height="500"
        src={videoSrc}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }
  
export default VideoIframe