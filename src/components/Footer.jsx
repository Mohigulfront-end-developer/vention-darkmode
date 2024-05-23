import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import footer1 from "../../public/assets/footer1.svg"
// import footer2 from "../../public/assets/footer2.webp";
// import ThemesBtn from "./ThemesBtn";


const Footer = () => {
  return (
    <div>
      <footer className="bg-stone-800 text-white  ">
        <div className="container mx-auto px-4 ">
          <div className="flex justify-between items-center border-b-2 border-l-2 border-gray-400 ml-[88px] px-[20px] ">
            <div className="border-r-2 border-gray-400 pr-[250px]">
              <h4 className="pt-[50px] w-[500px] pb-[20px] font-semibold text-[25px] text-white">
                Subscribe to our newsletter for industry insights and company
                news!
              </h4>
              <form action="">
                <div className=" absolute flex justify-between items-center">
                  <input
                    type="text"
                    className="w-[500px] outline-none bg-transparent p-5 border-b-2 border-gray-500"
                    placeholder="Email adress*"
                  />{" "}
                  <FaArrowRightLong className="relative ml-[-20px] w-[20px] h-[20px]" />
                </div>
                <br />
                <br />
                <div className="mt-[50px] mb-[50px]">
                  <input
                    type="checkbox"
                    id="term"
                    name="term"
                    value="term"
                    className=""
                  />
                  <label htmlFor="" className="text-gray-400 text-[13px]">
                    {" "}
                    I agree to the{" "}
                    <a
                      href="https://ventionteams.com/privacy-policy"
                      className="underline"
                    >
                      Privacy Policy
                    </a>{" "}
                    and give my permission to proccess my personal data for the{" "}
                    purposes specified in the Privacy Policy.
                  </label>
                </div>
                <div className="flex gap-[10px] items-center mb-[80px]">
                  <div className="w-[80px] h-[45px] btn border border-zinc-500 rounded-full flex items-center gap-[5px] p-[5px]">
                    <button>
                      <MdOutlineDarkMode className="dark w-[33px] h-[35px] rounded-full hover:bg-orange-600 p-[5px] " />
                    </button>
                    <button>
                      {" "}
                      <MdOutlineLightMode className="light w-[33px] h-[35px] p-[5px] rounded-full hover:bg-orange-600" />
                    </button>
                  </div>
                  <p className="text-[25px] text-gray-200">Light mode</p>
                </div>
                {/* <ThemesBtn/> */}
              </form>
            </div>
            <div className="flex justify-between mb-6 gap-[50px]">
              <div className="">
                <div className="space-y-3 pl-[20px] pt-[50px]">
                  <h4 className="font-semibold text-lg text-orange-600">About</h4>
                  <a
                    href="/company"
                    className="block hover:text-orange-600 transition duration-300"
                  >
                    Company
                  </a>
                  <a
                    href="/our-work"
                    className="block hover:text-orange-600 transition duration-300"
                  >
                    Portfolio
                  </a>
                  <a
                    href="/our-partnerships"
                    className="block hover:text-orange-600 transition duration-300"
                  >
                    Partnerships
                  </a>
                  <a
                    href="/newsroom"
                    className="block hover:text-orange-600 transition duration-300"
                  >
                    Newsroom
                  </a>
                  <a
                    href="/media-kit"
                    className="block hover:text-orange-600 transition duration-300"
                  >
                    Media Kit
                  </a>
                  <a
                    href="https://join.ventionteams.com/"
                    className="block hover:text-gray-400 transition duration-300"
                  >
                    Careers
                  </a>
                  <a
                    href="/company/test"
                    className="block hover:text-gray-400 transition duration-300 mb-[80px]"
                  >
                    Contact
                  </a>
                </div>
                <div className="w-30 h-10 mt-[50px]">
                  <iframe
                    id="iframe-0.46026144640111477"
                    width="100%"
                    src="https://widget.clutch.co/widgets/get/1?ref_domain=ventionteams.com&uid=80203&rel_nofollow=true&ref_path=/"
                    height="40px"
                    scrolling="no"
                    style={{
                      border: "none",
                      overflow: "hidden",
                      display: "block",
                      height: "42px",
                    }}
                    title="Clutch Widget"
                  ></iframe>
                </div>
              </div>

              <div className="">
                <div className="py-[50px]">
                  <h4 className="font-semibold text-lg text-gray-600 pb-[12px]">
                    Delivery Models
                  </h4>
                  <a
                    href="/company/how-we-work/dedicated-development-teams"
                    className="block hover:text-orange-600 transition duration-300 pb-[12px]"
                  >
                    Dedicated development teams
                  </a>
                  <a
                    href="/company/how-we-work/project-based-engagement"
                    className="block hover:text-orange-400 transition duration-300 pb-[12px]"
                  >
                    Project-based delivery
                  </a>
                </div>
                <div className="flex space-x-4 mt-[170px]">
                  <a
                    target="_blank"
                    rel="nofollow"
                    href="https://www.iafcertsearch.org/certification/qPsn615HUEPhPxYaXqXUuNgE"
                    className="block w-28 h-10"
                  >
                    <img
                      alt="bbb-logo"
                      loading="lazy"
                      width="106"
                      height="42"
                      decoding="async"
                      src={footer1}
                      style={{
                        color: "transparent",
                        width: "auto",
                        height: "100%",
                      }}
                    />
                  </a>
                  <a
                    href="https://www.bbb.org/us/ny/new-york/profile/computer-software-developers/vention-solutions-inc-0121-87169039/#sealclick"
                    className="block w-56 h-10"
                  >
                    <img
                      src="https://www.bbb.org/us/ny/new-york/profile/computer-software-developers/vention-solutions-inc-0121-87169039/#sealclick"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center text-gray-400">
            <p>&copy; 2024 My Brand. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
