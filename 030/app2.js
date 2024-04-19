console.log("heelo");

const h1 = document.querySelector("h1");
const btn = document.querySelector("button.add");
const del = document.querySelector("button.del");
const addInput = document.querySelector("input.add");
if (localStorage.getItem("myH1") !== null) {
  h1.innerText = localStorage.getItem("myH1");
}

btn.addEventListener("click", () => {
  const v = addInput.value;

  localStorage.setItem("myH1", v);
  localStorage.setItem("arr", JSON.stringify([1, 2, 3]));
  h1.innerText = v;
});
del.addEventListener("click", () => {
  localStorage.removeItem("myH1");
  h1.innerText = "---";
});

// pasirinkus spalvą ir perkrovus puslapį spalva turi pasilikti pasirinkta.

const color = document.querySelector(".color");

const savedColor = localStorage.getItem("color");

if (savedColor) {
  color.value = savedColor;
}

color.addEventListener("input", () => {
  localStorage.setItem("color", color.value);
});
