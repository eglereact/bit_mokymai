const ZebraiIrBenbrai = ({ number }) => {
  return (
    <h1 className={{ color: number === 1 ? "skyblue" : "crimson" }}>
      Zebrai ir Bebrai
    </h1>
  );
};
export default ZebraiIrBenbrai;
