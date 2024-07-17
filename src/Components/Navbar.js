import logo from "../Images/logo.png";
import { IoArrowForward } from "react-icons/io5";
import { IoMenuOutline } from "react-icons/io5";
import TopBar from "./Topbar";

export default function NavBar() {
  return (
    <div className="top-0 z-50 fixed Aeonik  backdrop-filter backdrop-blur-3xl shadow md:shadow-none bg-white/60 w-full transition duration-700">
      <TopBar />
      <div className="flex justify-between items-center w-full  z-50  px-4 md:px-16 py-5">
        <div className="md:flex    items-center ">
          {/* <a href="/">
            <img src={logo} alt="Logo" className="md:w-72 w-32" />
          </a> */}
          <h1 className="text-4xl md:text-7xl AeonikBold text-[#3295DC]">VISUALEZ</h1>
        </div>

        <div className="md:flex hidden items-center space-x-[72px] text-black text-xs xl:text-2xl">
          <a
            className="  hover:text-[#3295DC] hover:underline transition duration-300 cursor-pointer"
            href="/"
          >
            Home
          </a>
          <a
            className="  hover:text-[#3295DC] hover:underline transition duration-300 cursor-pointer"
            href="/"
          >
            About
          </a>
          <a
            className="  hover:text-[#3295DC] hover:underline transition duration-300 cursor-pointer"
            href="/"
          >
            Services
          </a>
          <a
            className="  hover:text-[#3295DC] hover:underline transition duration-300 cursor-pointer"
            href="/"
          >
            Pricing
          </a>
          <a
            className="  hover:text-[#3295DC] hover:underline transition duration-300 cursor-pointer"
            href="/"
          >
            Contact
          </a>
          <div className="flex items-center justify-between rounded-md   pl-4 py-2 pr-2 bg-black text-white hover:underline cursor-pointer">
            <a href="/" className=" pr-4  no-underline">
              Get Started
            </a>
            <div className="p-2 text-black rounded-md bg-white">
              <IoArrowForward />
            </div>
          </div>
        </div>
        <div className="block md:hidden text-[#3295DC] text-2xl">
        <IoMenuOutline />
        </div>
      </div>
    </div>
  );
}
