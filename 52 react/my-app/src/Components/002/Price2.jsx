import Vat from "./Vat";

const Price2 = ({ productPrice, discount = 0, color }) => {
  if (discount === 0) {
    return (
      <>
        <div>
          <span>Price: </span>
          {discount === 0 && <b>{productPrice}</b>}
        </div>
        <Vat price={productPrice - discount} color={color} show="big" />
      </>
    );
  } else {
    return (
      <>
        <div>
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
  }
};
export default Price2;
