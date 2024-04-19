function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const africa = [
  "Zebras",
  "Liūtas",
  "",
  "Raganosis",
  "",
  "Raganosis",
  "Begemotas",
];
const australia = ["Kengūra", "Ančiasnapis", "Dingo", "Atsirado", "Strutis"];
window.addEventListener("load", () => {
  //u1
  const h21 = document.querySelector("h2");
  const h22 = document.querySelector("h2 + h2");
  const btn1 = document.querySelector(".u1");

  btn1.addEventListener("click", () => {
    const r1 = rand(1, 6);
    const r2 = rand(1, 6);

    if (r1 == r2) {
      h21.style.color = "crimson";
      h22.style.color = "crimson";
    } else {
      h21.style.color = "black";
      h22.style.color = "black";
    }

    h21.innerText = r1;
    h22.innerText = r2;
  });
  //2
  const h3 = document.querySelector("h3");
  const btn2 = document.querySelector(".u2");
  const arr = [];

  btn2.addEventListener("click", () => {
    arr.push(rand(1, 10));
    console.log(arr);
    let sum = 0;

    arr.forEach((n) => (sum += n));
    h3.innerText = sum;
  });
  //3
  const ul = document.querySelector("ul");
  africa.forEach((a) => {
    if (a) {
      const li = document.createElement("li");
      const text = document.createTextNode(a);
      li.appendChild(text);
      ul.appendChild(li);
    }
  });
  //4
  const h5 = document.querySelector("h5");
  const i1 = document.querySelector(".i1");
  const i2 = document.querySelector(".i2");
  const u41 = document.querySelector(".u41");
  const u42 = document.querySelector(".u42");

  u41.addEventListener("click", () => {
    const value1 = parseInt(i1.value);
    const value2 = parseInt(i2.value);
    const rez = value1 + value2;
    h5.innerText = rez;
  });
  u42.addEventListener("click", () => {
    const value1 = parseInt(i1.value);
    const value2 = parseInt(i2.value);
    const rez = value1 - value2;
    h5.innerText = rez;
  });
  //5
  const australiaU = document.querySelector(".australia");
  let html = "";
  australia.forEach((a) => {
    if (a != "Dingo") {
      html += `<li>${a}</li>`;
    } else {
      html += `<li style="color:skyblue">${a}</li>`;
    }
  });
  australiaU.innerHTML = html;

  const animal1 = "Antis";
  const animal2 = 200;
  const animal3 = {
    a: "Antis",
    w: 200,
  };
  const zoo = document.querySelector(".zoo");

  zoo.dataset.a1 = animal1;
  zoo.dataset.a2 = animal2;
  zoo.dataset.a3 = JSON.stringify(animal3);

  const readAnimal1 = zoo.dataset.a1;
  const readAnimal2 = parseFloat(zoo.dataset.a2);
  const readAnimal3 = JSON.parse(zoo.dataset.a3);
  console.log(readAnimal1, typeof readAnimal1);
  console.log(readAnimal2, typeof readAnimal2);
  console.log(readAnimal3, typeof readAnimal3);
});
