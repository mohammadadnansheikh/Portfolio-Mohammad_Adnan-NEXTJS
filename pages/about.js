import React, { useState } from "react";
import { AiOutlineGift } from "react-icons/ai";
import { FiBookOpen } from "react-icons/fi";
import { TbPacman } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";

import Heading from "../components/Heading";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { HiMail } from "react-icons/hi";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
    <header>
        <Navbar toggleSidebar={toggleSidebar}/>
      </header>
    <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
    <section className="container mx-auto py-10 px-4">
      <Heading title="About Me" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
        <div>
          <img className="w-[400px]" alt="" src="/Profile.jpeg" />
        </div>
        <div>
          <div className="flex items-center justify-between w-[300px]">
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-center font-medium">
                <AiOutlineGift className="text-[#ff4d41] text-[22px]" />
                Birthday
              </div>
              <div className="flex gap-4 items-center font-medium">
                <FiBookOpen className="text-[#ff4d41] text-[22px]" />
                Study
              </div>
              <div className="flex gap-4 items-center font-medium">
                <HiMail className="text-[#ff4d41] text-[22px]" />
                Email
              </div>
              <div className="flex gap-4 items-center font-medium">
                <TbPacman className="text-[#ff4d41] text-[22px]" />
                Interest
              </div>
              <div className="flex gap-4 items-center font-medium">
                <IoLocationOutline className="text-[#ff4d41] text-[22px]" />
                Location
              </div>
            </div>
            <div className="flex flex-col gap-6 text-gray-600 px-[10px]">
                <div>:</div>
                <div>:</div>
                <div>:</div>
                <div>:</div>
                <div>:</div>
            </div>

            <div className="flex flex-col gap-6 text-gray-600 px-[10px]">
                <div>10.02.1999</div>
                <div>BCE Bhagalpur</div>
                <div>adnansheikh4ualways@gmail.com</div>
                <div>Reading, Blogging</div>
                <div>Phulwari Sharif Patna</div>
            </div>
          </div>
          <div className="max-w-[800px]">
            <h2 className="font-bold mt-16 mb-10">
              I'm Adnan, Fullstack Developer
            </h2>
            <p className="text-gray-600">I am a Full Stack Developer, I have worked lots on projects.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;