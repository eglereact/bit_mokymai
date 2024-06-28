const Section = ({ title, text, direction, img }) => {
  if (direction === "left") {
    return (
      <div className="bg-black text-white w-full h-[580px] border-b-8 border-[#232323] flex justify-center">
        <div className="w-3/5  grid grid-cols-2 items-center">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl font-bold ">{title}</h1>
            <h2 className="text-2xl ">{text}</h2>
          </div>
          <div>
            <img src={img} alt={title} />
          </div>
        </div>
      </div>
    );
  }
  if (direction === "right") {
    return (
      <div className="bg-black text-white w-full h-[580px] border-b-8 border-[#232323] flex justify-center">
        <div className="w-3/5  grid grid-cols-2 items-center">
          <div>
            <img src={img} alt={title} />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl font-bold ">{title}</h1>
            <h2 className="text-2xl ">{text}</h2>
          </div>
        </div>
      </div>
    );
  }
};
export default Section;
