import { NETFLIX_BACKGROUND_IMAGE } from "../utils/Constants/imageURL";
import Header from "./Header";

const WelcomePage = () => {
  return (
    <>
      <Header />
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
