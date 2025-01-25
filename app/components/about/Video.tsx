const LazyVideo: React.FC = () => {
  return (
    <div className="w-full md:w-[650px] aspect-[4/3] md:h-[500px] relative rounded-xl overflow-hidden">
      <video
        muted
        loop
        autoPlay
        playsInline
        preload="metadata"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default LazyVideo;