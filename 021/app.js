const animals = ["cat", "dog", "elephant", "horse", "rabbit"];

// 1. Parašyti funkciją, kuris suskaičiuoja kiek elementų yra masyve
const arrLength = (arr) => {
  return arr.length;
};
console.log(arrLength(animals));

// 2. Parašyti funkciją, kuri priima masyvą ir grąžina pirmą elementą

const returnFirstElement = (arr) => {
  return arr[0];
};

console.log(returnFirstElement(animals));

// 3. Parašyti funkciją, kuri priima masyvą ir grąžina paskutinį elementą

const returnLastElement = (arr) => {
  return arr[arr.length - 1];
};

console.log(returnLastElement(animals));

// 4. Parašyti funkciją, kuri priima masyvą ir grąžina vidurinį elementą (elementų kiekis visada nelyginis skaičius)

const returnMiddleElement = (arr) => {
  const middle = Math.floor(arr.length / 2);
  return arr[middle];
};

console.log(returnMiddleElement(animals));

// 5. Parašyti funkciją, kuri priima stringą ir grąžina stringo ilgį

const lengthOfString = (str) => str.length;

console.log(lengthOfString("helloo"));

// 6. Parašyti funkciją, kuri priima masyvą ir paskaičiuoja kiek raidžių yra visuose masyvo elementuose. Naudojant 5 užduoties funkciją.

const strLengthInArr = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += lengthOfString(arr[i]);
  }
  return sum;
};

console.log(strLengthInArr(animals));

// 7. Atspausdinti pirmas gyvūnų raides naudojant forEach metodą

animals.forEach((text) => console.log(text.charAt(0)));

// 8. Suskaičiuoti raidžių kiekį visuose gyvūnuose naudojant forEach metodą
let sum = 0;
animals.forEach((text) => {
  sum += text.length;
});
console.log(sum);
console.clear();
// 9. Atspausdinti gyvūnus kurių ilgis yra daugiau nei 4 naudojant forEach metodą

animals.forEach((animal) => {
  if (animal.length > 4) {
    console.log(animal);
  }
});
