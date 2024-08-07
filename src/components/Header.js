import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

import { removeUser } from "../utils/store/storeSlice/UserSlice";
import { NETFLIX_LOGO } from "../utils/constants/imageURL";
import { removeAllMovies } from "../utils/store/storeSlice/MoviesSlice";

const Header = () => {
  const checkIfUserIsLoggedIn = useSelector((store) => store?.user?.userDetail);
  const dispatch = useDispatch();

  return (
    <div className="absolute w-[100%] px-8 py-2 bg-gradient-to-b from-black flex">
      <img className="w-44" alt="Netflix Logo" src={NETFLIX_LOGO} />
      {checkIfUserIsLoggedIn === null ? (
        <Link to="/login">
          <button className="btn bg-netflix-red text-white rounded-md p-2 py-2 px-6">
            Sign In
          </button>
        </Link>
      ) : (
        <>
          <Link to="/">
            <button
              className="btn bg-netflix-red text-white rounded-md p-2 py-2 px-6"
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
              Sign Out
            </button>
          </Link>
          <Link to="/SearchPage">
            <button className="btn bg-netflix-red text-white rounded-md py-2 px-6 ml-2">
              Search Movie
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Header;
