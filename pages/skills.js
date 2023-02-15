import { useState } from "react";

import Heading from "../components/Heading";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Skill = () => {
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
        <Heading title="Skills" />
        <p className="text-gray-600 mt-10 mb-10">
          I am Fullstack Developer, proficient in MERN stack and my other
          skillset are java, nestjs, sql problem solving skill, critical
          thinking, interpersonell communication etc.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p>Java</p>
            <div className="relative bg-gray-400 h-[4px] mt-2">
              <div className="bg-[#ff4d41] absolute h-[4px] w-[80%]"></div>
            </div>
          </div>
          <div>
            <p>HTML and CSS</p>
            <div className="relative bg-gray-400 h-[4px] mt-2">
              <div className="bg-[#ff4d41] absolute h-[4px] w-[90%]"></div>
            </div>
          </div>
          <div>
            <p>Javascript</p>
            <div className="relative bg-gray-400 h-[4px] mt-2">
              <div className="bg-[#ff4d41] absolute h-[4px] w-[90%]"></div>
            </div>
          </div>
          <div>
            <p>React.js</p>
            <div className="relative bg-gray-400 h-[4px] mt-2">
              <div className="bg-[#ff4d41] absolute h-[4px] w-[90%]"></div>
            </div>
          </div>
          <div>
            <p>Node.js</p>
            <div className="relative bg-gray-400 h-[4px] mt-2">
              <div className="bg-[#ff4d41] absolute h-[4px] w-[80%]"></div>
            </div>
          </div>
          <div>
            <p>Express.js</p>
            <div className="relative bg-gray-400 h-[4px] mt-2">
              <div className="bg-[#ff4d41] absolute h-[4px] w-[95%]"></div>
            </div>
          </div>
          <div>
            <p>Nest.js</p>
            <div className="relative bg-gray-400 h-[4px] mt-2">
              <div className="bg-[#ff4d41] absolute h-[4px] w-[90%]"></div>
            </div>
          </div>
          <div>
            <p>Mongodb</p>
            <div className="relative bg-gray-400 h-[4px] mt-2">
              <div className="bg-[#ff4d41] absolute h-[4px] w-[100%]"></div>
            </div>
          </div>
          <div>
            <p>Next.js</p>
            <div className="relative bg-gray-400 h-[4px] mt-2">
              <div className="bg-[#ff4d41] absolute h-[4px] w-[90%]"></div>
            </div>
          </div>
          <div>
            <p>Redux</p>
            <div className="relative bg-gray-400 h-[4px] mt-2">
              <div className="bg-[#ff4d41] absolute h-[4px] w-[80%]"></div>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer/> */}
    </>
  );
};

export default Skill;
