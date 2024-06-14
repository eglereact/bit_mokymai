const ModalMore = ({ show, cat, close }) => {
  if (!show) {
    return null;
  }
  const { id, name, weight, img, gender, color } = cat;
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div
          onClick={() => close()}
          className="bg-red-200 w-8 h-8 cursor-pointer"
        >
          X
        </div>
        <h1>{id}</h1>
        <h1>{name}</h1>
        <h1>{weight}</h1>
        <h1>{gender || "n/a"}</h1>
        <h1>{color || "n/a"}</h1>
        <img src={img} alt={name} className="w-20 h-14" />
        <button onClick={() => close()}>Cancel</button>
      </div>
    </div>
  );
};

export default ModalMore;
