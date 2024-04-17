console.log("Welcome to DOM!");

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", (_) => {
  ///
  const git = document.querySelector("a");

  git.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("valio");
  });

  const btn = document.querySelector("button.select");
  btn.addEventListener("click", () => {
    const value = document.querySelector("select").value;
    console.log(value);
  });

  const btn2 = document.querySelector(".cb");
  btn2.addEventListener("click", () => {
    const val = document.querySelectorAll("[type = 'checkbox']");
    val.forEach((c) => {
      if (c.checked) {
        console.log(c.value);
      }
    });
  });
  const btn3 = document.querySelector(".rb");
  btn3.addEventListener("click", () => {
    const val = document.querySelectorAll("[type = 'radio']");
    val.forEach((c) => {
      if (c.checked) {
        console.log(c.value);
      }
    });
  });

  document.querySelector("button.color").addEventListener("click", (_) => {
    const value = document.querySelector('[type="color"]').value;
    document.querySelector(".box.color").style.backgroundColor = value;
    console.log(value);
  });

  document.querySelector("button.ta").addEventListener("click", (_) => {
    const value = document.querySelector("textarea").value;
    console.log(value);
  });

  // 1. Padaryt select tagą iš color masyvo
  const colors = ["skyblue", "orange", "crimson", "gray"];
  const newSelect = document.createElement("select");
  for (let i = 0; i < colors.length; i++) {
    const option = document.createElement("option");
    const text = document.createTextNode(colors[i]);
    option.value = colors[i];
    option.appendChild(text);
    newSelect.appendChild(option);
  }

  const container = document.querySelector(".container");
  container.appendChild(newSelect);

  // 2. Paspaudus butoną, jis (butonas) nusidažytų parinkta my-colors spalva
  const go = document.querySelector(".go");
  go.addEventListener("click", () => {
    const value = document.querySelector(".container select").value;
    go.style.backgroundColor = value;
  });

  // 3. Pasirinkus iš sąrašo skaičių jį pridėti prie bendros sumos

  const add = document.querySelector(".add");
  const sum = document.querySelector(".sum");
  let suma = 0;
  add.addEventListener("click", () => {
    const val = document.querySelectorAll(".digits [type='radio']");
    val.forEach((c) => {
      if (c.checked) {
        suma += parseInt(c.value);
      }
    });
    sum.innerText = suma;
  });
});
