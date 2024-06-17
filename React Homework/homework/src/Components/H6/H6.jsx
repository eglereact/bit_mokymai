import { useEffect, useState } from "react";
import getRandomImage from "../../Functions/randImg";
import imageUrls from "../../Data/data";
import Cat from "./Cat";
import rand from "../../Functions/rand";
import CreateCat from "./CreateCat";
import { TbCat } from "react-icons/tb";

const H6 = () => {
  const [cats, setCats] = useState(() => {
    const savedCats = localStorage.getItem("cats");
    return savedCats ? JSON.parse(savedCats) : [];
  });
  const [cat, setCat] = useState({
    name: "",
    weight: "",
    available: "y",
    color: "black",
    image: "",
  });
  const [sortCriteria, setSortCriteria] = useState("weightDesc");

  const images = [
    "/src/images/bandit.png",
    "/src/images/misty.png",
    "/src/images/peach.png",
    "/src/images/macky.png",
    "/src/images/apricot.png",
    "/src/images/cocoa.png",
    "/src/images/fred.png",
    "/src/images/ganache.png",
    "/src/images/ginger.png",
    "/src/images/pepper.png",
    "/src/images/princes.png",
    "/src/images/smokey.png",
  ];
  const [modalCreate, setModalCreate] = useState(false);
  const toggleModalCreate = () => setModalCreate((prev) => !prev);

  const handleChange = (e) => {
    const { name, value, id, type } = e.target;

    if (type === "checkbox") {
      // Handle available change
      setCat((prevCat) => ({
        ...prevCat,
        available: id,
      }));
    } else if (type === "select-one") {
      // Handle color change
      setCat((prevCat) => ({
        ...prevCat,
        color: value,
      }));
    } else {
      // Handle text inputs for name and weight
      setCat((prevCat) => ({
        ...prevCat,
        [name]: value,
        id: "K" + rand(10000, 99999),
        // img: getRandomImage(imageUrls),
      }));
    }
  };

  const handleImageChange = (e) => {
    const { id } = e.target;
    setCat((prevCat) => ({
      ...prevCat,
      image: id,
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
    if (cat.image === "") {
      alert("Please select image.");
      return;
    }
    setCats((prevCats) => [...prevCats, cat]);
    setCat({ name: "", weight: "", image: "" });
    toggleModalCreate();
  };

  const removeCat = (id) => {
    const catRemoved = cats.filter((c) => c.id !== id);
    setCats(catRemoved);
    localStorage.setItem("cats", JSON.stringify(catRemoved));
  };

  useEffect(() => {
    localStorage.setItem("cats", JSON.stringify(cats));
  }, [cats]);

  const updateCat = (
    id,
    newName,
    newWeight,
    newAvailable,
    newColor,
    newImage
  ) => {
    const updatedCats = cats.map((cat) =>
      cat.id === id
        ? {
            ...cat,
            name: newName,
            weight: newWeight,
            available: newAvailable,
            color: newColor,
            image: newImage,
          }
        : cat
    );
    setCats(updatedCats);
    localStorage.setItem("cats", JSON.stringify(updatedCats));
  };

  const sortCats = (criteria) => {
    switch (criteria) {
      case "weightAsc":
        return cats.sort((a, b) => parseFloat(a.weight) - parseFloat(b.weight));
      case "weightDesc":
        return cats.sort((a, b) => parseFloat(b.weight) - parseFloat(a.weight));
      case "nameAsc":
        return cats.sort((a, b) => a.name.localeCompare(b.name));
      case "nameDesc":
        return cats.sort((a, b) => b.name.localeCompare(a.name));
      default:
        return cats;
    }
  };

  const sortedCats = sortCats(sortCriteria);

  return (
    <div className="flex justify-center items-center bg-slate-500 flex-col">
      <div className=" text-slate-900 w-4/5">
        <div className="bg-slate-300 w-[300px] p-4 rounded-lg flex flex-col gap-3 mt-4">
          <h1 className="text-2xl font-bold">Statistics:</h1>
          <h1>
            All weight :{" "}
            <span className="text-slate-900 font-bold  bg-white rounded-3xl px-2 py-1">
              {cats.reduce((a, c) => a + parseFloat(c.weight), 0)}
            </span>{" "}
            kg
          </h1>
          <h1>
            There are{" "}
            <span className="text-slate-900 font-bold bg-white rounded-3xl px-2 py-1">
              {cats.length}
            </span>{" "}
            cats.
          </h1>
        </div>
      </div>
      <div>
        <button
          title="Create new cat"
          type="button"
          className="bg-slate-900 rounded-full text-white p-5 flex justify-center items-center w-20 h-20 hover:bg-white hover:text-slate-900 fixed top-4 left-4"
          onClick={toggleModalCreate}
        >
          <TbCat fontSize={50} />
        </button>
        <CreateCat
          show={modalCreate}
          close={toggleModalCreate}
          cat={cat}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleImageChange={handleImageChange}
          images={images}
        />
      </div>
      <div className="flex gap-2 mt-4 w-4/5">
        <button
          onClick={() => setSortCriteria("weightAsc")}
          className="bg-slate-900 rounded-lg p-1 text-white  w-52 hover:bg-slate-200"
        >
          Sort by Weight ASC
        </button>
        <button
          onClick={() => setSortCriteria("weightDesc")}
          className="bg-slate-900 rounded-lg p-1 text-white  w-52 hover:bg-slate-200"
        >
          Sort by Weight DESC
        </button>
        <button
          onClick={() => setSortCriteria("nameAsc")}
          className="bg-slate-900 rounded-lg p-1 text-white  w-52 hover:bg-slate-200"
        >
          Sort by Name [A-Z]
        </button>
        <button
          onClick={() => setSortCriteria("nameDesc")}
          className="bg-slate-900 rounded-lg p-1 text-white  w-52 hover:bg-slate-200"
        >
          Sort by Name [Z-A]
        </button>
      </div>
      <div className="flex w-4/5 justify-start">
        <div className="flex gap-2 flex-wrap mt-4">
          {sortedCats.map((c) => (
            <Cat
              key={c.id}
              cat={c}
              removeCat={removeCat}
              updateCat={updateCat}
              handleImageChange={handleImageChange}
              images={images}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default H6;
