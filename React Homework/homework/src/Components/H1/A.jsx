import B from "./B";

const A = () => {
  return (
    <div
      style={{
        backgroundColor: "gold",
        width: "1000px",
        height: "600px",
        display: "flex",
        gap: "10px",
        flexDirection: "column",
      }}
    >
      A
      <B />
      <B />
      <div className="D">D</div>
      <div className="D">D</div>
      <div className="D">D</div>
    </div>
  );
};
export default A;
