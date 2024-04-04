const animals = [
  "cat",
  "dog",
  "elephant",
  "bee",
  "ant",
  "whale",
  "lion",
  "tiger",
  "bear",
  "snake",
  "shark",
  "penguin",
  "parrot",
  "pigeon",
  "eagle",
  "sparrow",
  "owl",
  "seagull",
  "woodpecker",
  "flamingo",
  "peacock",
  "swan",
  "duck",
  "goose",
  "pelican",
  "stork",
  "crane",
  "heron",
  "robin",
  "nightingale",
  "crow",
  "raven",
  "magpie",
  "chickadee",
];

animals.forEach((animal) => console.log(animal));

const newAnimals = animals.map((animal) => animal.toUpperCase());

// 1. Sukurkite masyvą smallAnimals, kuriame visis didesni nei 5 raidės gyvūnai būtų pakeisti į "big".

// const smallAnimals = animals.map((animal) => {
//   if (animal.length > 5) {
//     return (animal = "big");
//   }
//     return animal;
// });

const smallAnimals = animals.map((animal) =>
  animal.length > 5 ? "big" : animal
);

console.log(smallAnimals);
console.clear();

// 2. Sukurti masyvą bigAnimals, kuriame visi gyvūnai su 3 raidėm yra prailginti 5 "*".

const bigAnimals = animals.map((animal) =>
  animal.length === 3 ? `${animal}*****` : animal
);

console.log(bigAnimals);

// 3. Sukurkite masyvą animalsStartingWithS, kuriame būtų tik gyvūnai prasidedantys raide "s".

const animalsStartingWithS = animals.filter(
  (animal) => animal.charAt(0) == "s"
);

console.log(animalsStartingWithS);

// 4. Sukurkite masyvą animalsWithoutTigers, kuriame nebutų gyvūno "tiger".

const animalsWithoutTigers = animals.filter((animal) => animal != "tiger");

console.log(animalsWithoutTigers);

const digits = [1, 5, 7, 3, 9, 2, 4, 6, 8];
animals.sort((a, b) => {
  if (a > b) {
    return 1;
  }
  if (b > a) {
    return -1;
  }
  return 0;
});

console.log(animals);

// 5. Išrūšiuokite masyvą animals pagal gyvulio ilgį - ilgiausi pradžioje.

const sorted = animals.sort((a, b) => b.length - a.length);

console.log(sorted);
console.clear();
// 6. Išrūšiuokite masyvą animals pagal abėcėlę, naudodami antrą žodžio raidę.

const sortedBySecondLetter = animals.sort((a, b) => {
  const x = a.charAt(1);
  const y = b.charAt(1);
  if (x > y) {
    return 1;
  }
  if (y > x) {
    return -1;
  }
  return 0;
});

console.log(sortedBySecondLetter);
