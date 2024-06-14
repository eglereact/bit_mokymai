const ModalEdit = ({
  show,
  removeCat,
  id,
  name,
  close,
  tempValues,
  handleChange,
  handleSave,
}) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div>
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
  );
};

export default ModalEdit;
