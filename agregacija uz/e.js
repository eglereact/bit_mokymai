//E. Dvimatis masyvas su stringais.

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

//1 Suskaičiuoti bendrą stringų ilgį;
let arrLength = 0;

for (let i = 0; i < E.length; i++) {
  arrLength += E[i].length;
}
let arrLength2 = 0;
E.forEach((arr) => {
  arrLength2 += arr.length;
});
console.log("All array length ", arrLength, arrLength2); // 72

//2 Suskaičiuoti bendrą stringų ilgį, ieškant tik tokiuose sub masyvuose, kurie yra ilgesni nei 2;
let arrLengthLongerThanTwo = 0;

for (let i = 0; i < E.length; i++) {
  if (E[i].length > 2) {
    arrLengthLongerThanTwo += E[i].length;
  }
}
let arrLengthLongerThanTwo2 = 0;
E.forEach((arr) => {
  if (arr.length > 2) {
    arrLengthLongerThanTwo2 += arr.length;
  }
});

console.log(
  "All array length longer than two",
  arrLengthLongerThanTwo,
  arrLengthLongerThanTwo2
); // 59

//3 Suskaičiuoti bendrą, ilgesnių nei 6, stringų ilgį,
//ieškant tik tokiuose sub masyvuose, kurie yra ilgesni nei 2;

let longerThanSixLetters = 0;

for (let i = 0; i < E.length; i++) {
  for (let j = 0; j < E[i].length; j++) {
    if (E[i].length > 2 && E[i][j].length > 6) {
      longerThanSixLetters++;
    }
  }
}

let longerThanSixLetters2 = 0;

E.forEach((arr) => {
  [...arr].forEach((str) => {
    if (arr.length > 2 && str.length > 6) {
      longerThanSixLetters2++;
    }
  });
});

console.log(
  "Longer than six letters ",
  longerThanSixLetters,
  longerThanSixLetters2
); // 10

//4 Surasti stringą, kuris prasideda “a” raide, ieškant tik tokiuose sub masyvuose,
//kurie yra ilgesni nei 3;

let startsWithA = [];

for (let i = 0; i < E.length; i++) {
  for (let j = 0; j < E[i].length; j++) {
    if (E[i].length > 3 && E[i][j].charAt(0) == "a") startsWithA.push(E[i][j]);
  }
}

let startsWithA2 = [];

E.forEach((arr) => {
  [...arr].forEach((str) => {
    if (arr.length > 3 && str.charAt(0) == "a") startsWithA2.push(str);
  });
});

console.log("Starts with a ", startsWithA, startsWithA2); // ['art', 'antiquity']

//5 Surasti stringą, kuris pasibaigia “r” raide,
//ieškant tik tokiuose sub masyvuose, kurie yra trumpesni nei 3;

let endsWithR = [];

for (let i = 0; i < E.length; i++) {
  for (let j = 0; j < E[i].length; j++) {
    if (E[i].length < 3 && E[i][j].charAt(E[i][j].length - 1) == "r") {
      endsWithR.push(E[i][j]);
    }
  }
}

let endsWithR2 = [];

E.forEach((arr) => {
  [...arr].forEach((str) => {
    if (arr.length < 3 && str.charAt(str.length - 1) == "r") {
      endsWithR2.push(str);
    }
  });
});

console.log("Ends with r ", endsWithR, endsWithR2); //['year', 'air', 'water', 'star', 'star']

//6 Surasti trumpiausią stringą, ieškant tik tokiuose sub masyvuose, kurie yra trumpesni nei 2;

let shortestStr = E[0][0];

for (let i = 0; i < E.length; i++) {
  for (let j = 0; j < E[i].length; j++) {
    if (E[i].length < 2 && E[i][j].length < shortestStr.length) {
      shortestStr = E[i][j];
    }
  }
}

let shortestStr2 = E[0][0];

E.forEach((arr) => {
  [...arr].forEach((str) => {
    if (arr.length < 2 && str.length < shortestStr2.length) {
      shortestStr2 = str;
    }
  });
});

console.log("Shortest string ", shortestStr, shortestStr2); // air

//7 Suskaičiuoti vidutinį stringų ilgį, ieškant tik tokiuose sub masyvuose, kurie yra trumpesni nei 2;

let stringSum = 0;
let stringCount = 0;

for (let i = 0; i < E.length; i++) {
  for (let j = 0; j < E[i].length; j++) {
    if (E[i].length < 2) {
      stringSum += E[i][j].length;
      stringCount++;
    }
  }
}

let avegareStringLength = stringSum / stringCount;

let stringSum2 = 0;
let stringCount2 = 0;

E.forEach((arr) => {
  [...arr].forEach((str) => {
    if (arr.length < 2) {
      stringSum2 += str.length;
      stringCount2++;
    }
  });
});

let avegareStringLength2 = stringSum2 / stringCount2;

console.log(
  "Average string length ",
  avegareStringLength,
  avegareStringLength2
); // 3,8

//8 Suskaičiuoti vidutinį stringų, ilgesnių nei 5, ilgį, ieškant tik tokiuose sub masyvuose, kurie yra trumpesni nei 2;

let longerThatFiveLetters = 0;
let longerThatFiveLettersSum = 0;

for (let i = 0; i < E.length; i++) {
  for (let j = 0; j < E[i].length; j++) {
    if (E[i].length < 2 && E[i][j].length > 5) {
      longerThatFiveLetters++;
      longerThatFiveLettersSum += E[i][j].length;
    }
  }
}
let longerThatFiveLettersAverage =
  longerThatFiveLettersSum / longerThatFiveLetters;

let longerThatFiveLetters2 = 0;
let longerThatFiveLettersSum2 = 0;

E.forEach((arr) => {
  [...arr].forEach((str) => {
    if (arr.length < 2 && str.length > 5) {
      longerThatFiveLetters2++;
      longerThatFiveLettersSum2 += str.length;
    }
  });
});

let longerThatFiveLettersAverage2 =
  longerThatFiveLettersSum2 / longerThatFiveLetters2;

console.log(
  "Longer than five letters average ",
  longerThatFiveLettersAverage,
  longerThatFiveLettersAverage2
); // 6

//9 Suskaičiuoti vidutinį stringų ilgį, kurie sub masyve turi indeksą 2;

let hasIndexTwoSum = 0;
let hasIndexTwoCount = 0;

for (let i = 0; i < E.length; i++) {
  for (let j = 0; j < E[i].length; j++) {
    if (E[i].length > 2) {
      hasIndexTwoSum += E[i][j].length;
      hasIndexTwoCount++;
    }
  }
}

let hasIndexTwoAverage = hasIndexTwoSum / hasIndexTwoCount;

let hasIndexTwoSum2 = 0;
let hasIndexTwoCount2 = 0;

E.forEach((arr) => {
  [...arr].forEach((str) => {
    if (arr.length > 2) {
      hasIndexTwoSum2 += str.length;
      hasIndexTwoCount2++;
    }
  });
});

let hasIndexTwoAverage2 = hasIndexTwoSum2 / hasIndexTwoCount2;

console.log(
  "Has index of  two average ",
  hasIndexTwoAverage,
  hasIndexTwoAverage2
); // 5.1

//10 Suskaičiuoti kiek “s” raidžių yra stringuose, kurie sub masyve turi indeksą 0 arba yra sub masyvo paskutinis elementas;

let sCount = 0;

for (let i = 0; i < E.length; i++) {
  sCount += (E[i][0].match(/s/g) || []).length;
  if (E[i].length > 1) {
    let lastIndex = E[i].length - 1;
    sCount += (E[i][lastIndex].match(/s/g) || []).length;
  }
}
let sCount2 = 0;

E.forEach((arr) => {
  sCount2 += (arr[0].match(/s/g) || []).length;
  if (arr.length > 1) {
    let lastIndex = arr.length - 1;
    sCount2 += (arr[lastIndex].match(/s/g) || []).length;
  }
});

console.log("Total occurrences of 's' in the array:", sCount, sCount2);
