const Square = ({ s, rotateSq }) => {
  return (
    <div
      className="sq"
      onClick={() => rotateSq(s.id)}
      style={{
        backgroundColor: s.color + "66",
        borderColor: s.color,
        transform: `rotate(${s.rotate}deg)`,
      }}
    >
      {s.id}
    </div>
  );
};
export default Square;
