import React from "react";
import Heading from "./Heading";
import {CgWebsite} from "react-icons/cg";
import { AiOutlineGift } from "react-icons/ai";
import { BsServer } from "react-icons/bs";
const WhatIdo = () => {
  return (
    <section className="container mx-auto py-10 px-4">
      <Heading title="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#ff4d41] text-white">
          <CgWebsite className="text-[28px]" />
          <h2 className="font-medium text-[20px]">MERN Stack Developer</h2>
          <p>
            I am Proficient in MERN stack technologies. I have worked various projects like TvMaze application api based,
            Ecommerce Food Web application, quiz appliication having admin panel to create quiz for various subjects.
            Good Knowledge of REST API creation.
          </p>
        </div>
        <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#ff4d41] text-white">
          <BsServer className="text-[28px]" />
          <h2 className="font-medium text-[20px]">Java Backend Development</h2>
          <p>
            I have Knowledge to create the backend of web application with the Java Springboot.
            Created REST API for the Users informations table using in memory h2-databases.
          </p>
        </div>
        <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#ff4d41] text-white">
          <AiOutlineGift className="text-[28px]" />
          <h2 className="font-medium text-[20px]">Creative</h2>
          <p>
            I am keen learner of new things, I usually read articles and blog. 
            I have written some of the blog on quora.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIdo;
