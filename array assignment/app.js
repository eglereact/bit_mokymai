function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const bitGirls = ["Edita", "Lina", "Brigita", "Deimantė", "Justė"];
const cats = ["Murka", "Rainius", "Meilutė", "Bosas", "Dičkis"];

//1 Prie masyvo bitGirls pradžios (ne galo!) pridėkite Nausėdą (po pridėjimo bitGirls turės 6 elementus).

bitGirls.unshift("Nausėda");
console.log(bitGirls);
console.clear();
//2 Sukurkite naują masyvą bitCats Pagridu paimkite masyvą cats.
// Naujasis masyvas turėtų turėti elementus iš mažų, dviejų narių,
//masyviukų: pirmas narys katinuko vardas, antras - katinuko svoris - atsitiktinės tekstinės reikšmės - “storas” arba “normalus”.

const bitCats = [];
cats.forEach((cat) => {
  const svoris = rand(0, 1) ? "storas" : "normalus";
  bitCats.push([cat, svoris]);
});

//3 bitCats masyve suskaičiuokite kiek yra storų ir normalių katinukų.

let storas = 0;
let normalus = 0;

bitCats.forEach((cat) => {
  if (cat[1] === "storas") {
    storas++;
  } else {
    normalus++;
  }
});

console.log(bitCats);
console.log("Stori " + storas);
console.log("Normalūs " + normalus);

//4 Išrūšiuokite gautą bitsCats masyvą pagal antrą katinuko vardo raidę,
//abėcėlės tvarka (ne pagal visą vardą, o tik pagal antrą raidę) Tokiu būdu katinukas vardu Rainius pagal antrą “a” raidę turėtų atsidurti viršuje.

bitCats.sort((a, b) => {
  const secondLetterA = a[0][1].toLowerCase();
  const secondLetterB = b[0][1].toLowerCase();
  if (secondLetterA < secondLetterB) {
    return -1;
  }
  if (secondLetterA > secondLetterB) {
    return 1;
  }
  return 0;
});

console.log(bitCats);

//5 (BOSO lygis) Iš masyvų bitGirls ir bitCats padarykite masyvą happyCats, kurio elementai būtų masyvai iš mergaitės vardo ir katinuko vardo.
// Nausėdai katinuko neduokit (nes neužteks) ir vietoj katinuko Nausėdai priskirkite stringą “Barsukas”.

const happyCats = [];

for (let i = 0; i < bitGirls.length; i++) {
  if (bitGirls[i] === "Nausėda") {
    happyCats.push([bitGirls[i], "Barsukas"]);
  } else {
    happyCats.push([bitGirls[i], bitCats[i - 1][0]]);
  }
}

console.log(happyCats);
