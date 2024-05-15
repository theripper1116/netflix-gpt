import React, { useRef, useState } from "react";

import { formValidation } from "../../utils/formValidation";

const SignInForm = () => {
  const [logIn, setLogIn] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  console.log(email);
  console.log(password);
  return (
    <form
      className="w-3/12 absolute my-48 mx-auto right-0 left-0 bg-black bg-opacity-80"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <p className="text-white font-bold text-3xl mb-3">
        {logIn ? "Sign In" : "Sign Up"}
      </p>
      {!logIn && (
        <input
          className="p-4 m-2 ml-20 bg-gray-700 bg-opacity-80"
          type="text"
          placeholder="Enter Name"
        ></input>
      )}
      <input
        className="p-4 m-2 ml-20 bg-gray-700 bg-opacity-80"
        type="text"
        placeholder="Email or mobile number"
        ref={email}
      ></input>
      <input
        className="p-4 m-2 ml-20 bg-gray-700 bg-opacity-80"
        type="password"
        placeholder="Password"
        ref={password}
      ></input>
      <br />
      <button
        className="bg-red-700 rounded-md text-white font-bold ml-20 w-56 mt-3 p-4"
        onClick={() => {
          const validateChecker = formValidation(email.current.value, password.current.value);
          if(validateChecker != null) alert(validateChecker);
        }}
      >
        {logIn ? "Sign In" : "Sign Up"}
      </button>
      {logIn && (
        <div>
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
        </div>
      )}
      <p
        className="text-white mx-1 mt-3 text-lg"
        onClick={() => {
          if (logIn) setLogIn(false);
          else setLogIn(true);
        }}
      >
        {logIn
          ? "Already a user: Sign In now."
          : "New to Netflix? Sign Up now."}
      </p>
    </form>
  );
};

export default SignInForm;
