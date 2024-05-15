export const formValidation = (name, email, password) => {
  const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isNameValid) return "Name is Invalid";
  if (!isEmailValid) return "Email is Invalid";
  if (!isPasswordValid) return "Password is Invalid";

  if (isEmailValid && isPasswordValid) return null;
};
