console.log("Hello");

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", (_) => {
  const div1 = document.querySelector("div");
  const ate = document.querySelector(".ate");

  console.log(div1);
  console.log(ate);

  //Paselektinti h2 antrą tagą
  const h2Elements = document.querySelector("h2 + h2");
  const iElements = document.querySelector("span i + i");

  console.log(iElements);

  //Paselektink mane tekstą h2 tage pakeisti į tekstą "pakeistas"

  h2Elements.innerText = "Pakeistas";

  //Į pirmą h3 tagą įrašyti "Vienas" į antrą - "Du"
  const h3 = document.querySelector("h3");
  const h32 = document.querySelector("h3+h3");
  h3.innerText = "Vienas";
  h32.innerText = "Du";

  const valio = document.querySelector(".valio");

  console.log(valio);
  const ul = document.querySelector("ul");

  ul.innerHTML = `<li>Pirmasis</li>`;

  console.log(ul);

  //  Į tagą ol pridėti du li tagus - vienas su "Zuikis", kitas su "Katinas"

  const ol = document.querySelector("ol");

  ol.innerHTML = `<li>Zuikis</li>
                  <li>Katinas</li>`;

  const big = document.querySelector(".big");
  let z = "";

  for (let i = 0; i < 10; i++) {
    z += `<li>zuikis</li>`;
  }
  big.innerHTML = z;

  //   <!-- Į tagą su klase "random" pridėti 10 li elementų su atsitiktiniais skaičiais nuo 10 iki 99 -->
  const random = document.querySelector(".random");

  let x = "";

  for (let i = 0; i < 10; i++) {
    x += `<li>${rand(10, 99)}</li>`;
  }

  random.innerHTML = x;
});
