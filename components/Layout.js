import React from "react";
import Header from "./Header";

const Layout = ({ children, title, description, tags }) => {
  return (
    <>
      <div className="mx-auto">
        <div>
          <Header />
        </div>
        <div className="px-4">{children}</div>
      </div>
    </>
  );
};

export default Layout;
