import React, { useState, useEffect } from "react";
import { IoArrowForward } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import solution1 from "../Images/solution1.png";
import solution2 from "../Images/solution2.png";
import solution3 from "../Images/solution3.png";
import solution4 from "../Images/solution4.png";
import solution5 from "../Images/solution5.png";

const buttons = [
  { text: "Website", img: solution1 },
  { text: "Catalog", img: solution2 },
  { text: "In Store", img: solution3 },
  { text: "Samples", img: solution4 },
  { text: "Exhibition", img: solution5 },
];

export default () => {
  const [selectedButton, setSelectedButton] = useState(buttons[0].text);
  const [currentImage, setCurrentImage] = useState(buttons[0].img);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedButton((prevButton) => {
        const currentIndex = buttons.findIndex(button => button.text === prevButton);
        const nextIndex = (currentIndex + 1) % buttons.length;
        setCurrentImage(buttons[nextIndex].img);
        return buttons[nextIndex].text;
      });
    }, 4500);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  const handleClick = (button) => {
    setSelectedButton(button.text);
    setCurrentImage(button.img);
  };

  return (
    <div className="w-full md:px-0 px-4  pt-20 pb-64 bg-white">
      <div className="md:flex justify-center items-center md:px-16">
        <div className="md:w-3/12">
          {buttons.map((button) => (
            <button
              key={button.text}
              className={`flex pl-6 md:pl-12 pr-5 md:pr-10 justify-between items-center py-2 md:py-10 w-full rounded md:rounded-2xl ${
                selectedButton === button.text ? "bg-[#3295DC] text-white" : "bg-gray-100"
              } mb-4`}
              onClick={() => handleClick(button)}
            >
              <div>
                <h1 className="text-lg md:text-2xl w-full">{button.text}</h1>
              </div>
              <div className="text-3xl">
                {selectedButton === button.text && <GoArrowUpRight />}
              </div>
            </button>
          ))}
        </div>

        <div className="md:w-9/12 md:mx-0 mx-4 md:flex justify-end items-center">
          <div>
            <img
              className="w-[1300px] h-full border-4 border-solid object-cover rounded-2xl"
              src={currentImage}
              alt="Solution"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
