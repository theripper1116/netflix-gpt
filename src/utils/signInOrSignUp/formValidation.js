export const formValidation = (logIn, name, email, password) => {
  if (logIn) {
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
      password.value
    );

    if (!isEmailValid) return "Email is Invalid";
    if (!isPasswordValid) return "Password is Invalid";

    if (isEmailValid && isPasswordValid) return null;
  } else {
    if (name === null || email === null || password === null)
      return "Field missing!";

    const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name.value);
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
      password.value
    );

    if (!isNameValid) return "Name is Invalid";
    if (!isEmailValid) return "Email is Invalid";
    if (!isPasswordValid) return "Password is Invalid";

    if (isEmailValid && isPasswordValid && !isNameValid) return null;
  }
};
