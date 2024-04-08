// Sunkesni.
const E = [
  ["time", "love", "government"],
  ["year"],
  ["time", "friend", "child", "money"],
  ["air"],
  ["world", "music"],
  ["phone", "job", "hope", "car"],
  ["day"],
  ["house", "thing", "future"],
  ["family", "man", "life", "life"],
  ["way", "moon", "history", "tree"],
  ["cat", "book", "science", "internet"],
  ["food", "people", "art", "country"],
  ["internet", "friend", "house", "job"],
  ["money", "government", "antiquity", "time"],
  ["love", "cat", "family", "friend"],
  ["future", "year", "time", "life"],
  ["sun"],
  ["school"],
  ["health", "mountain"],
  ["city"],
  ["water", "star"],
  ["flower", "earth", "fire"],
  ["star"],
  ["river", "art", "fire"],
  ["woman", "earth", "flower", "computer"],
  ["water", "technology", "dream"],
];

//1 Masyve E surasti visus žodžius, kurie pasibaigia “r” raide,
//ieškant tik tokiuose sub masyvuose, kurie yra trumpesni nei 3. Surastus žodžius sudėti į atskirą masyvą;

let endsWithR = [];

for (let i = 0; i < E.length; i++) {
  for (let j = 0; j < E[i].length; j++) {
    if (E[i].length < 3 && E[i][j].endsWith("r")) {
      endsWithR.push(E[i][j]);
    }
  }
}

let endsWithR2 = [];

E.forEach((arr) => {
  arr.forEach((str) => {
    if (arr.length < 3 && str.endsWith("r")) {
      endsWithR2.push(str);
    }
  });
});

console.log("Words ends with r ", endsWithR, endsWithR2);

//2 Masyve E surasti visus žodžius, kurie prasideda “a” raide,
//ieškant tik tokiuose sub masyvuose, kurie yra ilgesni nei 2. Surastus žodžius sudėti į atskirą masyvą;

let startsWithA = [];

for (let i = 0; i < E.length; i++) {
  for (let j = 0; j < E[i].length; j++) {
    if (E[i].length > 2 && E[i][j].charAt(0) == "a") {
      startsWithA.push(E[i][j]);
    }
  }
}

let startsWithA2 = [];

E.forEach((arr) => {
  arr.forEach((str) => {
    if (arr.length > 2 && str.charAt(0) == "a") {
      startsWithA2.push(str);
    }
  });
});

console.log("Starts with a ", startsWithA, startsWithA2);

//3 Masyve E surasti visus žodžius, kurie pasikartoja daugiau nei 1 kartą ir sudėti juos į atskirą masyvą;

const duplicates = E.flat().filter(
  (word, index) => E.flat().indexOf(word) !== index
);

console.log("Repeats more than two times ", duplicates);
