import LabasZuiki from "./LabasZuiki";
import ZebraiIrBenbrai from "./ZebraiIrBenbrai";
import Book1 from "./Book1";
import Book2 from "./Book2";
import Book3 from "./Book3";

const H2 = () => {
  return (
    <>
      <LabasZuiki />
      <Book1 title="Miegančiosios gražuolės" />
      <ZebraiIrBenbrai number={1} />
      <ZebraiIrBenbrai number={2} />
      <Book2 title="Miegančiosios gražuolės" author="Stephen King, Owen King" />
      <Book3
        title="Miegančiosios gražuolės"
        author="Stephen King, Owen King"
        textColor="#c5a32b"
      />
    </>
  );
};
export default H2;
