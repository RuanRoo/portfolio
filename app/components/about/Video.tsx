const LazyVideo: React.FC = () => {
  return (
    <div className="w-[650px] h-[500px] overflow-hidden relative rounded-xl">
      <video
        muted
        loop
        autoPlay
        playsInline
        preload="metadata"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full "
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default LazyVideo;
