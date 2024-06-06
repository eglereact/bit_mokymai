import Square from "./Square";

const SquareBin = ({ sq, rotateSq }) => {
  return (
    <div className="sq-bin">
      {sq.map((s) => (
        <Square key={s.id} s={s} rotateSq={rotateSq} />
      ))}
    </div>
  );
};
export default SquareBin;
