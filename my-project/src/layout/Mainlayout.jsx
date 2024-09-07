import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navmenu from "../Component/Navmenu";
import Header from "../Component/Header";

const MainLayout = () => {
  const [open, setOpen] = useState(true);
  const TogglerOpne = () => {
    setOpen(!open);
  };

  return (
    <div className=" flex dark:bg-primary-color justify-center">
      <div className={`z-10 h-full ${open ? "w-64" : "w-20"}`}>
        <div className={`fixed top-0 left-0 h-full ${open ? "w-64" : "w-20"}`}>
          <Navmenu open={open} TogglerOpne={TogglerOpne} />
        </div>
      </div>
      <div className={`${open ? "w-11/12 " : "w-10/12"}`}>
        <div className="fixed w-full top-0 left-0">
          <Header />
        </div>
        <div className="mt-20 mb-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
