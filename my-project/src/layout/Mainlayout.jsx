import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navmenu from "../Component/Slider";

const MainLayout = () => {
  const [open, setOpen] = useState(true);
  const TogglerOpne = () => {
    setOpen(!open);
  };

  return (
    <div className="w-screen h-screen flex">
      <div className={`h-full ${open ? "w-64" : "w-20"}`}>
        <Navmenu open={open} TogglerOpne={TogglerOpne} />
      </div>
      <div className={` px-10 mt-10 ${open ? "w-10/12" : "grow"}`}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
