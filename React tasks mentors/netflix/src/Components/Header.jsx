import { logo } from "../Utils/urls";
import { IoLanguageSharp } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";

import Input from "./Input";

const Header = () => {
  return (
    <section className="image-container border-b-8 border-[#232323]">
      <div className="background-image">
        <div className="overlay ">
          <div className="flex justify-center flex-col items-center">
            <div className="w-7/12 h-11  mt-6 flex justify-between ">
              <div className="logo">{logo}</div>
              <div className="gap-4 flex h-8">
                <button className="text-white border border-gray-500  px-4 py-1 rounded flex items-center gap-2">
                  <IoLanguageSharp /> English
                  <FaCaretDown />
                </button>
                <button className="text-white bg-[#E50914] font-bold text-sm  hover:bg-[#B20710] transition-all px-4 py-1 rounded">
                  Sign In
                </button>
              </div>
            </div>

            <div className="text-white flex flex-col items-center justify-center gap-5 mt-48">
              <h1 className="text-5xl font-bold">
                Unlimited movies, TV shows, and more
              </h1>
              <h2 className="text-2xl">Watch anywhere. Cancel anytime.</h2>

              <Input />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Header;
