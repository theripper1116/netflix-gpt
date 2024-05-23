import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import { formValidation } from "../../utils/signInOrSignUp/formValidation";
import {
  createUserInFirebase,
  logInUserInFirebase,
} from "../../utils/signInOrSignUp/createOrLoginUserInFirebase";

const SignInForm = () => {
  const [logIn, setLogIn] = useState(true);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const validatorFunc = () => {
    const validateChecker = formValidation(
      logIn,
      name.current,
      email.current,
      password.current
    );
    if (validateChecker != null) {
      alert(validateChecker);
      return;
    }
    registerOrLogInUserFunc();
  };

  const registerOrLogInUserFunc = () => {
    if (!logIn)
      createUserInFirebase(email.current.value, password.current.value);
    else logInUserInFirebase(email.current.value, password.current.value);
  };

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
          className="p-4 m-2 ml-20 bg-gray-700 bg-opacity-80 text-white"
          type="text"
          placeholder="Enter Name"
          ref={name}
        ></input>
      )}
      <input
        className="p-4 m-2 ml-20 bg-gray-700 bg-opacity-80 text-white"
        type="text"
        placeholder="Email or mobile number"
        ref={email}
      ></input>
      <input
        className="p-4 m-2 ml-20 bg-gray-700 bg-opacity-80 text-white"
        type="password"
        placeholder="Password"
        ref={password}
      ></input>
      <br />
      <button
        className="bg-red-700 rounded-md text-white font-bold ml-20 w-56 mt-3 p-4"
        onClick={validatorFunc}
      >
        {logIn ? "Sign In" : "Sign Up"}
      </button>
      {logIn && (
        <div>
          <p className="text-white font-bold text-l mb-4 mx-5 text-center mt-4">
            OR
          </p>
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
      <Link to="/signUp">
      <p className="text-white mx-1 mt-3 text-lg">
      
        New to Netflix? Sign Up now.
      </p>
      </Link>
    </form>
  );
};

export default SignInForm;
