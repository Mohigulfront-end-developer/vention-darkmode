import React, { useState, useEffect } from "react";
import { CgArrowTopRight } from "react-icons/cg";
import img1 from "./../../public/assets/image.webp";
import { ModeContext } from "./context/ModeContext";
import { modeTypes } from "../types/modeTypes";

const HeroSec = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { mode } = React.useContext(ModeContext);
  const theme = mode === modeTypes.DARK_MODE ? true : false;

  const headings = [
    { title: "Engineering peace of mind", color: "#FF6A47" },
    { title: "International Invention Day", color: "#FF6FFF" },
    { title: "AI innovation", color: "#FF6A47" },
    { title: "Expert software development", color: "#3155FE" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % headings.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`common py-14 border-b-2 border-gray-300 ${theme ? "bg-[#29292b] text-white " : "bg-[#EBEBED]"} `}>
      <div className="top container mx-auto px-4 ">
        <div className="top flex items-center gap-28 ">
          <h1
            className={`w-[740px] h-[250px] text-[60px] leading-none py-[30px] px-[30px] flex items-center`}
            style={{ backgroundColor: headings[activeIndex].color }}
          >
            {headings[activeIndex].title}
          </h1>
          <ul className="flex items-center space-x-24 mt-[130px]">
            {headings.map((_, index) => (
              <li
                key={index}
                className={`relative transition-all duration-500`}
              >
                <a
                  href="#"
                  className={`block transition-all duration-1000 ${
                    activeIndex === index ? "text-black" : "text-gray-800"
                  }`}
                >
                  {`0${index + 1}`}
                  <div
                    className={`absolute top-[-10px] left-[-10px] transition-all duration-500 ${
                      activeIndex === index
                        ? "w-[calc(100%+30px)] border-t-4 border-black"
                        : "w-[calc(100%+30px)] border-t-2 border-gray-800"
                    }`}
                  ></div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bottom container mx-auto px-4 flex justify-center items-center gap-20 ">
        <div className="">
          <p className="px-20 w-[660px] font-normal text-[25px]">
            Vention developers partner with innovative companies from startups
            to Fortune 500s, lending the AI engineering expertise to propel them
            to new heights and the edge to outpace the competition.
          </p>
          <button className=" ml-20 mt-10 w-[500px] flex justify-between items-center p-5 font-semibold text-[20px] bg-[#FF6A47]  hover:bg-red-950 hover:text-white">
            Get in estimate
            <CgArrowTopRight className="w-[30px] h-[30px] hover:text-white" />
          </button>
        </div>
        <div className="">
          <img src={img1} alt="" className="w-[50vw]" />
        </div>
      </div>
    </div>
  );
};

export default HeroSec;
