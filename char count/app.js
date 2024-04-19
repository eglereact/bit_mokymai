const count = document.querySelector(".count");
const input = document.querySelector("input");

// input.addEventListener("input", (e) => {
//   let v = e.target.value;
//   const l = v.length;
//   count.innerText = l;
// });

input.addEventListener("keyup", () => {
  count.innerHTML = input.value.length;
});
