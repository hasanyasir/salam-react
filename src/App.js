import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import MenuCard from "./components/MenuCard";
import { lazy, Suspense, useState } from "react";
import UserContext from "./utils/UserContext.js";

const About = lazy(() => import("./components/About.js"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    setUserName("Yasir Hasan");
  }, []);

  return (
    <UserContext.Provider value={{ LoggedinUser: userName, setUserName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense
            fallback={
              <p>
                <i>Loading...</i>
              </p>
            }
          >
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/menu/:resId",
        element: <MenuCard />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
