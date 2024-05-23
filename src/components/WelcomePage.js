import { NETFLIX_BACKGROUND_IMAGE } from "../utils/Constants/imageURL";
import Header from "./Header";

const WelcomePage = () => {
  return (
    <>
      <Header />
      <div className="absolute my-[20%] mx-[20%] text-white">
        <p className="text-6xl font-bold text-center">
          Unlimited movies, TV shows and more
        </p>
        <p className="text-xl font-bold text-center mt-2">
          Watch anywhere. Cancel anytime.
        </p>
        <p className="text-xl font-bold text-center mt-2">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <input
          type="text"
          className="px-10 py-4 ml-[20%] text-white border-gray-500 border bg-gray-800 opacity-60 "
          placeholder="Email address"
        />
        <buttton className="bg-red-700 rounded-sm text-white p-5 ml-2 cursor-pointer">
          Get Started {">"}
        </buttton>
      </div>
      <div>
        <img
          className="w-screen"
          alt="background-image-for-welcome-page"
          src={NETFLIX_BACKGROUND_IMAGE}
        />
      </div>
    </>
  );
};

export default WelcomePage;
