import { ModeContext } from "./context/ModeContext";
import { modeTypes } from "../types/modeTypes";
import React from "react";

const RegisterForm = () => {
  const { mode } = React.useContext(ModeContext);
  const theme = mode === modeTypes.DARK_MODE ? true : false;

  return (
    <div className={` ${theme ? "bg-[#29292b] text-white " : "bg-[#EBEBED]"} `}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="w-[80vw] ml-[88px] border-l-2 border-r-2 border-gray-300 pt-20">
          <form action="">
            <h3 className="pl-[20px] text-[35px] font-semibold py-10">
              Contact us
            </h3>
            <div className="grid grid-cols-2">
              <input
                type="text"
                className="w-[33vw] bg-transparent py-5 px-5 border border-gray-300 outline-none"
                placeholder="Full name"
              />
              <input
                type="text"
                className="w-[33vw] bg-transparent py-5 px-5 border border-gray-300 outline-none"
                placeholder="Work email"
              />
              <input
                type="text"
                className="w-[33vw] bg-transparent py-5 px-5 border border-gray-300 outline-none"
                placeholder="Phone optional"
              />
              <input
                type="text"
                className="w-[33vw] bg-transparent py-5 px-5 border border-gray-300 outline-none"
                placeholder="Upload file"
              />
              <input
                type="text"
                className="bg-transparent col-span-2 h-[200px] pb-20 px-5 border border-gray-300 outline-none"
                placeholder="How can I help you"
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="my-[5px] px-2">
                <input type="checkbox" id="term" name="term" value="term" />

                <label htmlFor="" className="text-[14px] pl-[8px] ">
                  I agree to the{" "}
                  <a
                    href="https://ventionteams.com/privacy-policy"
                    className="underline"
                  >
                    Privacy Policy
                  </a>{" "}
                  and give my permission to process my personal data for the
                  purposes specified in the Privacy Policy
                </label>
              </div>

              <div className=" bg-blue-600 w-[10vw] h-[80px]"></div>
            </div>
          </form>
        </div>

        <div className="pt-[270px]">
          <button className="w-[25vw] p-20 bg-blue-600 text-white text-[23px] hover:bg-blue-950">
            <a href="#">Send</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
