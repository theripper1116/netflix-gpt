export const formValidation = (email, password) => {
  if (email === null || password === null) return "Field missing!";

  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) return "Email is Invalid";
  if (!isPasswordValid) return "Password is Invalid";

  if (isEmailValid && isPasswordValid) return null;
};
