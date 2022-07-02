import React, { useEffect } from "react";
import Cart from "./Cart";
import SideMenu from "./SideMenu";

const Layout = ({ title = "title", className, children }) => {
  useEffect(() => {
    document.title = title;
  }, []);
  return (
    <>
      <SideMenu/>
      <Cart/>
      <div className={className}>{children}</div>
    </>
  );
};

export default Layout;

