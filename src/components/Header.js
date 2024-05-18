import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

import { removeUser } from "../utils/store/storeSlice/UserSlice";
import { NETFLIX_LOGO } from "../utils/Constants/imageURL";

const Header = () => {
  const checkIfUserIsLoggedIn = useSelector((store) => store?.user?.userDetail);
  const dispatch = useDispatch();

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black flex">
      <img className="w-44" alt="Netflix Logo" src={NETFLIX_LOGO} />
      {checkIfUserIsLoggedIn === null ? (
        <Link to="/login">
          <button className="btn bg-red-700 text-white font-bold rounded-2xl py-4 px-2">
            Log In
          </button>
        </Link>
      ) : (
        <Link to="/">
          <button
            className="btn bg-red-700 text-white font-bold rounded-2xl py-4 px-2"
            onClick={() => {
              signOut(auth)
                .then(() => {
                  console.log("sign out");
                })
                .catch((error) => {});

              dispatch(removeUser());
            }}
          >
            Log Out
          </button>
        </Link>
      )}
    </div>
  );
};

export default Header;
