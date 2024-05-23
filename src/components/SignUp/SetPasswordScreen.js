import { useRef } from "react";

import { createUserInFirebase } from "../../utils/signInOrSignUp/createOrLoginUserInFirebase";
import { formValidation } from "../../utils/signInOrSignUp/formValidation";

const SetPasswordScreen = () => {
  const email = useRef(null);
  const password = useRef(null);

  const checkFunction = () => {
    let validateChecker = formValidation(
      email.current.value,
      password.current.value
    );
    if (validateChecker != null) {
      alert(validateChecker);
      return;
    }
    createUserInFirebase(email.current.value, password.current.value);
  };

  return (
    <div className="absolute w-screen text-center">
      <p className="mt-5 font-bold">STEP 1 OF 3</p>
      <p className="font-bold text-4xl">
        Create a password to start your
        <br />
        membership
      </p>
      <br />
      <p className="text-xl">Just a few more steps and you're done!</p>
      <p className="text-xl">We hate paperwork, too.</p>
      <br />
      <input
        ref={email}
        type="text"
        className="bg-white text-black border-netflix-red border px-24 py-4 rounded-md my-2 text-left"
        placeholder="Email"
        value={document.getElementById("get-email-address-to-register")?.value}
      ></input>
      <br />
      <input
        ref={password}
        id="get-password-to-register-email"
        type="password"
        className="bg-white text-black border-netflix-red border px-24 py-4 rounded-md text-left"
        placeholder="Password"
      ></input>
      <br />
      <button
        onClick={() => checkFunction()}
        className="bg-netflix-red text-white rounded-md px-44 py-4 my-5 "
      >
        Next
      </button>
    </div>
  );
};

export default SetPasswordScreen;
