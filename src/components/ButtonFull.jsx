import React from 'react'
import { CgArrowTopRight } from "react-icons/cg";

const ButtonFull = () => {
  return (
    <div>
      <button className='pl-[200px] pr-[20px] bg-green-400 w-full py-5 flex justify-between items-center font-semibold text-[25px] hover:bg-blue-900 hover:text-white'>
        <a href="">View All</a>
        <CgArrowTopRight className='w-[30px] h-[30px]'/>

      </button>
    </div>
  );
}

export default ButtonFull