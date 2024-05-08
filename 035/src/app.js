import axios from "axios";

window.addEventListener("load", () => {
  //
  const input = document.querySelector("input");
  const button = document.querySelector("button");

  button.addEventListener("click", () => {
    const animal = input.value;
    input.value = "";
    axios
      .post("http://localhost/add-animal", { animal })
      .then((res) => {
        console.log(res.data);
        getAllAnimals();
      })
      .catch((error) => console.log(error));
  });

  const az = document.querySelector(".a-z");
  const za = document.querySelector(".z-a");
  az.addEventListener("click", () => {
    getAllAnimals("asc");
  });

  za.addEventListener("click", () => {
    getAllAnimals("desc");
  });

  const getAllAnimals = (sort = "") => {
    const ul = document.querySelector("ul");
    axios
      .get("http://localhost/get-animals?sort=" + sort)
      .then((res) => {
        let html = "";
        res.data.animals.forEach((a) => {
          html += `<li>
        <span>${a.animal}</span>
        <a href="http://localhost/show-animal/${a.id}">Show</a>
        </li>`;
        });
        ul.innerHTML = html;
      })
      .catch((error) => console.log(error));
  };

  getAllAnimals();
});
