import { FaChevronRight } from "react-icons/fa6";

const Input = () => {
  return (
    <div className="text-white flex flex-col items-center justify-center gap-4">
      <h3 className="text-xl">
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <div className="flex gap-2 ">
        <input
          type="text"
          placeholder="Email Address"
          className="border w-[360px] py-4 px-4 border-gray-500 bg-black/40 rounded focus:border-black focus:outline-white"
        />
        <button
          type="button"
          className="bg-[#E50914] font-bold text-2xl  hover:bg-[#B20710] transition-all flex items-center rounded py-2 px-4 gap-4"
        >
          Get started <FaChevronRight />
        </button>
      </div>
    </div>
  );
};
export default Input;
