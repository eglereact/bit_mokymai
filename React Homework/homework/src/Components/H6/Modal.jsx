const Modal = ({ show, removeCat, cat, close }) => {
  if (!show) {
    return null;
  }
  const { id, name } = cat;
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div
          onClick={() => close()}
          className="bg-red-200 w-8 h-8 cursor-pointer"
        >
          X
        </div>
        <h2>Are you sure you want to delete {name}'s card?</h2>
        <button onClick={() => close()}>Cancel</button>
        <button onClick={() => removeCat(id)}>Confirm</button>
      </div>
    </div>
  );
};

export default Modal;
