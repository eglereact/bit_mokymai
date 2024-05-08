import axios from "axios";
import { error } from "laravel-mix/src/Log";
function rand(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}
window.addEventListener("load", () => {
  const readButton = document.querySelector("#r");
  const writeButton = document.querySelector("#w");
  const digits = document.querySelector(".digits");
  let counter = 0;

  writeButton.addEventListener("click", () => {
    const data = {
      digit: ++counter,
    };
    axios
      .post("http://localhost/write", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  readButton.addEventListener("click", () => {
    axios
      .get("http://localhost/read")
      .then((res) => {
        let html = "";
        res.data.digits.forEach((element) => {
          html += `<span>${element}</span>`;
        });
        digits.innerHTML = html;
      })
      .catch((error) => {
        console.log(error);
      });
  });
  // const sd = document.querySelector(".super-digit");
  // sd.innerText = rand(0, 9);
});
