const SquareButtons = ({ addSquare }) => {
  return (
    <div className="buttons">
      <button type="button" className="green" onClick={addSquare}>
        Add
      </button>
    </div>
  );
};
export default SquareButtons;
