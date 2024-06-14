const ModalMore = ({ show, removeCat, id, name, close, weight }) => {
  if (!show) {
    return null;
  }

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
        <button onClick={() => close()}>Cancel</button>
      </div>
    </div>
  );
};

export default ModalMore;
