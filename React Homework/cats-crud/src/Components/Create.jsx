import { useContext, useState } from "react";
import { CatContext } from "../Context/CatCon";

const ages = ["0-1", "1-3", "3-7", "7+"];

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
  "/src/images/snowball.png",
  "/src/images/socks.png",
  "/src/images/spots.png",
];

const Create = () => {
  const { createModal, setCreateModal, setStore } = useContext(CatContext);

  const [name, setName] = useState(createModal.name);
  const [weight, setWeight] = useState(createModal.weight);
  const [image, setImage] = useState(createModal.image);
  const [features, setFeatures] = useState(createModal.features);
  const [age, setAge] = useState(createModal.age);

  const handleImage = (e) => {
    setImage(e.target.id);
  };

  const handleCreate = () => {
    setStore({ name, weight, image, features, age });
    setCreateModal(null);
  };

  const handleFeatures = (e) => {
    setFeatures((boxes) => ({ ...boxes, [e.target.id]: !boxes[e.target.id] }));
  };

  return (
    <div>
      <div className="modal-backdrop">
        <div className="modal w-1/2">
          <div className="flex justify-between border-b-2 p-4 border-slate-200">
            <h1 className="text-2xl text-slate-800 font-bold">
              Create a new cat
            </h1>
            <div
              className="text-2xl cursor-pointer w-4 h-4 text-slate-800 font-bold"
              onClick={() => setCreateModal(null)}
            >
              X
            </div>
          </div>

          <div className="p-4 flex flex-col gap-2">
            <div>
              <input
                type="text"
                placeholder="name"
                className="bg-slate-200 outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="weight"
                className="bg-slate-200 outline-none"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>

            <div>
              <select value={age} onChange={(e) => setAge(e.target.value)}>
                {ages.map((a, i) => (
                  <option key={i} value={a}>
                    {a}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex">
              {images.map((url, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    name="image"
                    id={url}
                    checked={image === url}
                    onChange={handleImage}
                  />
                  <label htmlFor={url}>
                    <img className="w-16 cursor-pointer" src={url} />
                  </label>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <div>
                <input
                  type="checkbox"
                  id="curious"
                  checked={features.curious}
                  onChange={handleFeatures}
                />
                <label htmlFor="curious">curious</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="gentle"
                  checked={features.gentle}
                  onChange={handleFeatures}
                />
                <label htmlFor="gentle">gentle</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="friendly"
                  checked={features.friendly}
                  onChange={handleFeatures}
                />
                <label htmlFor="friendly">friendly</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="playful"
                  checked={features.playful}
                  onChange={handleFeatures}
                />
                <label htmlFor="playful">playful</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="cautious"
                  checked={features.cautious}
                  onChange={handleFeatures}
                />
                <label htmlFor="cautious">cautious</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="calm"
                  checked={features.calm}
                  onChange={handleFeatures}
                />
                <label htmlFor="calm">calm</label>
              </div>
            </div>
            <div>
              <button
                type="button"
                className="bg-green-200 p-4"
                onClick={handleCreate}
              >
                Add
              </button>
              <button
                type="button"
                className="bg-gray-200 p-4"
                onClick={() => setCreateModal(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Create;
