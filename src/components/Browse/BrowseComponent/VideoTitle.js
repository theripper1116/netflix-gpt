const VideoTitle = ({ movieData }) => {
  const { overview, original_title } = movieData;
  return (
    <div className="pt-36 px-12">
      <h1 className="text-3xl font-bold">{original_title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-gray-500 text-black p-4 px-16">
          <img
            className="w-4 h-4"
            src="https://icon-library.com/images/play-icon-svg/play-icon-svg-28.jpg"
          />
          Play
        </button>
        <button>More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
