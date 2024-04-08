//C. Mišrus masyvas.

const C = [
  94,
  true,
  "technology",
  "year",
  34,
  true,
  "flower",
  13,
  "future",
  undefined,
  0,
  12,
  "water",
  "false",
  "school",
  "cat",
  false,
  "family",
  70,
  undefined,
  "life",
  "government",
  "mountain",
  13,
  true,
  "year",
  "sun",
  50,
  "day",
  "food",
  0,
  "health",
  70,
  31,
  16,
  85,
  "car",
  "internet",
  100,
  "money",
  26,
  "fire",
  76,
  [],
  45,
  "time",
  "music",
  93,
  0,
  "love",
  69,
  {},
  96,
  0,
  false,
  "air",
  "star",
  24,
  9,
  "thing",
  19,
  "house",
  "way",
  "true",
  90,
  "0",
  "woman",
  "time",
  "job",
  "72",
  "22",
  "city",
  "history",
  47,
  "man",
  92,
  "child",
  73,
  "0",
  16,
  63,
  48,
  "country",
  45,
  "tree",
  true,
  57,
  "earth",
  96,
  [],
  "hope",
  "dream",
  39,
  43,
  "art",
  27,
  "friend",
  "moon",
  "26",
  "science",
  74,
];
//1 Surasti didžiausią skaičių;

let bigestNumber = C[0];

for (let i = 0; i < C.length; i++) {
  if (typeof C[i] == "number" && C[i] > bigestNumber) {
    bigestNumber = C[i];
  }
}

let bigestNumber2 = C[0];

C.forEach((element) => {
  if (typeof element == "number" && element > bigestNumber2) {
    bigestNumber2 = element;
  }
});

console.log("Biggest number ", bigestNumber, bigestNumber2); // 100

//2 Surasti trumpiausią stringą;
let shortestString = "";
for (let i = 0; i < C.length; i++) {
  if (
    typeof C[i] === "string" &&
    (shortestString === "" || C[i].length < shortestString.length)
  ) {
    shortestString = C[i];
  }
}
let shortestString2 = "";

C.forEach((element) => {
  if (
    typeof element == "string" &&
    (shortestString2 == "" || element.length < shortestString2.length)
  ) {
    shortestString2 = element;
  }
});

console.log("Shortest string :", shortestString, shortestString2); // 0

//3 Suskaičiuoti kiek skaičių yra 0-iai (ne stringai ‘0’, o skaičiai!);

let countZero = 0;

for (let i = 0; i < C.length; i++) {
  if (typeof C[i] == "number" && C[i] == 0) {
    countZero++;
  }
}

let countZero2 = 0;

C.forEach((element) => {
  if (typeof element == "number" && element == 0) {
    countZero2++;
  }
});

console.log("Zeros as number", countZero, countZero2); // 4

//4 Suskaičiuoti teigiamų skaičių sumą (tik skaičių, ne stringų!);

let sum = 0;

for (let i = 0; i < C.length; i++) {
  if (typeof C[i] == "number" && C[i] > 0) {
    sum += C[i];
  }
}

let sum2 = 0;

C.forEach((number) => {
  if (typeof number == "number" && number > 0) {
    sum2 += number;
  }
});

console.log("Sum of positive numbers ", sum, sum2); // 1855

//5 Suskaičiuoti bendrą visų stringų ilgį;

let allStrLengthB = 0;

for (let i = 0; i < C.length; i++) {
  if (typeof C[i] == "string") {
    allStrLengthB += C[i].length;
  }
}

let allStrLengthB2 = 0;

C.forEach((str) => {
  if (typeof str == "string") {
    allStrLengthB2 += str.length;
  }
});

console.log("All string length ", allStrLengthB, allStrLengthB2);

//6 Suskaičiuoti vidutinį stringo ilgį;
let allStrLength = 0;
let strCount = 0;
for (let i = 0; i < C.length; i++) {
  if (typeof C[i] == "string") {
    allStrLength += C[i].length;
    strCount++;
  }
}

let strAverage = allStrLength / strCount;

let allStrLength2 = 0;
let strCount2 = 0;
C.forEach((str) => {
  if (typeof str == "string") {
    allStrLength2 += str.length;
    strCount2++;
  }
});

let strAverage2 = allStrLength2 / strCount2;
console.log("Average string length: ", strAverage, strAverage2); // 4.58

//7 Suskaičiuoti kiek elementų masyve yra nei stringas nei skaičius;

let noStrNoNumber = 0;

for (let i = 0; i < C.length; i++) {
  if (typeof C[i] != "string" && typeof C[i] != "number") {
    noStrNoNumber++;
  }
}

let noStrNoNumber2 = 0;

C.forEach((element) => {
  if (typeof element != "string" && typeof element != "number") {
    noStrNoNumber2++;
  }
});
console.log("No string and no number count: ", noStrNoNumber, noStrNoNumber2); // 11

//8 Suskaičiuoti skaičių, kuriuos galima padaryti iš stringų sumą (jeigu stringas verčiasi ne į NaN);

let strToNumberSum = 0;

for (let i = 0; i < C.length; i++) {
  if (typeof C[i] == "string" && !isNaN(C[i])) {
    strToNumberSum += parseInt(C[i]);
  }
}
let strToNumberSum2 = 0;

C.forEach((str) => {
  if (typeof str == "string" && !isNaN(str)) {
    strToNumberSum2 += parseInt(str);
  }
});

console.log("Sum of string numbers ", strToNumberSum, strToNumberSum2); // 120

//9 Rasti ko yra daugiau- stringų ar skaičių;

let string = 0;
let number = 0;

for (let i = 0; i < C.length; i++) {
  if (typeof C[i] == "string") {
    string++;
  }
  if (typeof C[i] == "number") {
    number++;
  }
}

let more = string > number ? "string" : "number";

let string2 = 0;
let number2 = 0;
C.forEach((element) => {
  if (typeof element == "string") {
    string2++;
  }
  if (typeof element == "number") {
    number2++;
  }
});
let more2 = string2 > number2 ? "string" : "number";

console.log("There are more ", more, more2); // string

//10 Rasti ko yra daugiau- loginių true ar false;

let trueCount = 0;
let falseCount = 0;

for (let i = 0; i < C.length; i++) {
  if (typeof C[i] == "boolean" && C[i] == true) {
    trueCount++;
  }
  if (typeof C[i] == "boolean" && C[i] == false) {
    falseCount++;
  }
}

let moreBoolean = trueCount > falseCount ? "true" : "false";

let trueCount2 = 0;
let falseCount2 = 0;

C.forEach((element) => {
  if (typeof element == "boolean" && element == true) {
    trueCount2++;
  }
  if (typeof element == "boolean" && element == false) {
    falseCount2++;
  }
});

let moreBoolean2 = trueCount2 > falseCount2 ? "true" : "false";

console.log("There are more ", moreBoolean, moreBoolean2); // true
