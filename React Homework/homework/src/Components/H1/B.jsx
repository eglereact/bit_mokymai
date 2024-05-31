import C from "./C";

const B = () => {
  return (
    <div
      style={{
        backgroundColor: "crimson",
        width: "400px",
        height: "300px",
        display: "flex",
        gap: "10px",
      }}
    >
      {" "}
      B
      <C />
      <C />
      <C />
    </div>
  );
};
export default B;
