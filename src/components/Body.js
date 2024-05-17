import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";

import Login from "./Login/Login";
import Browse from "./Browse";
import WelcomePage from "./WelcomePage";
import { addUser, removeUser } from "../utils/store/storeSlice/UserSlice";

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
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
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
