import { Link } from "react-router-dom";

const VideoTitle = ({ movieData }) => {
  const { overview, original_title, id } = movieData;
  return (
    <div className="absolute aspect-video w-screen text-white pt-[5%] px-12 bg-gradient-to-tr from-black mt-20">
      <h1 className="text-3xl font-bold">{original_title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black p-4 px-16 hover:opacity-90 rounded-md">
          <Link to={"/playVideo/" + id}>▶ Play</Link>
        </button>
        <button className="mx-2 bg-white text-black p-4 px-16 hover:opacity-90 rounded-md">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
