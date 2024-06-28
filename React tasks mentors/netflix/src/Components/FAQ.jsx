import { useState } from "react";
import { accordionItems } from "../Utils/urls";
import { BsPlusLg } from "react-icons/bs";
import { RiCloseLargeLine } from "react-icons/ri";
import Input from "./Input";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-black border-b-8 border-[#232323]  flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-white mt-20">
        Frequently Asked Questions
      </h1>
      <div className="w-3/5 space-y-2 mt-10">
        {accordionItems.map((item, index) => (
          <div key={index} className="flex flex-col w-full gap-[1px]">
            <button
              className="w-full flex justify-between items-center bg-[#2d2d2d] hover:bg-[#414141] p-6 text-left "
              onClick={() => toggleAccordion(index)}
            >
              <span className="font-medium text-white text-2xl">
                {item.title}
              </span>
              <div className="text-white text-4xl">
                {activeIndex === index ? <RiCloseLargeLine /> : <BsPlusLg />}
              </div>
            </button>
            <div
              className={`overflow-hidden transition-max-height duration-300 ${
                activeIndex === index ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="p-6 bg-[#2d2d2d] text-white text-2xl">
                <p>{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-14 mb-16">
        <Input />
      </div>
    </div>
  );
};

export default FAQ;
