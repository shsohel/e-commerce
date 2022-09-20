import React from "react";
import { Footer } from "./Footer";
import Header from "./Header";

const Layout = ({ children, title, description, tags }) => {
  return (
    <>
      <div className="">
          <Header />
        <div >{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
