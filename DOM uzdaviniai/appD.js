const figures = [
  { id: 1, name: "one", color: "red", figure: "circle" },
  { id: 2, name: "two", color: "green", figure: "triangle" },
  { id: 3, name: "three", color: "blue", figure: "square" },
  { id: 4, name: "four", color: "yellow", figure: "circle" },
  { id: 5, name: "five", color: "orange", figure: "triangle" },
  { id: 6, name: "six", color: "gray", figure: "square" },
  { id: 7, name: "seven", color: "black", figure: "circle" },
  { id: 8, name: "eight", color: "brown", figure: "triangle" },
  { id: 9, name: "nine", color: "skyblue", figure: "square" },
];

window.addEventListener("load", (_) => {
  // Part D
  //1 Pagal duotą figures masyvą JS kodu padarykite select tagą su spalvų pasirinkimu;
  //2 JS kodu sukurkite h1 tagą su spalvos pavadinimu iš 1 dalies. Teksto spalva tage atitinka spalvos pavadinimą. Keičiantis select pasirinkimui keičiasi ir h1 tago turinys;
  //3 Padarykite mygtuką “Go RED” kuris 1 dalies select pasirinkimą grąžintų į raudoną spalvą ir atitinkamai pasikeistų 2 dalies h1 tago turinys;

  const container = document.querySelector(".d-tasks");
  const select = document.createElement("select");
  const h1 = document.createElement("h1");
  h1.innerText = "red";
  h1.style.color = "red";
  const goRedBtn = document.createElement("button");
  const goRedText = document.createTextNode("Go red");

  figures.forEach((figure) => {
    const option = document.createElement("option");
    const text = document.createTextNode(figure.color);
    option.value = figure.color;
    option.appendChild(text);
    select.appendChild(option);
  });

  container.appendChild(h1);
  container.appendChild(select);
  goRedBtn.appendChild(goRedText);
  container.appendChild(goRedBtn);

  select.addEventListener("change", () => {
    h1.innerText = select.value;
    h1.style.color = select.value;
  });

  goRedBtn.addEventListener("click", () => {
    h1.innerText = "red";
    h1.style.color = "red";
    select.value = "red";
  });

  //4 Pagal duotą figures masyvą JS kodu padarykite radio tagų rinkinį. Prie kiekvieno nurodykite jo “name”. Padarykite, kad pradžioje iš karto būtų pažymėtas radio su vardu “six”;
  //5 JS kodu sukurkite h2 tagą, kuriame atvaizduokite pažymėto radio “id”. Keičiantis pažymėjimams, turi keistis ir h2 tago turinys;
  //6 JS kodu sukurkite du h3 tagus su pradinėm tekstinėm reikšmėm “0”. Keičiantis radio pažymėjimams viename h3 tage skaičiuokite pažymėtų “id” sumą, o kitame pažymėjimo kartus;
  const h2 = document.createElement("h2");
  const radio = document.querySelector(".radio");
  const h3 = document.createElement("h3");
  const h32 = document.createElement("h3");
  h2.innerText = "6";
  h3.innerText = "0";
  h32.innerText = "0";
  let fig = "";
  let i = 0;
  let sum = 0;
  figures.forEach((figure) => {
    if (figure.name != "six") {
      fig += `<div><input type="radio" name="numbers" value=${figure.id} />${figure.name}</div>`;
    } else {
      fig += `<div><input type="radio" name="numbers" value=${figure.id} checked />${figure.name}</div>`;
    }
  });

  radio.addEventListener("change", () => {
    const radioInput = document.querySelector(
      ".radio input[type='radio']:checked"
    );
    h2.innerText = radioInput.value;
    sum += parseInt(radioInput.value);
    i++;
    h3.innerText = sum;
    h32.innerText = i;
  });
  radio.innerHTML = fig;
  radio.appendChild(h2);
  radio.appendChild(h3);
  radio.appendChild(h32);

  //7 Pagal duotą figures masyvą JS kodu padarykite checkbox tagų rinkinį.
  //Prie kiekvieno checkbox tago nupieškite nurodytą figūrą ir nuspalvinkite nurodyta spalva.
  //Padarykite, kad pradžioje iš karto būtų pažymėti checkbox su vardais “five”, “seven” ir  “nine”;
  const checkbox = document.querySelector(".checkbox");
  let check = "";
  figures.forEach((figure) => {
    if (
      figure.name != "five" &&
      figure.name != "seven" &&
      figure.name != "nine"
    ) {
      check += `<div><input type="checkbox" value=${figure.id} />${
        figure.name
      }<div style="${
        figure.figure !== "triangle"
          ? `background-color: ${figure.color};`
          : `border-color: transparent transparent ${figure.color} transparent;`
      }" class="${figure.figure}"></div></div>`;
    } else {
      check += `<div><input type="checkbox" value=${figure.id} checked />${
        figure.name
      }<div style="${
        figure.figure !== "triangle"
          ? `background-color: ${figure.color};`
          : `border-color: transparent transparent ${figure.color} transparent;`
      }" class="${figure.figure}"></div></div>`;
    }
  });
  checkbox.innerHTML = check;

  //8 Tagų checkbox apačioje JS kodu sukurkite tuščią div tagą. Padarykite taip,
  // kad pažymėjus bet kurį checkbox tame div taga atsirastų atitinkamos formos ir
  //spalvos figūra su “id” viduje. Jeigu pažymėta daugiau nei vienas checkbox, atitinkamai
  //yra daugiau figūrų. Atžymėjus bet kurį checkbox- atitinkama figūra išnyksta;
  const figuresDiv = document.createElement("div");
  checkbox.appendChild(figuresDiv);

  const createFigures = () => {
    const checkedCheckboxes = document.querySelectorAll(
      ".checkbox input[type='checkbox']:checked"
    );
    figuresDiv.innerHTML = "";

    checkedCheckboxes.forEach((checkbox) => {
      const figureId = checkbox.value;
      const figure = figures.find((f) => f.id === parseInt(figureId));
      const figureElement = document.createElement("div");
      const span = document.createElement("span");
      const spanText = document.createTextNode(figureId);
      span.appendChild(spanText);
      figureElement.appendChild(span);
      figureElement.classList.add(figure.figure);
      figureElement.style.color = "white";
      if (figure.figure === "triangle") {
        figureElement.style.borderColor = `transparent transparent ${figure.color} transparent`;
      } else {
        figureElement.style.backgroundColor = figure.color;
      }
      figureElement.setAttribute("id", figureId);
      figuresDiv.appendChild(figureElement);
    });
  };

  createFigures();
  checkbox.addEventListener("change", (e) => createFigures());
});
