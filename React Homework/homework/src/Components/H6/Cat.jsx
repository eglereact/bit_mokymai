const Cat = ({ name, weight, img }) => {
  return (
    <div className="flex w-40  h-32 bg-white justify-between items-center p-4 text-slate-800 rounded-lg shadow-lg ">
      <div>
        <img src={img} alt={name} className="w-16 h-12" />
      </div>
      <div>
        <h1 className="font-bold capitalize">{name}</h1>
        <h2>
          <span className="font-bold">{weight}</span> kg
        </h2>
      </div>
    </div>
  );
};
export default Cat;
