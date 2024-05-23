import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

import { removeUser } from "../utils/store/storeSlice/UserSlice";
import { NETFLIX_LOGO } from "../utils/Constants/imageURL";
import { removeAllMovies } from "../utils/store/storeSlice/MoviesSlice";

const Header = () => {
  const checkIfUserIsLoggedIn = useSelector((store) => store?.user?.userDetail);
  const dispatch = useDispatch();

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black flex">
      <img className="w-44 mr-96 ml-28" alt="Netflix Logo" src={NETFLIX_LOGO} />
      {checkIfUserIsLoggedIn === null ? (
        <Link to="/login">
          <button className="btn bg-red-700 text-white font-bold rounded-2xl py-4 px-2 ml-96">
            Log In
          </button>
        </Link>
      ) : (
        <>
          <Link to="/">
            <button
              className="btn bg-red-700 text-white font-bold rounded-2xl py-4 px-2 ml-96"
              onClick={() => {
                signOut(auth)
                  .then(() => {
                    alert("Successfully LogOut");
                    dispatch(removeAllMovies());
                  })
                  .catch((error) => {
                    console.log(error.message);
                  });

                dispatch(removeUser());
              }}
            >
              Log Out
            </button>
          </Link>
          <Link to="/SearchPage">
            <button className="btn bg-red-700 text-white font-bold rounded-2xl py-4 px-2 ml-8">
              Search Movie
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Header;
