import React from 'react'
import { ModeContext } from "./context/ModeContext";
import { modeTypes } from "../types/modeTypes";

const Recognize = () => {
    const { mode } = React.useContext(ModeContext);
    const theme = mode === modeTypes.DARK_MODE ? true : false;
  return (
    <div className={` ${theme ? "bg-[#29292b] text-white " : "bg-[#EBEBED]"} `}>
      <div className="container mx-auto px-4">
        <div className="px-8 ml-[88px] border-l-2 border-b-2 border-gray-300 py-20">
          <h3 className="pt-[30px] font-semibold text-[45px] mb-[15px]">
            Recognized as a leader by those in the know
          </h3>
          <p className="font-normal text-[25px]">
            Year after year, Vention has been counted among best-in-class
            companies by the industry’s most respected institutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Recognize