const number = document.querySelector(".count");
const sub = document.querySelector(".substract");
const reset = document.querySelector(".reset");
const add = document.querySelector(".add");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("add")) {
    number.innerHTML++;
    changeColor();
  } else if (e.target.classList.contains("substract")) {
    number.innerHTML--;
    changeColor();
  } else if (e.target.classList.contains("reset")) {
    number.innerHTML = 0;
    changeColor();
  }
});

// let count = 0;

// sub.addEventListener("click", () => {
//   count--;
//   number.innerText = count;
//   changeColor();
// });

// add.addEventListener("click", () => {
//   count++;
//   number.innerText = count;
//   changeColor();
// });

// reset.addEventListener("click", () => {
//   count = 0;
//   number.innerText = count;
//   changeColor();
// });

const changeColor = () => {
  if (number.innerHTML < 0) {
    number.style.color = "darkred";
  } else if (number.innerHTML > 0) {
    number.style.color = "darkgreen";
  } else {
    number.style.color = "white";
  }
};
