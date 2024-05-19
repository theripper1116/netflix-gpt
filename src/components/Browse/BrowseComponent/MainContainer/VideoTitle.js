const VideoTitle = ({ movieData }) => {
  const { overview, original_title } = movieData;
  return (
    <div className="absolute aspect-video text-white pt-[18%] px-12 bg-gradient-to-tr from-black">
      <h1 className="text-3xl font-bold">{original_title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black p-4 px-16 hover:opacity-90 rounded-md">
          <img
            className="w-4 h-4"
            src="https://icon-library.com/images/play-icon-svg/play-icon-svg-28.jpg"
            alt="play-button-icon"
          />
          Play
        </button>
        <button className="mx-2 bg-white text-black p-4 px-16 hover:opacity-90 rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
