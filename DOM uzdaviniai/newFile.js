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
      } <div style=${
        figure.figure != "triangle"
          ? `background-color: ${figure.color}`
          : `border-color: "transparent transparent ${figure.color} transparent"`
      } class=${figure.figure}></div></div>`;
    } else {
      check += `<div><input type="checkbox" value=${figure.id} checked />${figure.name}<div style="background-color: ${figure.color}" class=${figure.figure}></div></div>`;
    }
  });
  checkbox.innerHTML = check;
});
