function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", (_) => {
  // Part A
  // selection
  const h1 = document.querySelector("h1");
  const address = document.querySelector("#contacts");
  const addressSpan = document.querySelector("#contacts span");
  const animalTypes = document.querySelectorAll(".main");
  const like = document.querySelectorAll(".like-button");
  const snakes = document.querySelector("#gyvates li:first-child");
  const grassEaters = document.querySelectorAll("#zoliaedziai li");
  const allAnimals = document.querySelectorAll("ul li");
  const atsinaujinom = document.querySelector(".main span");
  const zirafos = document.querySelectorAll("#zirafos li");
  const i = document.querySelectorAll("i");
  const ul = document.querySelectorAll("ul");
  const price = document.querySelectorAll(".prices h2");
  const newAnimals = document.querySelectorAll("ul .new");
  const plesrunai = document.querySelector("#plesrunai li:last-child");

  // Konsolėje atspausdinti H1 tekstą;
  console.log(h1.innerText);
  // Konsolėje atspausdinti adresą;
  console.log(address.innerText);
  // Konsolėje atspausdinti i tekstą be žvaigždučių;
  i.forEach((a) => {
    if (a.innerText != "***") {
      console.log(a.innerText);
    }
  });
  //Konsolėje atspausdinti visus naujus žvėris;
  newAnimals.forEach((animal) => {
    console.log(animal.innerText);
  });
  //Konsolėje atspausdinti visus H2 tagus su žvėrių tipais (be “atsinaujinom” žodžio);
  animalTypes.forEach((animal) => {
    console.log(animal.innerText.replace(" Atsinaujinom", ""));
  });
  //Konsolėje atspausdinti kiek yra žirafų (ne žirafas bet kiek jų yra);
  console.log(zirafos.length - 1); // remove like tag
  // Konsolėje atspausdinti visas naujas žirafas;
  zirafos.forEach((animal) => {
    if (animal.className == "new") {
      console.log(animal.innerText);
    }
  });
  //Konsolėje atspausdinti kiek yra gyvūnų rūšių (ne rūšis bet kiek jų yra);
  console.log(animalTypes.length);
  //Suraskite kokia gyvūnų rūšis turi daugiausiai gyvūnų;
  let maxSpecies = "";
  let maxCount = 0;
  ul.forEach((animal) => {
    const species = animal.previousElementSibling.textContent.trim();
    const count = animal.children.length - 1; // Exclude the like-button
    if (count > maxCount) {
      maxCount = count;
      maxSpecies = species;
    }
  });

  console.log(maxSpecies);
  //Suraskite mažiausią kainą;
  let minPrice = Infinity;

  price.forEach((priceElement) => {
    const price = parseInt(priceElement.textContent.match(/\d+/)[0]);
    if (price < minPrice) {
      minPrice = price;
    }
  });
  console.log(minPrice);

  //Part B
  //“Zoo sodas” pakeiskite į “Zoo parkas”;
  h1.innerText = "Zoo parkas";
  //“***” pakeiskite į “*****”;
  i.forEach((e) => {
    if (e.innerText == "***") {
      e.innerText = "*****";
    }
  });
  //Pridėkite naują žvėrį “Leopardas” į plėšrūnų sekcijos pabaigą;
  plesrunai.insertAdjacentHTML("afterend", "<li>Leopardas</li>");
  //Pridėkite naują žvėrį “Jūrų sliekas” į gyvačių sekcijos pradžią;
  snakes.insertAdjacentHTML("afterend", "<li>Jūrų sliekas</li>");
  //Pridėkite “Atsinaujinom” span tage prie žoliaėdžių;
  animalTypes.forEach((animal) => {
    if (animal.innerText == "Žoliaėdžiai") {
      animal.innerHTML += "<span> Atsinaujinom</span>";
    }
  });
  //Ištrinkite “Atsinaujinom” span tage iš gyvačių;
  atsinaujinom.remove();
  //Ištrinkite “Laukinę kiaulę”;
  grassEaters.forEach((animal) => {
    if (animal.innerText == "Laukinė kiaulė") {
      animal.remove();
    }
  });
  //Apačioje h2 tago “Plėšrūnai” pridėkite h3 tagą “Neglostyti!”;
  animalTypes.forEach((animal) => {
    if (animal.innerText == "Plėšrūnai") {
      animal.insertAdjacentHTML("afterend", "<h3>Neglostyti!</h3");
    }
  });
  //Pridėkite naują kainą “Studentas 3eur” po tago “Vaikas: 2eur”;
  price.forEach((price) => {
    if (price.innerText == "Vaikas: 2eur") {
      price.insertAdjacentHTML("afterend", "<h2>Studentas: 3eur</h2>");
    }
  });
  //Išrūšiuokita “Plėšrūnus pagal abėcėlę”;
  const plesrunai2 = document.querySelectorAll("#plesrunai li");

  // Convert NodeList to array for sorting
  const sortedPlesrunai = Array.from(plesrunai2)
    .slice(1) // Exclude the like-button
    .sort((a, b) => a.textContent.localeCompare(b.textContent));

  // Clear the existing list
  document.querySelector("#plesrunai").innerHTML = "";

  // Append sorted elements back to the list
  sortedPlesrunai.forEach((li) =>
    document.querySelector("#plesrunai").appendChild(li)
  );

  //Part C
  const allAnimals2 = document.querySelectorAll("ul li");
  //Nuspalvinkite H1 tagą raudonai;
  h1.style.color = "darkred";
  //Kontaktus nuspalvinkite pilkai, o adresą span tage palikite juodą;
  address.style.color = "grey";
  addressSpan.style.color = "black";
  //Žvėrių tipų H2 tagus nuspalvinkite mėlynai;
  animalTypes.forEach((a) => {
    a.style.color = "skyblue";
  });
  // “PATINKA” mygtuką apibrėžkite rėmeliu;
  like.forEach((a) => {
    a.style.border = "1px solid skyblue";
    a.style.width = "80px";
    a.style.padding = "10px 5px";
  });
  //Nuspalvinkite visus naujus žvėris geltona spalva su pilku fonu;
  for (let i = 0; i < newAnimals.length; i++) {
    newAnimals[i].style.color = "yellow";
    newAnimals[i].style.backgroundColor = "grey";
    newAnimals[i].style.marginBottom = "10px";
  }
  // Naudodami stiliaus savybes paslėpkite “Zuikis” li tagą;
  grassEaters.forEach((animal) => {
    if (animal.innerText == "Zuikis") {
      animal.style.display = "none";
    }
  });
  // Panaikinkite sąrašuose “rutuliukus” prieš žvėries pavadinimą;
  // Padidinkite tarpus tarp žvėrių;

  allAnimals2.forEach((animal) => {
    if (animal.innerText != "PATINKA") {
      animal.style.listStyleType = "none";
      animal.style.padding = "10px 0";
    }
  });
  // Tagus span “Atsinaujinom” nuspalvinkite raudonai;
  // Tagus span “Atsinaujinom” padarykite mirksinčius (pasinaudokite setInterval);
  const atsinaujinom2 = document.querySelector(".main span");
  atsinaujinom2.style.color = "crimson";

  setInterval(() => {
    atsinaujinom2.style.color =
      atsinaujinom2.style.color == "crimson" ? "green" : "crimson";
  }, 1000);
});
