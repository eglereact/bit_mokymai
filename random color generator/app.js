const container = document.querySelector(".container");
const hex = document.querySelector("span");
const btn = document.querySelector("button");
const body = document.querySelector("body");

const generateHexColor = () => {
  const randomColor = Math.random().toString(16).substring(2, 8);
  hex.innerText = "#" + randomColor;
  container.style.background = "#" + randomColor;
};

btn.addEventListener("click", generateHexColor);
body.addEventListener("mousewheel", generateHexColor);
