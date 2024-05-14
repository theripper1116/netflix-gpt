import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <>
      <div className="absolute px-8 py-2 bg-gradient-to-b from-black flex">
        <img
          className="w-44"
          alt="Netflix Logo"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        />
        <Link to="/login">
          <button className="btn bg-red-700 text-white font-bold rounded-2xl py-4 px-2">
            Sign In
          </button>
        </Link>
      </div>
      <div>
        <img
          alt="background-image-for-welcome-page"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/065df910-dec3-46ae-afa8-7ad2b52dce40/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        />
      </div>
    </>
  );
};

export default WelcomePage;
