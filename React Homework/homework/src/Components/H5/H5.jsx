import { useEffect, useRef, useState } from "react";
import "./h5-style.css";

const animalTypes = ["Karvės", "Avys"];
const sheepImg =
  "http://pic-aboo.com/wp-content/uploads/animal-sheep-001-s.png";
const cowImg = "http://pic-aboo.com/wp-content/uploads/animal-cow-001-s.png";
function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const H5 = () => {
  const [animals, setAnimals] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("animals");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  useEffect(() => {
    localStorage.setItem("animals", JSON.stringify(animals));
  }, [animals]);

  const generateAnimals = () => {
    const numberOfAnimals = rand(5, 20);
    const newAnimals = Array.from({ length: numberOfAnimals }, () => {
      const animalType = animalTypes[rand(0, animalTypes.length - 1)];
      return {
        animalName: animalType,
        id: animalType.charAt(0) + rand(1000000, 9999999),
        plot: animalType,
      };
    });
    setAnimals(newAnimals);
  };

  const changeSide = (id) => {
    setAnimals((prevAnimals) => {
      const animalToMove = prevAnimals.find((animal) => animal.id === id);
      if (!animalToMove) return prevAnimals;

      const updatedAnimal = {
        ...animalToMove,
        plot: animalToMove.plot === "Karvės" ? "Avys" : "Karvės",
      };

      return [
        ...prevAnimals.filter((animal) => animal.id !== id),
        updatedAnimal,
      ];
    });
  };

  return (
    <div className="container-animals">
      <div className="animals-plots">
        {animalTypes.map((type) => (
          <div className="animals-c" key={type}>
            <h1 className="button-30">{type}</h1>
            <div className="legs">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            <div className="animals-box">
              <div className="top">
                {animals.map((a, i) =>
                  a.plot === type ? (
                    <div
                      key={i}
                      className="animal"
                      onClick={() => changeSide(a.id)}
                    >
                      {a.animalName === "Avys" ? (
                        <div className="sheep">
                          <span>{a.id}</span>
                          <img src={sheepImg} />
                        </div>
                      ) : (
                        <div className="sheep">
                          <span>{a.id}</span>
                          <img src={cowImg} />
                        </div>
                      )}
                    </div>
                  ) : null
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="button-28"
        onClick={() => generateAnimals()}
      >
        į ganyklą
      </button>
    </div>
  );
};
export default H5;
