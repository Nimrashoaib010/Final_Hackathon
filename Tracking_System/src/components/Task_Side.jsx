import { useState } from "react";
import { FaHome, FaCalendar, FaUsers, FaBook, FaCog } from "react-icons/fa";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className={`bg-[#1E1E2D] ${open ? 'w-60' : 'w-20'} duration-300 h-screen p-5 pt-8 relative`}>
      <img
        src="https://img.icons8.com/ios-filled/50/ffffff/menu--v6.png"
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-2 rounded-full ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
        alt="toggle"
      />
      <div className="flex gap-x-4 items-center">
        <div className="text-white text-2xl font-bold">Learnify</div>
      </div>
      <ul className="pt-6">
        <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2">
          <FaHome size={20}/> 
          <span className={`${!open && "hidden"} origin-left duration-200`}>Home</span>
        </li>
        <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2">
          <FaCalendar size={20}/> 
          <span className={`${!open && "hidden"} origin-left duration-200`}>Calendar</span>
        </li>
        <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2">
          <FaUsers size={20}/> 
          <span className={`${!open && "hidden"} origin-left duration-200`}>Team</span>
        </li>
        <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2">
          <FaBook size={20}/> 
          <span className={`${!open && "hidden"} origin-left duration-200`}>Library</span>
        </li>
        <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2">
          <FaCog size={20}/> 
          <span className={`${!open && "hidden"} origin-left duration-200`}>Settings</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
