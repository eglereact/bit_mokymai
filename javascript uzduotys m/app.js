function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//1. Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus (Jonas Jonaitis). Atspausdinti trumpesnį stringą.
const firstName = "Tom";
const lastName = "Hiddleston";
console.log(firstName);
console.clear();

//2. Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus).
//Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
//"Aš esu Vardenis Pavardenis. Man yra XX metai(ų)".
const myName = "Sara";
const mySurname = "Lee";
const myBirthYear = 1999;
const thisYear = 2024;

console.log(
  `Aš esu ${myName} ${mySurname}. Man yra ${thisYear - myBirthYear} metai(ų)`
);
console.clear();

//3. Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus.
// Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.
const firstName2 = "Leonardo";
const lastName2 = "Dicaprio";
const newName = firstName2.slice(-3) + lastName2.slice(-3);
console.log(newName);
console.clear();

//4. Sukurti kintamąjį su stringu: “Once upon a time in hollywood”. Jame visas “o” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  Rezultatą atspausdinti.
const story = "Once upon a time in hollywood";

console.log(story.toLowerCase().replaceAll("o", "*"));
console.log(story.replace(/[oO]/g, "*"));
console.clear();

//5. Sukurkite keturis kintamuosius kuriems sugeneruokite atsitiktines reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
let zero = 0;
let one = 0;
let two = 0;

for (let i = 0; i < 4; i++) {
  let number = rand(0, 2);
  if (number === 0) {
    zero++;
  } else if (number === 1) {
    one++;
  } else {
    two++;
  }
  console.log(number);
}

console.log(`0: ${zero}, 1: ${one}, 2: ${two}`);
console.clear();

//6. Pasinaudokite atsitiktinio skaičiaus generavimo funkcija.
// Sukurkite du kintamuosius ir naudodamiesi funkcija jiems priskirkite atsitiktines reikšmes nuo 0 iki 4.
// Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.

const number = rand(0, 4);
const number2 = rand(0, 4);

if (number > number2) {
  console.log(`${number} / ${number2} = ${(number / number2).toFixed(2)}`);
} else {
  console.log(`${number2} / ${number} = ${(number2 / number).toFixed(2)}`);
}
console.clear();

//7. Naudokite funkciją ir sukurkite tris kintamuosius kuriems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite vidurinę reikšmę.

const number3 = rand(0, 25);
const number4 = rand(0, 25);
const number5 = rand(0, 25);

console.log(number3, number4, number5);
console.log(
  number3 +
    number4 +
    number5 -
    Math.max(number3, number4, number5) -
    Math.min(number3, number4, number5)
);
console.clear();

//8. Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus.
//Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš pirmų vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.

const actorsName = "Christian";
const actorsSurname = "Bale";
const newName2 = actorsName.charAt(0) + actorsSurname.charAt(0);
console.log(newName2);
console.clear();

//9 Parašyti kodą, kuris generuotų atsitiktinį stringą iš lotyniškų mažųjų raidžių. Stringo ilgis 3 simboliai.
const abc = "abcdefghijklmnopqrstuvwxyz";
let str = "";

for (let i = 0; i < 3; i++) {
  str += abc.charAt(rand(0, abc.length));
}

console.log(str);
console.clear();

/// MASYVAI

//Sukurti masyvą: Sukurkite masyvą, kuriame būtų penki skirtingi skaičiai.

const arr = [5, 4, 6, 8, 7];

//Pridėti elementą: Pridėkite naują skaičių prie sukurtos masyvo.

arr.push(10);

//Išimti elementą: Pašalinkite vieną iš masyvo elementų.

arr.shift();

//Surasti indeksą: Suraskite indeksą, kuriame yra tam tikras skaičius iš jūsų masyvo

const indexOfSix = arr.indexOf(6);
console.log("Index of 6: " + indexOfSix);

//Masyvo ilgis: Panaudokite masyvo ilgio metodą ir išspausdinkite masyvo ilgį.
console.log("Array length: " + arr.length);

//Sukurti naują masyvą: Sukurkite naują masyvą, kuriame būtų elementai iš jūsų pirmojo masyvo, bet atvirkščia tvarka.

const newArr = [];

for (let i = arr.length - 1; i >= 0; i--) {
  newArr.push(arr[i]);
}

console.log(arr);
console.log(newArr);

//Rikiavimas: Surikiuokite savo masyvą didėjančia tvarka.
const sorted = arr.sort((a, b) => a - b);
console.log(`Sorted array (min-max): ${sorted}`);

//Filtravimas: Sukurkite naują masyvą, kuriame būtų tik lyginiai skaičiai iš jūsų pradinio masyvo.

const filtered = arr.filter((a) => a % 2 === 0);

console.log(`Filtered array (only even): ${filtered}`);

//Apjungimas: Apjunkite du masyvus į vieną.

const joinedArr = arr.concat(newArr);

console.log(`Joined array: ${joinedArr}`);

//Elemento pakartojimas: Pakartokite kiekvieną masyvo elementą tris kartus ir saugokite rezultatą naujame masyve.

const tripleArrVal = [];

for (let i = 0; i < joinedArr.length; i++) {
  for (let j = 0; j < 3; j++) {
    tripleArrVal.push(joinedArr[i]);
  }
}

console.log(tripleArrVal);

//Maksimalus skaičius: Raskite didžiausią skaičių savo masyve.

const max = Math.max(...tripleArrVal);

console.log(`Max: ${max}`);

//Minimalus skaičius: Raskite mažiausią skaičių savo masyve.

const min = Math.min(...tripleArrVal);

console.log(`Min: ${min}`);

//Unikalūs elementai: Sukurkite masyvą su unikaliais elementais (pašalinkite dublikatus).

const uniq = new Set(tripleArrVal);
const uniq2 = [];

for (let i = 0; i < tripleArrVal.length; i++) {
  if (!uniq2.includes(tripleArrVal[i])) {
    uniq2.push(tripleArrVal[i]);
  }
}

console.log(uniq);
console.log(uniq2);

//Skaičių suma: Susumuokite visus skaičius savo masyve.

let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log(`Sum of 1st array: ${sum}`);

//Vidurkis: Apskaičiuokite vidurkį iš savo masyvo skaičių.

let avg = sum / arr.length;

console.log(`Average: ${avg}`);

//Skaičių kvadratai: Sukurkite naują masyvą, kuriame būtų visi jūsų pradinio masyvo skaičių kvadratai.

const arrSquare = [];

for (let i = 0; i < arr.length; i++) {
  arrSquare.push(arr[i] * arr[i]);
}

console.log(`Array double: ${arrSquare}`);

//Elemento paieška: Patikrinkite, ar tam tikras skaičius yra jūsų masyve.

let exist = arr.includes(4);

console.log(`Includes 4: ${exist}`);

//Pridėti prie kiekvieno elemento: Prie kiekvieno masyvo elemento pridėkite skaičių 5.

const plusFive = [];

for (let i = 0; i < arr.length; i++) {
  plusFive.push(arr[i] + 5);
}

console.log(`Array +5 : ${plusFive}`);

//Atvirkštinis rikiavimas: Surikiuokite savo masyvą mažėjančia tvarka.
const sortedOp = arr.sort((a, b) => b - a);
console.log(`Sorted array (max-min): ${sortedOp}`);

//Skaičių poros: Sukurkite masyvą, kuriame būtų visos galimos skaičių poros iš jūsų pradinio masyvo.

const pairsArr = [];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    pairsArr.push([arr[i], arr[j]]);
  }
}

console.log(pairsArr);
console.clear();

const movieTheaterSeats = [
  ["Jonas", "Petras", "Tomas"],
  ["Kazys", "Rimas", "Antanas"],
  ["Simas", null, "Lina"],
  ["Radvilė", "Kęstas", "Lidija"],
  ["Laurynas", "Kostas", "Alma"],
];
// Duota movieTheaterSeats masyvas
// Užduotis: Pakeiskite null savo vardu naudodami masyvo indeksus
// Pasitikrinkite konsolėje ar teisingai
//papildoma užduotis: Ištraukite konolėje vardus: Tomas, Kazys,Kęstas, Laurynas
//įterpkite į jų vardus kitus jūsų sugalvotus.

for (let i = 0; i < movieTheaterSeats.length; i++) {
  for (let j = 0; j < movieTheaterSeats[i].length; j++) {
    if (movieTheaterSeats[i][j] === null) {
      movieTheaterSeats[i][j] = "Egle";
    }
    if (movieTheaterSeats[i][j] === "Tomas") {
      movieTheaterSeats[i][j] = "Markas";
    }
    if (movieTheaterSeats[i][j] === "Kazys") {
      movieTheaterSeats[i][j] = "Stasys";
    }
    if (movieTheaterSeats[i][j] === "Kęstas") {
      movieTheaterSeats[i][j] = "Gediminas";
    }
    if (movieTheaterSeats[i][j] === "Laurynas") {
      movieTheaterSeats[i][j] = "Martynas";
    }
  }
}

console.log(movieTheaterSeats.flat());
console.clear();

//FUNKCIJOS
//1.Sukurkite funkciją kuri priimtų parametrą "name". Jos tikslas atspausdinti naršyklėje tekstą "Labas," ir šalia jo perduotą vardą. Pvz "Labas, Elena".

const greeting = (name) => console.log(`Labas, ${name}`);

greeting("Elena");

//2. Sukurkite funkciją  kuri priimtų vieną parametrą (tekstą) ir grąžintų atsakymą kiek simbolių yra tame tekste.
// Iš funkcijos gautą rezultatą atvaizduokite naršyklėje.

const symbolsCounter = (text) => {
  return text.length;
};

console.log(symbolsCounter("Hello"));
console.log(symbolsCounter("Hello World"));
console.log(
  symbolsCounter("Iš funkcijos gautą rezultatą atvaizduokite naršyklėje")
);

//3.Sukurkite funkciją kuri priimtų du parametrus "name" ir "last_name".
//Funkcija turi grąžinti vieną stringą, kuriame būtų vardas ir pavardė prasidedantys didžiosiomis raidėmis.

const fullName = (name, last_name) => {
  const newName = name[0].toUpperCase() + name.slice(1);
  const newLastName = last_name[0].toUpperCase() + last_name.slice(1);
  return `${newName} ${newLastName}`;
};

console.log(fullName("will", "smith"));

//4 Parašykite funkciją kuri sugeneruotų 3 random skaičius nuo 0 iki 5 ir atspausdintų konsolėje vienoje eilutėje atskirtus kableliais.
// Po paskutinio skaičiaus kablelio neturi būti.

const numbers = () => {
  const arr = [];
  for (let i = 0; i < 3; i++) {
    let number = rand(0, 5);
    arr.push(number);
  }
  return arr.join(",");
};

console.log(numbers());

//5 Parašykite funkciją kuri priimtų tris parametrus "from" ir "to" ir "limit".
// Patikrinkite ar šie perduodami parametrai yra skaičiai ir pagal juos sugeneruokite masyvą,
// kurio ilgį nusako "limit" parametras, o reikšmės from ir to nurodo atsitiktinį skaičių šiuose rėžiuose.

const newArray = (from, to, limit) => {
  const arr = [];
  for (let i = 0; i < limit; i++) {
    if (
      typeof from != "number" ||
      typeof to != "number" ||
      typeof limit != "number"
    ) {
      return [];
    }
    arr.push(rand(from, to));
  }
  return arr;
};
console.log(newArray(1, 5, 10));

//6. Sukurkite funkciją kuri pakeltų paduotą skaičių n laipsniu, ir grąžintų reikšmę (perduodami du parametrai: skaičius ir laipsnis)

const numberN = (number, n) => {
  return Math.pow(number, n);
};

console.log(numberN(2, 2));
console.log(numberN(3, 3));

//7. Parašykite funkciją, kurios parametras būtų tekstas, kuris yra įterpiamas į h1 tagą. Rezultatą atvaizduokite naršyklėje.

const header = (text) => {
  const h1 = document.createElement("h1");
  h1.textContent = text;
  document.body.appendChild(h1);
};

header("Hello hello hello!");

//8. Parašykite funkciją su dviem parametrais. Pirmasis yra tekstas, įterpiamas į h tagą, o antrasis tago numeris (1-6).
// Rašydami šią funkciją remkitės antrame uždavinyje parašyta funkcija.

const header2 = (text, number) => {
  const h1 = document.createElement(`h${number}`);
  h1.textContent = text;
  document.body.appendChild(h1);
};

header2("Hello", 6);
header2("Hello you", 4);

//9. Aprašykite funkciją kuri priimtų vieną parametrą "number" bei patikrintų ar duotas skaičius yra pirminis.
// Atgal grąžinkite teigiamą arba neigiamą (boolean) atsakymą.

const isPrime = (number) => {
  if (number > 1) {
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  }
  return true;
};

console.log(isPrime(17));
console.log(isPrime(10));

//10. Sugeneruokite 100 elementų masyvą kurio reikšmės atsitiktiniai skaičiai nuo 997 iki 15991.

const bigArr = [];

for (let i = 0; i < 100; i++) {
  bigArr.push(rand(997, 15991));
}

console.log(bigArr);

//11. Pasinaudodami devintoje užduotyje aprašyta funkcija masyve palikite tik pirminius skaičius, kurie yra didesni nei 5000;

const onlyPrimeArr = [];

for (let i = 0; i < bigArr.length; i++) {
  if (bigArr[i] > 5000 && isPrime(bigArr[i])) {
    onlyPrimeArr.push(bigArr[i]);
  }
}

console.log(onlyPrimeArr);
