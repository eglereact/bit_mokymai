const Buttons = ({ setCounter }) => {
  return (
    <div className="buttons">
      <button
        type="button"
        className="green"
        onClick={() => setCounter((c) => c + 1)}
      >
        +1
      </button>
      <button
        type="button"
        className="red"
        onClick={() => setCounter((c) => c - 1)}
      >
        -1
      </button>
    </div>
  );
};
export default Buttons;
