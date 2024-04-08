console.log("hello");
const digitsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const r = digitsArray.reduce((a, c) => a + c, 0);
console.log(r);
console.clear();
const catsAndOwners = [
  { cat: "Fluffy", owner: "Jonas", color: "white" },
  { cat: "Garfield", owner: "Petras", color: "orange" },
  { cat: "Marmaduke", owner: "Ona", color: "black" },
  { cat: "Tom", owner: "Agota", color: "grey" },
  { cat: "Jerry", owner: "Asta", color: "grey" },
  { cat: "Sylvester", owner: "Vytas", color: "black" },
];

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// 1. atspausdinti visus šeimininkus

catsAndOwners.forEach((e) => {
  console.log(e.owner);
});

// 2. išrinkti visus pilkus katinus

const fitered = catsAndOwners.filter((a) => a.color == "grey");

console.log(fitered);

// 4. prie visų kačių pridėti savybę "age" su atsitiktine reikšme nuo 1 iki 18

const catsWithAge = catsAndOwners.map((cat) => ({
  ...cat,
  age: rand(1, 18),
}));

console.log(catsAndOwners);
console.log(catsWithAge);

// 3. paseno visus kačiukus vienais metais

const one = catsWithAge.map((cat) => ({
  ...cat,
  age: cat.age + 1,
}));

console.log(one);

// 5. išrūšiuoti kačiukus pagal amžių nuo jauniausio iki vyriausio naujame masyve

const sortedCats = catsWithAge.toSorted((a, b) => {
  if (a.age > b.age) {
    return 1;
  }
  if (a.age < b.age) {
    return -1;
  }
  return 0;
});

console.table(sortedCats);
