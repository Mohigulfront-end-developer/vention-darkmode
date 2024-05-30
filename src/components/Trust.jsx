import React from 'react'
import { ModeContext } from "./context/ModeContext";
import { modeTypes } from "../types/modeTypes";

const Trust = () => {
  const { mode } = React.useContext(ModeContext);
  const theme = mode === modeTypes.DARK_MODE ? true : false;
  return (
    <div className={` ${theme ? "bg-[#29292b] text-white " : "bg-[#EBEBED]"} `}>
      <div className="container mx-auto px-4  flex justify-between ">
        <div className=" px-8 ml-[88px] border-l-2 border-b-2 border-gray-300">
          <h2 className="pt-[100px] pb-3 font-semibold text-[40px]">
            Trusted by the best
          </h2>
          <p className="pb-[50px] font-normal text-[20px]">
            Companies ranging from early-stage startups to Fortune 500
            enterprises partner with us to develop game-changing growth
            solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Trust
