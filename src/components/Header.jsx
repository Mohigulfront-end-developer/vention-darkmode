import { TfiWorld } from "react-icons/tfi";
import logo from "../assets/sitelogo.svg";

const Header = () => {
  return (
    <div className="w-full bg-[#EBEBED] border-b-2 border-gray-300">
      <header className="container mx-auto px-4 ">
        <div className="flex justify-between items-center">
          <img src={logo} alt="vention logosss" />
          <ul className="flex justify-between items-center gap-20 ">
            <li className="px-3 py-5 border-l-2 border-gray-300">
              <a
                href=""
                className=" font-semibold text-[17px] hover:text-red-900"
              >
                What we do
              </a>
            </li>
            <li className="px-3 py-5">
              <a
                href=""
                className=" font-semibold text-[17px] hover:text-red-900"
              >
                Portfolio
              </a>
            </li>
            <li className="px-3 py-5">
              <a
                href=""
                className=" font-semibold text-[17px] hover:text-red-900"
              >
                Insights
              </a>
            </li>
            <li className="">
              <a
                href=""
                className=" font-semibold text-[17px] hover:text-red-900"
              >
                About us
              </a>
            </li>
            <button className="p-5 bg-[#FF6A47]  hover:bg-red-950 hover:text-white">
              <a href="">Contact us</a>
            </button>
            <li className="py-5">
              <a href="">
                <TfiWorld className="w-[25px] h-[25px] hover:text-red-900" />
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
