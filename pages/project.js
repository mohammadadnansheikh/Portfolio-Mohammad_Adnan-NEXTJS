import { useState } from "react";
import Heading from "../components/Heading";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Project = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header>
        <Navbar toggleSidebar={toggleSidebar} />
      </header>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <section className="container mx-auto py-10 px-4">
        <Heading title="Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="relative group">
            <img
              src="/proj1.png"
              alt=""
              className=" border-[2px] border-[#000]  rounded-[10px]"
            />
            <div className="bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white  border border-[#ff4d41]  rounded-[10px]">
              Quiz
            </div>
          </div>
          <div className="relative group">
            <img
              src="/proj2.png"
              alt=""
              className=" border-[2px] border-[#000]  rounded-[10px]"
            />
            <div className="bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white border border-[#ff4d41]  rounded-[10px]">
              TV Shows
            </div>
          </div>
          <div className="relative group">
            <img
              src="/proj3.png"
              alt=""
              className=" border-[2px] border-[#000]  rounded-[10px]"
            />
            <div className="bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white border border-[#ff4d41]  rounded-[10px]">
              Ecommerce Food
            </div>
          </div>
          <div className="relative group">
            <img
              src="/proj4.png"
              alt=""
              className=" border-[2px] border-[#000]  rounded-[10px]"
            />
            <div className="bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white border border-[#ff4d41]  rounded-[10px]">
              Java SpringBoot REST API
            </div>
          </div>
          <div className="relative group">
            <img
              src="/proj5.png"
              alt=""
              className=" border-[2px] border-[#000]  rounded-[10px]"
            />
            <div className="bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white border border-[#ff4d41]  rounded-[10px]">
              Nested Comment System
            </div>
          </div>
          <div className="relative group">
            <img
              src="/proj6.png"
              alt=""
              className=" border-[2px] border-[#000]  rounded-[10px]"
            />
            <div className="bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white border border-[#ff4d41]  rounded-[10px]">
              UserInfo Table
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
