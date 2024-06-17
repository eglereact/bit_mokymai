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
    image: "/src/images/bandit.png",
  });

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

  console.log(cats);

  return (
    <div className="flex justify-center items-center h-[100vh] bg-slate-500 flex-col">
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
