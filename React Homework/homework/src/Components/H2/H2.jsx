import LabasZuiki from "./LabasZuiki";
import VienasProps from "./VienasProps";
import ZebraiIrBenbrai from "./ZebraiIrBenbrai";
import DuProps from "./DuProps";
import TrysProps from "./TrysProps";

const H2 = () => {
  return (
    <>
      <LabasZuiki />
      <VienasProps text="Bet koks tekstas, kuris komponente atvaizduojamas h1 tage" />
      <ZebraiIrBenbrai number={1} />
      <ZebraiIrBenbrai number={2} />
      <DuProps textBig="Bigger Text" textSmall="Smaller text" />
      <TrysProps
        textBigger="Text Big"
        textSmaller="text small"
        textColor="crimson"
      />
    </>
  );
};
export default H2;
