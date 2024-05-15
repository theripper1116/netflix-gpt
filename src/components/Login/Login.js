import SignInForm from "./SignInForm";

const Login = () => {
  return (
    <>
      <div className="absolute px-40 py-9 flex">
        <img
          className="w-3/12"
          alt="Netflix Logo"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        />
      </div>
      <div>
        <SignInForm />
      </div>
      <img
        alt="background-image-for-login-page"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/065df910-dec3-46ae-afa8-7ad2b52dce40/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
      />
    </>
  );
};

export default Login;
