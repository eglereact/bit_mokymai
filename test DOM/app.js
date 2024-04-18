console.log("hello");
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

window.addEventListener("load", (_) => {
  //1
  const btn = document.querySelector("button");
  const h2 = document.querySelector("h2");
  const h2a = document.querySelector("h2 + h2");
  btn.addEventListener("click", () => {
    h2.innerText = rand(1, 6);
    h2a.innerText = rand(1, 6);
    if (h2.innerText == h2a.innerText) {
      h2.style.color = "crimson";
      h2a.style.color = "crimson";
    } else {
      h2.style.color = "black";
      h2a.style.color = "black";
    }
  });
  //2
  const arr = [];
  const btn2 = document.querySelector("h3 + button");
  const h3 = document.querySelector("h3");
  let sum = 0;
  btn2.addEventListener("click", () => {
    let number = rand(1, 10);
    arr.push(number);
    sum = 0;
    arr.forEach((n) => {
      sum += n;
    });
    h3.innerText = sum;
    console.log(arr);
  });
  //3
  const ul = document.querySelector("ul");

  africa.forEach((a) => {
    if (a.length > 0) {
      const li = document.createElement("li");
      li.innerText = a;
      ul.appendChild(li);
    }
  });

  //4
  const input1 = document.querySelector("input");
  const input2 = document.querySelector("input + input");
  const h5 = document.querySelector("h5");
  const plus = document.querySelector(".plus");
  const minus = document.querySelector(".minus");

  plus.addEventListener("click", () => {
    let number = input1.value;
    let number2 = input2.value;
    h5.innerText = parseInt(number) + parseInt(number2);
  });
  minus.addEventListener("click", () => {
    let number = input1.value;
    let number2 = input2.value;
    h5.innerText = parseInt(number) - parseInt(number2);
  });
  //5
  const bossUl = document.querySelector(".boss");
  let str = "";
  australia.forEach((a) => {
    const li = document.createElement("li");
    bossUl.appendChild(li);
    const textNode = document.createTextNode(a);
    li.appendChild(textNode);
    bossUl.appendChild(li);
    if (a === "Dingo") {
      li.style.backgroundColor = "skyblue";
    }
    str += a + " ";
  });

  const li = document.createElement("li");
  li.innerText = str;
  bossUl.appendChild(li);
});
