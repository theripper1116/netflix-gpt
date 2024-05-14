import { useState } from "react";

const Login = () => {
  const [logIn, changeLogIn] = useState("Sign In");
  return (
    <>
      <div className="absolute px-8 py-2 bg-gradient-to-b from-black flex">
        <img
          className="w-44"
          alt="Netflix Logo"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        />
      </div>
      <form className="w-3/12 absolute my-48 mx-auto right-0 left-0 bg-gray-800 bg-transparent">
        <p className="text-white font-bold text-3xl mb-3">{logIn}</p>
        <input
          className="p-4 m-2 ml-20 bg-gray-700"
          type="text"
          placeholder="Email or mobile number"
        ></input>
        <input
          className="p-4 m-2 ml-20 bg-gray-700"
          type="password"
          placeholder="Password"
        ></input>
        <br />
        <button className="bg-red-700 rounded-md text-white font-bold ml-20 w-56 mt-3 p-4">
          {logIn}
        </button>
        <p className="text-white font-bold text-l mb-4 mx-5 text-center mt-4">
          OR
        </p>
        <button className="bg-gray-500 rounded-md text-white font-bold rounded-2xl ml-20 mb-4 w-56 p-4">
          Use a sign-in code
        </button>
        <br />
        <a className="text-white mx-1 ml-32" href="/">
          Forgot password?
        </a>
        <br />
        <input
          className="mx-1 mt-3"
          type="checkbox"
          name="remember-checkbox"
        ></input>
        <label className="text-white text-lg" htmlFor="remember-checkbox">
          Remember me
        </label>
        <p className="text-white mx-1 mt-3 text-lg">
          New to Netflix? &nbsp;
          <button
            onClick={() => {
              changeLogIn("Sign Up");
            }}
          >
            Sign up now
          </button>
          .
        </p>
      </form>
      <div>
        <img
          alt="background-image-for-login-page"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/065df910-dec3-46ae-afa8-7ad2b52dce40/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        />
      </div>
    </>
  );
};

export default Login;
