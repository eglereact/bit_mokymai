const TrysProps = ({ textBigger, textSmaller, textColor }) => {
  return (
    <>
      <h1 style={{ color: textColor }}>{textBigger}</h1>
      <h2 style={{ color: textColor }}>{textSmaller}</h2>
    </>
  );
};
export default TrysProps;
