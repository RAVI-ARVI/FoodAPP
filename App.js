import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./componets/Body/Body";
import Header from "./componets/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import PageNotFound from "./componets/Pages/PageNotFound";
import About from "./componets/Pages/About";
import Contact from "./componets/Pages/Contact";
import RestarentDetailes from "./componets/Pages/RestarentDetailes";
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
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
