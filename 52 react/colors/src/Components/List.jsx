const List = ({ colors, setRemove, setEdit }) => {
  if (null === colors) {
    return (
      <ul className="list-group list-group-flush ">
        <li className="list-group-item">Loading...</li>
      </ul>
    );
  }

  return (
    <ul className="list-group list-group-flush ">
      {colors.map((c) => (
        <li key={c.id} className="list-group-item">
          <div className="color-line">
            <div className="content">
              <div style={{ color: c.color }}>{c.color}</div>
              <div className="colors">
                {Array(c.range)
                  .fill()
                  .map((_, i) =>
                    c.shape !== "triangle" ? (
                      <div
                        key={i}
                        className={c.shape}
                        style={{
                          backgroundColor: c.color,
                        }}
                      ></div>
                    ) : (
                      <div
                        key={i}
                        className={c.shape}
                        style={{
                          borderBottomColor: c.color,
                        }}
                      ></div>
                    )
                  )}
              </div>
            </div>
            <div className="buttons">
              <button
                onClick={() => setEdit(c)}
                type="button"
                className="green"
              >
                Edit
              </button>
              <button
                onClick={() => setRemove(c)}
                type="button"
                className="red"
              >
                Delete
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default List;
