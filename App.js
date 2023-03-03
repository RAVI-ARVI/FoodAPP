import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Body from "./componets/Body/Body";
import Header from "./componets/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import PageNotFound from "./componets/Pages/PageNotFound";
// import About from "./componets/Pages/About";

import Contact from "./componets/Pages/Contact";
import RestarentDetailes from "./componets/Pages/RestarentDetailes";
import Profile from "./componets/Body/Profile";
const About = lazy(() => import("./componets/Pages/About"));
function AppLayOut() {
  return (
    <>
      <Header />
      <Outlet />
      {/* <h3>foooter</h3> */}
    </>
  );
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayOut />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurant/:id",
        element: <RestarentDetailes />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>loading.......</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
