import React from "react";
import HomePageVideo from "../Images/herovideo.mp4";
import { IoArrowForward } from "react-icons/io5";

export default function Hero() {
  return (
    <section id="hero" className="relative Aeonik">
      <div className=" md:flex justify-center items-center pt-48 md:pt-0  md:pl-16 md:h-screen HeroContainer">
        <div className=" flex justify-center items-end mb-20 md:pb-0 w-full md:w-6/12 h-[45%] text-center px-4 md:h-full md:text-left">
          <div className="">
            <h1 className="   md:pr-40 font-bold text-3xl   text-textprimary md:text-7xl">
              Get <span className="text-[#3295DC]"> 360&deg; </span> views of
              your <span className="text-[#3295DC]"> Flooring</span>
            </h1>
            <h1 className="my-6 md:my-10  text-base  md:text-3xl  pr-8 line-clamp-3">
              In the competitive tile, flooring, and quartz industry, capturing
              your customers' attention and providing them with an immersive
              product experience is crucial. Our innovative QR code technology
              and 360-degree views are designed to elevate your product visuals
              both in-store and on your website, making it easier for customers
              to make informed decisions.
            </h1>

            <div className="flex justify-center md:justify-start">
              <div className="flex items-center justify-between rounded-md text-base md:text-2xl pl-4 py-2 pr-2 bg-[#3295DC] text-white hover:underline cursor-pointer">
                <a href="#contactme" className="  no-underline">
                  Get A Free Sample View
                </a>
                <div className="p-2 ml-3 text-[#3295DC] rounded-md bg-white">
                  <IoArrowForward />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center  w-full md:w-7/12  md:pl-8 text-center">
          <video autoPlay muted loop className="md:h-screen h-[400px] object-cover">
            <source src={HomePageVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
