import { useState } from "react";
import { FaArrowLeft, FaAngleDown } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa6";
import { MdAccountBalance } from "react-icons/md";
import { MdClass } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { FaSheetPlastic } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";
import { RiParentFill } from "react-icons/ri";
import { PiStudentFill } from "react-icons/pi";
import Diamond from "../Image/Logo.png";

const Navmenu = ({ open, TogglerOpne }) => {
  const [submenuOpen, setSubmenuOpen] = useState({
    submenu1: false,
    submenu2: false,
    submenu3: false,
    submenu4: false,
    submenu5: false,
    submenu6: false,
    submenu7: false,
  });

  const toggleSubmenu = (submenuKey) => {
    setSubmenuOpen((prevState) => ({
      ...prevState,
      [submenuKey]: !prevState[submenuKey],
    }));
  };

  const Menus = [
    {
      title: "Dashboard",
    },
    {
      title: "Student",
      icon: <PiStudentFill />,
      spacing: true,
      submenuKey: "submenu1",
      submenuItems: [
        { title: "All Students" },
        { title: "Add Students" },
        { title: "Students Promotion" },
      ],
    },
    {
      title: "Parent",
      icon: <RiParentFill />,
      submenuKey: "submenu2",
      submenuItems: [{ title: "All Parents" }, { title: "Add Parent" }],
    },
    {
      title: "Teacher",
      icon: <FaChalkboardTeacher />,
      submenuKey: "submenu3",
      submenuItems: [{ title: "All Teachers" }, { title: "Add Teacher" }],
    },
    {
      title: "Exam Section",
      icon: <FaSheetPlastic />,
      spacing: true,
      submenuKey: "submenu4",
      submenuItems: [
        { title: "Exam List" },
        { title: "Manage Marks" },
        { title: "Students Mark List" },
      ],
    },
    {
      title: "Class",
      icon: <MdClass />,
      submenuKey: "submenu5",
      submenuItems: [{ title: "All Class" }],
    },
    {
      title: "Subject",
      icon: <FaBookOpen />,
      submenuKey: "submenu6",
      submenuItems: [{ title: "All Subject" }],
    },
    {
      title: "Account",
      icon: <MdAccountBalance />,
      spacing: true,
      submenuKey: "submenu7",
      submenuItems: [
        { title: "Payment" },
        { title: "Income" },
        { title: "Expense" },
        { title: "Expense Category" },
      ],
    },
    {
      title: "Setting",
      icon: <IoSettingsSharp />,
    },
  ];

  return (
    <div className="h-full grid grid-cols-12  dark:shadow-slate-400 shadow-sm">
      <div className="h-full bg-slate-100 col-span-12">
        <div
          className={`bg-primary-color h-full  p-5 pt-8 duration-300 relative`}
        >
          <FaArrowLeft
            className={`
            bg-white text-primary-color text-3xl p-1 rounded-full absolute -right-3 top-9 border border-primary-color cursor-pointer ${
              !open && "rotate-180"
            }
          `}
            onClick={TogglerOpne}
          />
          <div className="inline-block">
            <img
              src={Diamond}
              alt="Logo"
              className={`w-1/2 block ${!open && "scale-0"}`}
            />
          </div>

          <div
            className={`flex items-center rounded-md bg-secondary-color mt-6 px-4 py-2 ${
              !open ? "px-1.5 pl-2.5" : "px-4"
            }`}
          >
            <IoSearchSharp className="text-white text-lg block float-left cursor-pointer" />
            <input
              type="search"
              placeholder="Search"
              className={`ml-2 text-base bg-transparent w-full focus-within:outline-none focus-within:text-white ${
                !open && "hidden"
              }`}
            />
          </div>

          <ul className="pt-2">
            {Menus.map((menu, index) => (
              <>
                <li
                  key={index}
                  className={`
                text-gray-300 text-md flex items-center gap-x-4 px-2 py-2 cursor-pointer transition-all w-full rounded-md mt-2 duration-75 ease-in-out relative z-10 overflow-hidden after:absolute after:left-0 after:top-0 after:h-full after:w-full after:-z-10 after:transform after:duration-300 after:origin-left after:scale-x-0 after:bg-secondary-color hover:after:scale-100 delay-75
                ${menu.spacing ? "mt-9" : "mt-2"}
              `}
                >
                  <span className="text-2xl block float-left">
                    {menu.icon ? menu.icon : <MdDashboard />}
                  </span>
                  <span
                    className={`text-base font-medium flex-1 duration-300 ${
                      !open && "hidden"
                    }`}
                  >
                    {menu.title}
                  </span>
                  {menu.submenuKey && (
                    <FaAngleDown
                      className={`${
                        submenuOpen[menu.submenuKey] && "rotate-180"
                      }`}
                      onClick={() => toggleSubmenu(menu.submenuKey)}
                    />
                  )}
                </li>
                {submenuOpen[menu.submenuKey] && menu.submenuItems && (
                  <ul
                    className={`pl-8 transition-all duration-300 ${
                      open ? "block" : "hidden"
                    }`}
                  >
                    {menu.submenuItems.map((submenuItem, index) => (
                      <li
                        key={index}
                        className="text-gray-300 text-sm py-2 pl-4 cursor-pointer  transition-all w-full rounded-md mt-2 duration-75 ease-in-out relative z-10 overflow-hidden after:absolute after:left-0 after:top-0 after:h-full after:w-full after:-z-10 after:transform after:duration-300 after:origin-left after:scale-x-0 after:bg-secondary-color hover:after:scale-100 delay-75"
                      >
                        {submenuItem.title}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navmenu;
