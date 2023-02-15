import React from "react";
import { RiCloseFill } from "react-icons/ri";
import Link from "next/link";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`w-screen h-screen ${
        isOpen ? "fixed" : "hidden"
      } top-0 left-0 bg-gray-800 z-20 text-white grid place-items-center`}
    >
      <div
        className="absolute top-0 right-0 mr-[30px] mt-[30px] text-[24px] hover:cursor-pointer"
        onClick={toggleSidebar}
      >
        <RiCloseFill />
      </div>
      <div className="flex flex-col gap-4 text-[28px]">
        <Link href="/" className="hover:text-[#ff4D41]">
          Home
        </Link>
        <Link href="/about" className="hover:text-[#ff4D41]">
          About
        </Link>
        <Link href="/skills" className="hover:text-[#ff4D41]">
          Skills
        </Link>
        <Link href="/contact" className="hover:text-[#ff4D41]">
          Contact
        </Link>
        <Link href="/project" className="hover:text-[#ff4D41]">
          Project
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
