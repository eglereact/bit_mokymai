const ModalEdit = ({
  show,
  close,
  tempValues,
  handleChange,
  handleSave,
  cat,
}) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="flex flex-col">
          <input
            type="text"
            name="name"
            value={tempValues.name}
            onChange={handleChange}
            className="mb-2"
          />
          <input
            type="number"
            name="weight"
            value={tempValues.weight}
            onChange={handleChange}
            className="mb-2"
          />
          <fieldset>
            <legend>Gender</legend>
            <div className="cb">
              <input
                type="checkbox"
                name="gender"
                id="f"
                checked={tempValues.gender === "f"}
                onChange={handleChange}
              />{" "}
              <span className="cb">Female</span>
            </div>
            <div className="cb">
              <input
                type="checkbox"
                name="gender"
                id="m"
                checked={tempValues.gender === "m"}
                onChange={handleChange}
              />{" "}
              <span className="cb">Male</span>
            </div>
          </fieldset>
          <div className="mb-2">
            <label htmlFor="color">Color:</label>
            <select
              name="color"
              value={tempValues.color}
              onChange={handleChange}
            >
              <option value="black">Black</option>
              <option value="white">White</option>
              <option value="orange">Orange</option>
              <option value="gray">Gray</option>
            </select>
          </div>
          <div className="flex">
            <button
              type="button"
              className="bg-green-600 w-16"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              type="button"
              className="bg-gray-600 w-16"
              onClick={() => close()}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;
