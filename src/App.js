import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import About from "./components/about";
import Contact from "./components/contact";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
// list of routes that navigate to diff pages
const appRouter =createBrowserRouter([
  {
    path:"/",
    element: <AppLayout />,
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element:< Contact />
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router ={appRouter} />);
