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
      }}
    >
      A
      <B />
      <B />
    </div>
  );
};
export default A;
