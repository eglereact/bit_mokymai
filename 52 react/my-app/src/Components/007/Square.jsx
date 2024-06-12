const Square = ({ id, destroySq }) => {
  return (
    <div className="sq" onClick={() => destroySq(id)}>
      {id}
    </div>
  );
};
export default Square;
