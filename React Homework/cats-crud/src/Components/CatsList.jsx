import { useContext } from "react";
import Cat from "./Cat";
import { CatContext } from "../Context/CatCon";

const CatsList = () => {
  const { cats, filteredCats } = useContext(CatContext);
  if (null === filteredCats) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="flex gap-5">
      {filteredCats.map((c) => (
        <Cat key={c.id} c={c} />
      ))}
    </div>
  );
};
export default CatsList;
