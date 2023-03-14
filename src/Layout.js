import { Outlet, Link } from "react-router-dom";
import Footer from "./components/Footer";
import React, { Fragment } from "react";

const Layout = () => {
  return (
    <Fragment>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Layout;
