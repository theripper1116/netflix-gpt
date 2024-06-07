import { Link } from "react-router-dom";
import { lazy, useState } from "react";

import { DEVICES_IMAGE, NETFLIX_LOGO } from "../../utils/constants/imageURL";
const SetPasswordScreen = lazy(() => import("./SetPasswordScreen"));

const SignUp = () => {
  const [outputOnWindow, setOutputOnWindow] = useState(false);
  return (
    <div className="bg-white">
      <div className="border flex">
        <img
          className="w-52 mr-96 ml-11"
          alt="Netflix Logo"
          src={NETFLIX_LOGO}
        />
        <Link to="/login">
          <button className="btn bg-white text-black rounded-md p-2 py-2 px-6 ml-96 my-3">
            Sign In
          </button>
        </Link>
      </div>
      {!outputOnWindow ? (
        <div className="absolute w-screen text-center">
          <img
            className="w-3/12 ml-auto mr-auto mt-36"
            src={DEVICES_IMAGE}
            alt="devices-image-snippet"
          />
          <p className="mt-5 font-bold">STEP 1 OF 3</p>
          <p className="font-bold text-4xl">
            Finish setting up your <br /> account
          </p>
          <br />
          <p className="text-xl">
            Netflix is personalised for you.
            <br />
            Create a password to watch on any
            <br />
            device at any time.
          </p>
          <br />
          <button
            onClick={() => setOutputOnWindow(true)}
            className="bg-netflix-red text-white rounded-md px-32 py-5"
          >
            Next
          </button>
        </div>
      ) : (
        <SetPasswordScreen />
      )}
    </div>
  );
};

export default SignUp;
