// import { MdOutlineDarkMode } from "react-icons/md";
// import { MdOutlineLightMode } from "react-icons/md";
// import useTheme from './context/theme.js';

// function ThemesBtn  ()  {
//  const {themeMode, lightTheme, darkTheme} = useTheme()
//   const onChangeBtn = () => {
//     if (themeMode === 'dark') {
//         lightTheme()
//     }
//     else {
//         darkTheme()
//     }
//   }


//   return (
//     <div className="flex gap-[10px] items-center mb-[80px]">
//       <div className="w-[80px] h-[45px] btn border border-zinc-500 rounded-full flex items-center gap-[5px] p-[5px]">
//         <label htmlFor="" className='relative inline-flex items-center cursor-pointer'>
//           <MdOutlineDarkMode/>
//         <MdOutlineLightMode/>
//         </label>
//         <input type="checkbox" 
//         value=""
//         className='sr-only peer'
//         onChange={onChangeBtn}
//         checked={themeMode === 'dark'}/>
//         {/* <button>
//           <MdOutlineDarkMode
//             onChange={onChangeBtn}
//             checked={themeMode === "dark"}
//             className="dark w-[33px] h-[35px] rounded-full hover:bg-orange-600 p-[5px] "
//           />
//         </button> */}
//         {/* <button>
//           {" "}
//           <MdOutlineLightMode
//             onChange={onChangeBtn}
//             checked={themeMode === "light"}
//             className="light w-[33px] h-[35px] p-[5px] rounded-full hover:bg-orange-600"
//           />
//         </button> */}
//       </div>
//       <p className="text-[25px] text-gray-200">Light mode</p>
//     </div>
//   );
// }

// export default ThemesBtn