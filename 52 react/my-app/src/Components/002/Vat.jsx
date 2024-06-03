import "./vat.scss";

const Vat = ({ price, color, show }) => {
  const vat = (price / 100) * 21;
  return (
    <>
      <div>
        <span className={show}>
          Vat: <b style={{ color }}>{vat} Eur</b>
        </span>
      </div>
    </>
  );
};
export default Vat;
