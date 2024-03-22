//Arrays
function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//1: Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.
//2: Naudodamiesi 1 uždavinio masyvu:
//+Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;
//+Raskite didžiausią masyvo reikšmę ir jos indeksą;
//+Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;
//+Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;
//+Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;
//+Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indeksų reikšmių,
//+o kitas iš porinių (pagal neporinį-porinį indeksą, ne reikšmę);
//+Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;
//+Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;
let arr = [];
let arr2 = [];
let arrEven = [];
let arrOdd = [];
let biggerThenTen = 0;
let evenSum = 0;
for (let i = 0; i <= 29; i++) {
  let number = rand(5, 25);
  arr.push(number);
  arr2.push(number - i);
  if (arr[i] > 10) {
    biggerThenTen++;
  }
  if (i % 2 === 0) {
    evenSum += arr[i];
    arrEven.push(arr2[i]);
    if (arr[i] > 15) {
      arr[i] = 0;
    }
  } else {
    arrOdd.push(arr2[i]);
  }
}

for (let i = 0; i < 10; i++) {
  let number = rand(5, 25);
  arr2.push(number);
}

console.log(arr);
console.log("Bigger than 10 : " + biggerThenTen);
console.log(
  "Biggest number : " +
    Math.max(...arr) +
    " index: " +
    arr.indexOf(Math.max(...arr))
);
console.log("Even numbers sum: " + evenSum);
console.log(arr2);
console.log(arrEven);
console.log(arrOdd);
console.log(arr.findIndex((e) => e > 10));

console.clear();

//3: Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.

let arr3 = [];
let randomLetters = ["A", "B", "C", "D"];
let A = 0;
let B = 0;
let C = 0;
let D = 0;
for (let i = 0; i < 200; i++) {
  arr3.push(randomLetters[Math.floor(Math.random() * randomLetters.length)]);
  if (arr3[i] === "A") {
    A++;
  } else if (arr3[i] === "B") {
    B++;
  } else if (arr3[i] === "C") {
    C++;
  } else {
    D++;
  }
}

console.log(arr3);
console.log("A - " + A);
console.log("B - " + B);
console.log("C - " + C);
console.log("D - " + D);

console.clear();

//4: Sugeneruokite 3 masyvus pagal 3 uždavinio sąlygą. Sudėkite masyvus, sudėdami atitinkamas reikšmes.
// Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.

let arr4a = Array.from(
  { length: 200 },
  () => randomLetters[Math.floor(Math.random() * randomLetters.length)]
);

let arr4b = Array.from(
  { length: 200 },
  () => randomLetters[Math.floor(Math.random() * randomLetters.length)]
);
let arr4c = Array.from(
  { length: 200 },
  () => randomLetters[Math.floor(Math.random() * randomLetters.length)]
);

let bigArr = [];
let unique = new Set();

for (let i = 0; i < 200; i++) {
  bigArr.push(arr4a[i] + arr4b[i] + arr4c[i]);
}

for (let i = 0; i < bigArr.length; i++) {
  unique.add(bigArr[i]);
}

console.log(arr4a);
console.log(arr4b);
console.log(arr4c);
console.log(bigArr);
console.log(unique.size);
console.log(bigArr.length - unique.size);

console.clear();

//5 Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999.
//Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).

let arr5a = [];
let arr5b = [];

while (arr5a.length < 100) {
  let number = rand(100, 999);
  if (!arr5a.includes(number)) {
    arr5a.push(number);
  }
}
while (arr5b.length < 100) {
  let number = rand(100, 999);
  if (!arr5b.includes(number)) {
    arr5b.push(number);
  }
}

console.log("Task 5");
console.log(arr5a);
console.log(arr5b);

//6: Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 5 uždavinio masyve, bet nėra antrame 5 uždavinio masyve.
let arr6 = [];

for (let i = 0; i < arr5a.length; i++) {
  if (!arr5b.includes(arr5a[i])) {
    arr6.push(arr5a[i]);
  }
}
console.log("Task 6");
console.log(arr6);

//7: Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 5 uždavinio masyvuose.
let arr7 = [];

for (let i = 0; i < arr5a.length; i++) {
  if (arr5b.includes(arr5a[i])) {
    arr7.push(arr5a[i]);
  }
}
console.log("Task 7");
console.log(arr7);

//8: Sugeneruokite masyvą, kurio indeksus sudarytų 5 uždavinio pirmo masyvo reikšmės, o jo reikšmės  būtų iš  antrojo 5 uždavinio masyvo.
// ????
let arr8 = [];
console.log("Task 8");
console.log(arr8);
//9: Sugeneruokite 10 skaičių masyvą pagal taisyklę: Du pirmi skaičiai- atsitiktiniai nuo 5 iki 25.
// Trečias, pirmo ir antro suma. Ketvirtas- antro ir trečio suma. Penktas trečio ir ketvirto suma ir t.t.
let arr9 = [];
for (let i = 0; i < 10; i++) {
  let number = rand(5, 25);
  if (i > 1) {
    arr9.push(arr9[i - 2] + arr9[i - 1]);
  } else {
    arr9.push(number);
  }
}
console.log("Task 9");
console.log(arr9);
