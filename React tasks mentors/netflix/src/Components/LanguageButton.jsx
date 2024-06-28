import { IoLanguageSharp } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import { useState } from "react";

const LanguageButton = () => {
  const [showLanguages, setShowLanguages] = useState(false);

  const languages = ["English", "Spanish"];

  const toggleLanguages = () => {
    setShowLanguages((prevState) => !prevState);
  };

  return (
    <div className="relative inline-block text-black">
      <button
        className="text-white border cursor-default w-[135px] border-gray-500 px-4 py-1 rounded flex items-center gap-2 focus:outline-none"
        onClick={toggleLanguages}
      >
        <IoLanguageSharp /> English <FaCaretDown />
      </button>

      {showLanguages && (
        <div className="absolute  w-[135px] bg-white border border-gray-500 rounded shadow-lg">
          {languages.map((lang, index) => (
            <div
              key={index}
              className="px-4 py-2 m-1 rounded cursor-default hover:text-white hover:bg-[#414141]"
            >
              {lang}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default LanguageButton;
