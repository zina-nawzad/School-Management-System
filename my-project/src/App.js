import { useState } from 'react';
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
import Diamond from '../src/Image/Logo.png';
import './App.css';

// SideBar
const App = () => {
  const [open, setOpen] = useState(true);
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
      title: "Dashboard"
    },
    {
      title: "Student", icon: <PiStudentFill /> ,
      spacing: true,
      submenuKey: 'submenu1',
      submenuItems: [
        { title: "All Students" },
        { title: "Add Students" },
        { title: "Students Promotion" }
      ]
    },
    {
      title: "Parent", icon: <RiParentFill />, 
      submenuKey: 'submenu2',
      submenuItems: [
        { title: "All Parents" },
        { title: "Add Parent" }
      ]
    },
    {
      title: "Teacher", icon: <FaChalkboardTeacher />,
      submenuKey: 'submenu3',
      submenuItems: [
        { title: "All Teachers" },
        { title: "Add Teacher" }
      ]
    },
    {
      title: "Exam Section", icon:<FaSheetPlastic />,
      spacing: true,
      submenuKey: 'submenu4',
      submenuItems: [
        { title: "Exam List" },
        { title: "Manage Marks" },
        { title: "Students Mark List" }
      ]
    },
    {
      title: "Class", icon: <MdClass />,
      submenuKey: 'submenu5',
      submenuItems: [
        { title: "All Class" }
      ]
    },
    {
      title: "Subject", icon: <FaBookOpen />,
      submenuKey: 'submenu6',
      submenuItems: [
        { title: "All Subject" }
      ]
    },
    {
      title: "Account", icon: <MdAccountBalance/>,
      spacing: true,
      submenuKey: 'submenu7',
      submenuItems: [
        { title: "Payment" },
        { title: "Income" },
        { title: "Expense" },
        { title: "Expense Category" }
      ]
    },
    {
      title: "Setting", icon: <IoSettingsSharp />
    }
  ];

  return (
    <div className='flex h-max w-6/6 bg-slate-100'>
      <div className={`bg-primary-color h-max  p-5 pt-8 ${open ? "w-1/6" : "w-[5%]"} duration-300 relative`}>
        <FaArrowLeft
          className={`
            bg-white text-primary-color text-3xl p-1 rounded-full absolute -right-3 top-9 border border-primary-color cursor-pointer ${!open && "rotate-180"}
          `}
          onClick={() => setOpen(!open)}
        />
        <div className='inline-block'>
          <img src={Diamond} alt='Logo' className={`w-1/2 block ${!open && "scale-0"}`} />
        </div>

        <div className={`flex items-center rounded-md bg-secondary-color mt-6 px-4 py-2 ${!open ? "px-1.5 pl-2.5" : "px-4"}`}>
          <IoSearchSharp className="text-white text-lg block float-left cursor-pointer" />
          <input
            type="search"
            placeholder='Search'
            className={`ml-2 text-base bg-transparent w-full focus-within:outline-none focus-within:text-white ${!open && "hidden"}`}
          />
        </div>

        <ul className='pt-2'>
          {Menus.map((menu, index) => (
            <>
              <li key={index} className={`
                text-gray-300 text-md flex items-center gap-x-4 px-2 py-2 cursor-pointer transition-all w-full rounded-md mt-2 duration-75 ease-in-out relative z-10 overflow-hidden after:absolute after:left-0 after:top-0 after:h-full after:w-full after:-z-10 after:transform after:duration-300 after:origin-left after:scale-x-0 after:bg-secondary-color hover:after:scale-100 delay-75
                ${menu.spacing ? "mt-9" : "mt-2"}
              `}>
                <span className='text-2xl block float-left'>
                  {
                    menu.icon ? menu.icon : <MdDashboard />
                  }
                
                </span>
                <span className={`text-base font-medium flex-1 duration-300 ${!open && "hidden"}`}>{menu.title}</span>
                {menu.submenuKey && (
                  <FaAngleDown
                    className={`${submenuOpen[menu.submenuKey] && "rotate-180"}`}
                    onClick={() => toggleSubmenu(menu.submenuKey)}
                  />
                )}
              </li>
              {submenuOpen[menu.submenuKey] && menu.submenuItems && (
                <ul className={`pl-8 transition-all duration-300 ${open ? "block" : "hidden"}`}>
                  {menu.submenuItems.map((submenuItem, index) => (
                    <li key={index} className='text-gray-300 text-sm py-2 pl-4 cursor-pointer  transition-all w-full rounded-md mt-2 duration-75 ease-in-out relative z-10 overflow-hidden after:absolute after:left-0 after:top-0 after:h-full after:w-full after:-z-10 after:transform after:duration-300 after:origin-left after:scale-x-0 after:bg-secondary-color hover:after:scale-100 delay-75'>
                      {submenuItem.title}
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>
      </div>

    {/* Home Page */}
      <div className='flex w-screen '>
      {/* Middle Part */}
      <div className={`w-4/6   ${open ? "w-4/6" : "w-[55%]"} duration-300 px-10 mt-10`}>
      <div><h1 className='font-bold text-primary-color text-2xl'>Dashboard</h1></div>
      <div>

  {/* sun icon */}
  <svg
    className="swap-off h-10 w-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  {/* moon icon */}
  <svg
    className="swap-on h-10 w-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
      </div>
          
      </div>

      </div>
    </div>
  );
};

export default App;
