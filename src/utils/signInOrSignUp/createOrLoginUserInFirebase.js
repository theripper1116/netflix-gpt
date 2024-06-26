import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

export const createUserInFirebase = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log(user);
      document.location.href = document.location.href.replace(
        "signUp",
        "choosePlan"
      );
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
      // ..
    });
};

export const logInUserInFirebase = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      document.location.href = document.location.href.replace(
        "login",
        "browse"
      );
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode + ": " + errorMessage);
    });
};
