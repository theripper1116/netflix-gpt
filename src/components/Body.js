import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Login from "./Login/Login";
import Browse from "./Browse";
import Header from "./Header";
import WelcomePage from "./WelcomePage";

const Body = () => {
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
