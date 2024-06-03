import Vat from "./Vat";

const Price1 = ({ productPrice, discount = 0, color }) => {
  return (
    <>
      <div>
        <span>Price: </span>
        {discount === 0 && <b>{productPrice}</b>}
        {discount !== 0 && (
          <>
            <b style={{ textDecoration: "line-through" }}>
              {productPrice} Eur{" "}
            </b>
            <b>{productPrice - discount} Eur</b>
          </>
        )}
      </div>
      <Vat price={productPrice - discount} color={color} show="big" />
    </>
  );
};
export default Price1;
