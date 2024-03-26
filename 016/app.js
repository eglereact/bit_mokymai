function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const animals = ["Kiškis", "Lapė", "Barsukas", "Vilkas", "Laukinis katinas"];

animals.push("Lūšis");

// Atspausti visus animals masyvo elementus
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

// Atspausti porinių indeksų animals masyvo elementus
for (let i = 0; i < animals.length; i++) {
  if (i % 2 === 0) {
    console.log(animals[i]);
  }
}

console.clear();
// Atspausti gyvūnus, kurių pavadinimas ilgesnis nei 6 raidės iš animals masyvo

for (let i = 0; i < animals.length; i++) {
  if (animals[i].length > 6) {
    console.log(animals[i]);
  }
}

for (let i = 0; i < animals.length; i++) {
  animals[i].length > 6 && console.log(animals[i]);
}
console.clear();
// Sukurti masyvą su 5 atsitiktiniais skaičiais nuo 1 iki 10
// suskaičiuoti penketus

let newArr = [];
let penketas = 0;

for (let i = 0; i < 5; i++) {
  let number = rand(1, 10);
  if (number === 5) {
    penketas++;
  }
  newArr.push(number);
}

console.log(newArr);
console.log(penketas);
console.clear();

let arr = [1, 4, 5, 7, 8, 10];
let arr2 = [2, 46, 75, 22, 11, 99];
//let max = Math.max(...arr);

const arrBig = [];
for (let i = 0; i < arr.length; i++) {
  arrBig[arr[i]] = arr2[i];
}

// console.log(Math.max(...arr));
console.log(arr);
console.log(arr2);
console.log(arrBig);
