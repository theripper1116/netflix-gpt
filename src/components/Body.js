import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";

import WelcomePage from "./WelcomePage";
import { addUser, removeUser } from "../utils/store/storeSlice/UserSlice";
import Error from "./Error";
const BrowsePage = lazy(() => import("./Browse/BrowsePage"));
const Login = lazy(() => import("./Login/Login"));

const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
      } else {
        dispatch(removeUser);
      }
    });
  }, []);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <WelcomePage />,
      errorElement: <Error />,
    },
    {
      path: "/login",
      element: (
        <Suspense fallback={"Loading..."}>
          <Login />
        </Suspense>
      ),
      errorElement: <Error />,
    },
    {
      path: "/browse",
      element: (
        <Suspense fallback={"Loading..."}>
          <BrowsePage />
        </Suspense>
      ),
      errorElement: <Error />,
    },
  ]);
  return (
    <>
      <RouterProvider router={appRouter}>
        <Login />
      </RouterProvider>
    </>
  );
};

export default Body;
