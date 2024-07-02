import { useContext } from "react";
import { DataContext } from "../Context/DataContext";

const Delete = () => {
  const { setRemove, remove, setDestroy } = useContext(DataContext);

  const handleDelete = () => {
    setDestroy({ ...remove });
    setRemove(null);
  };
  return (
    <div className="modal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Delete color</h5>
            <button
              type="button"
              onClick={() => setRemove(null)}
              className="btn-close"
            ></button>
          </div>
          <div className="modal-body">
            <div>
              <h6>Are you sure you want to delete shapes?</h6>
            </div>
            <div className="color-line">
              <div className="content">
                <div className="colors">
                  {Array(remove.range)
                    .fill()
                    .map((_, i) =>
                      remove.shape !== "triangle" ? (
                        <div
                          key={i}
                          className={"small " + remove.shape}
                          style={{
                            backgroundColor: remove.color,
                          }}
                        ></div>
                      ) : (
                        <div
                          key={i}
                          className={"small " + remove.shape}
                          style={{
                            borderBottomColor: remove.color,
                          }}
                        ></div>
                      )
                    )}
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="red" onClick={handleDelete}>
              Delete
            </button>
            <button
              type="button"
              className="blue"
              onClick={() => setRemove(null)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Delete;
