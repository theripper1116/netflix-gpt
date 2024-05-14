import React from "react";
import { useState } from "react";

const SignInForm = () => {
  const [logIn, changeLogIn] = useState("Sign In");
  return (
    <form className="w-3/12 absolute my-48 mx-auto right-0 left-0 bg-black bg-opacity-80">
      <p className="text-white font-bold text-3xl mb-3">{logIn}</p>
      <input
        className="p-4 m-2 ml-20 bg-gray-700 bg-opacity-80"
        type="text"
        placeholder="Email or mobile number"
      ></input>
      <input
        className="p-4 m-2 ml-20 bg-gray-700 bg-opacity-80"
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
      <button className="bg-gray-500 rounded-md text-white font-bold ml-20 mb-4 w-56 p-4">
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
  );
};

export default SignInForm;
