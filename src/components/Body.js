import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";

import WelcomePage from "./WelcomePage";
import { addUser, removeUser } from "../utils/store/storeSlice/UserSlice";
import Error from "./Error";
import ShimmerUIForWindowTransition from "../shimmer/ShimmerUIForWindowTransition.tsx";

const ChoosePlan = lazy(() => import("./signUp/ChoosePlan"));
const SignUp = lazy(() => import("./signUp/SignUp"));
const BrowsePage = lazy(() => import("./Browse/BrowsePage"));
const Login = lazy(() => import("./login/Login.js"));
const SearchComponent = lazy(() => import("./searchComponent/SearchComponent"));
const PlayVideo = lazy(() => import("./playVideo/PlayVideo.tsx"));

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
        <Suspense fallback={<ShimmerUIForWindowTransition />}>
          <Login />
        </Suspense>
      ),
      errorElement: <Error />,
    },
    {
      path: "/browse",
      element: (
        <Suspense fallback={<ShimmerUIForWindowTransition />}>
          <BrowsePage />
        </Suspense>
      ),
      // children: [
      //   {
      //     path: "/playVideo",
      //     element: (
      //       <Suspense fallback={"Loading..."}>
      //         <PlayVideo />
      //       </Suspense>
      //     ),
      //     errorElement: <Error />,
      //   },
      // ],
      errorElement: <Error />,
    },
    {
      path: "/SearchPage",
      element: (
        <Suspense fallback={<ShimmerUIForWindowTransition />}>
          <SearchComponent />
        </Suspense>
      ),
      errorElement: <Error />,
    },
    {
      path: "/signUp",
      element: (
        <Suspense fallback={<ShimmerUIForWindowTransition />}>
          <SignUp />
        </Suspense>
      ),
      errorElement: <Error />,
    },
    {
      path: "/choosePlan",
      element: (
        <Suspense fallback={<ShimmerUIForWindowTransition />}>
          <ChoosePlan />
        </Suspense>
      ),
      errorElement: <Error />,
    },
    {
      path: "/playVideo/:movieId",
      element: (
        <Suspense fallback={<ShimmerUIForWindowTransition />}>
          <PlayVideo />
        </Suspense>
      ),
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
