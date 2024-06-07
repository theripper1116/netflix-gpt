import { Link } from "react-router-dom";
import { lazy, useState } from "react";

import {
  NETFLIX_LOGO,
  TICK_PHOTO_FOR_PLAN_CHOOSING,
} from "../../utils/constants/imageURL";
const PlanList = lazy(() => import("./PlanList"));

const ChoosePlan = () => {
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
        <div className="absolute w-screen pb-8 text-center border-2 border-black">
          <img
            className="w-14 ml-auto mr-auto mt-36"
            src={TICK_PHOTO_FOR_PLAN_CHOOSING}
            alt="tick-photo-plan-choosing"
          ></img>
          <p>STEP 2 OF 3</p>
          <p className="font-bold text-4xl">Choose your plan.</p>
          <br />
          <p className="text-xl">✔ No commitments, cancel anytime.</p>
          <br />
          <p className="text-xl">✔ Everything on Netflix for one low price.</p>
          <br />
          <p className="text-xl">✔ No ads and no extra fees. Ever.</p>
          <br />
          <button
            onClick={() => setOutputOnWindow(true)}
            className="bg-netflix-red text-white px-36 py-4 rounded-md"
          >
            Next
          </button>
        </div>
      ) : (
        <PlanList />
      )}
    </div>
  );
};

export default ChoosePlan;
