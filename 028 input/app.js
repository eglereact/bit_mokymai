console.log("Welcome to DOM! IV");

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", (_) => {
  ///
  const input = document.querySelector(".i1");
  const button = document.querySelector("button");

  button.addEventListener("click", () => {
    const value = input.value;
    console.log(value);
  });
  //  <!-- Reikia padaryti skaičių daugintuvą, kuris rezultatą išveda į konsolę -->
  const one = document.querySelector(".a1");
  const two = document.querySelector(".a2");
  const btn = document.querySelector(".calc button");

  btn.addEventListener("click", () => {
    const v1 = parseFloat(one.value);
    const v2 = parseFloat(two.value);
    one.style.borderColor = "black";
    two.style.borderColor = "black";

    if (isNaN(v1) || isNaN(v2)) {
      console.log("Not a number");
      if (isNaN(v1)) {
        one.style.borderColor = "red";
      }
      if (isNaN(v2)) {
        two.style.borderColor = "red";
      }
    } else {
      console.log(v1 * v2);
    }
  });
});
