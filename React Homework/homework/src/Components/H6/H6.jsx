import { useEffect, useState } from "react";
import getRandomImage from "../../Functions/randImg";
import imageUrls from "../../Data/data";
import Cat from "./Cat";
import rand from "../../Functions/rand";

const H6 = () => {
  const [cats, setCats] = useState(() => {
    const savedCats = localStorage.getItem("cats");
    return savedCats ? JSON.parse(savedCats) : [];
  });
  const [cat, setCat] = useState({ name: "", weight: "", gender: "f" });

  const handleChange = (e) => {
    const { name, value, id } = e.target;
    setCat((prevCat) => ({
      ...prevCat,
      [name]: value,
      id: "K" + rand(10000, 99999),
      img: getRandomImage(imageUrls),
      gender: id,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!cat.name || !cat.weight) {
      alert("Both name and weight fields are required.");
      return;
    }

    if (isNaN(cat.weight) || Number(cat.weight) <= 0) {
      alert("Weight must be a positive number.");
      return;
    }
    setCats((prevCats) => [...prevCats, cat]);
    setCat({ name: "", weight: "" });
  };

  const removeCat = (id) => {
    const catRemoved = cats.filter((c) => c.id !== id);
    setCats(catRemoved);
    localStorage.setItem("cats", JSON.stringify(catRemoved));
  };

  useEffect(() => {
    localStorage.setItem("cats", JSON.stringify(cats));
  }, [cats]);

  const updateCat = (id, newName, newWeight, newGender) => {
    const updatedCats = cats.map((cat) =>
      cat.id === id
        ? { ...cat, name: newName, weight: newWeight, gender: newGender }
        : cat
    );
    setCats(updatedCats);
    localStorage.setItem("cats", JSON.stringify(updatedCats));
  };

  console.log(cats);

  return (
    <div className="flex justify-center items-center h-screen bg-slate-500 flex-col">
      <div>
        <h1 className="text-4xl font-bold text-white">
          All weight :{" "}
          <span className="text-slate-900 bg-white rounded-3xl px-2 py-1">
            {cats.reduce((a, c) => a + parseFloat(c.weight), 0)}
          </span>{" "}
          kg
        </h1>
        <h1>There are {cats.length} cats.</h1>
      </div>
      <div className="flex  w-5/6  justify-center ">
        <div className="flex gap-2 flex-wrap m-4 p-7">
          {cats
            .sort((a, b) => parseFloat(b.weight) - parseFloat(a.weight))
            .map((c) => (
              <Cat
                key={c.id}
                cat={c}
                removeCat={removeCat}
                updateCat={updateCat}
              />
            ))}
        </div>
      </div>
      <div className="flex flex-col w-[300px] gap-3">
        <input
          type="text"
          placeholder="Enter name"
          name="name"
          value={cat.name}
          className="outline-none border-none p-2  w-full rounded-lg"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter weight"
          name="weight"
          value={cat.weight}
          className="outline-none border-none p-2  w-full rounded-lg"
          onChange={handleChange}
        />
        <div>
          <fieldset>
            <legend>Gender</legend>
            <div className="cb">
              <input
                type="checkbox"
                name="f"
                id="f"
                checked={cat.gender === "f"}
                onChange={handleChange}
              />{" "}
              <span className="cb">Female</span>
              {/* <label className="cb-svg" htmlFor="rA">
                {cat.gender === "f" ? rbc : rbu}
              </label> */}
            </div>
            <div className="cb">
              <input
                type="checkbox"
                name="m"
                id="m"
                checked={cat.gender === "m"}
                onChange={handleChange}
              />{" "}
              <span className="cb">Male</span>
              {/* <label className="cb-svg" htmlFor="rB">
                {cat.gender === "m" ? rbc : rbu}
              </label> */}
            </div>
          </fieldset>
        </div>
        <button
          type="submit"
          className="bg-slate-900 w-full rounded-lg p-2 hover:bg-slate-950 transition-all text-white"
          onClick={handleSubmit}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default H6;
