const D = [
  [95, 78, 38],
  [55, 35],
  [61, 0, 16],
  [36, 32, 16],
  [64],
  [94],
  [80, 10, 80],
  [75, 80],
  [41],
  [91, 77],
  [93, 73, 77, 65],
  [26, 25, 17],
  [19, 52, 42, 11],
  [35, 18, 82],
  [31, 1],
  [3, 52, 70, 84],
  [98],
  [90, 0],
  [94, 58],
  [80],
  [17, 0, 3],
  [65],
  [99, 54, 33, 24],
  [86, 6],
  [55, 47],
  [63],
  [41, 56],
  [97, 69],
  [11],
  [41, 53],
  [19, 89],
  [48, 54, 54, 63],
  [33, 55, 60, 54],
  [28, 28, 74, 44],
  [60],
  [5, 52],
  [80, 92, 31, 30],
  [24],
  [95, 4, 23],
  [38, 7, 61],
  [53, 99, 22],
  [23, 34],
];

//1 Surasti didžiausią skaičių;

let max = D[0][0];

for (let i = 0; i < D.length; i++) {
  for (let j = 0; j < D[i].length; j++) {
    if (D[i][j] > max) {
      max = D[i][j];
    }
  }
}

let max2 = D[0][0];

D.forEach((arr) => {
  [...arr].forEach((number) => {
    if (number > max2) {
      max2 = number;
    }
  });
});

console.log("Biggerst number ", max, max2); //99

//2 Rasti ar yra bent vienas sub masyvas ilgesnis nei 5;

let thereAre = true;

for (let i = 0; i < D.length; i++) {
  if (D[i].length > 5) {
    thereAre = true;
  } else {
    thereAre = false;
  }
}

let thereAre2 = true;

D.forEach((arr) => {
  if (arr.length > 5) {
    thereAre2 = true;
  } else {
    thereAre2 = false;
  }
});

console.log("Is there longer array than 5? ", thereAre, thereAre2); // false

//3 Suskaičiuoti kiek elementų yra sub masyvai trumpesni nei 2;

let shorterThanTwo = 0;
for (let i = 0; i < D.length; i++) {
  if (D[i].length < 2) shorterThanTwo++;
}

let shorterThanTwo2 = 0;
D.forEach((arr) => {
  if (arr.length < 2) shorterThanTwo2++;
});

console.log("Shorter than two ", shorterThanTwo, shorterThanTwo2); // 10

//4 Surasti didžiausią skaičių, ieškant tik tokiuose sub masyvuose, kurie yra ilgesni nei 2;
let maxNumber = D[0][0];

for (let i = 0; i < D.length; i++) {
  for (let j = 0; j < D[i].length; j++) {
    if (D[i][j] > maxNumber && D[i].length > 2) {
      maxNumber = D[i][j];
    }
  }
}

let maxNumber2 = D[0][0];

D.forEach((arr) => {
  [...arr].forEach((number) => {
    if (number > maxNumber2 && arr.length > 2) {
      maxNumber2 = number;
    }
  });
});

console.log("Biggers number ", maxNumber, maxNumber2); //99

//5 Suskaičiuoti didesnių nei 10 skaičių sumą, ieškant tik tokiuose sub masyvuose,
// kurie yra ilgesni nei 3;

let sumOfNumbers = 0;

for (let i = 0; i < D.length; i++) {
  for (let j = 0; j < D[i].length; j++) {
    if (D[i][j] > 10 && D[i].length > 3) {
      sumOfNumbers += D[i][j];
    }
  }
}

let sumOfNumbers2 = 0;

D.forEach((arr) => {
  [...arr].forEach((number) => {
    if (number > 10 && arr.length > 3) {
      sumOfNumbers2 += number;
    }
  });
});

console.log("Sum ", sumOfNumbers, sumOfNumbers2); // 1676

//6 Suskaičiuoti kiek skaičių patenka į intervalą (imtinai) 10-20,
//ieškant tik tokiuose sub masyvuose, kurie yra trumpesni nei 3;

let numbersIn = 0;

for (let i = 0; i < D.length; i++) {
  for (let j = 0; j < D[i].length; j++) {
    if (D[i].length < 3 && D[i][j] >= 10 && D[i][j] <= 20) {
      numbersIn++;
    }
  }
}

let numbersIn2 = 0;

D.forEach((arr) => {
  [...arr].forEach((number) => {
    if (arr.length < 3 && number >= 10 && number <= 20) {
      numbersIn2++;
    }
  });
});

console.log("Numbers between (10-20) ", numbersIn, numbersIn2); // 2

//7 Suskaičiuoti kiek skaičių be liekanos dalinasi iš 5,
//ieškant tik tokiuose sub masyvuose, kurie yra trumpesni nei 2;

let divisibleByFive = 0;

for (let i = 0; i < D.length; i++) {
  for (let j = 0; j < D[i].length; j++) {
    if (D[i].length < 2 && D[i][j] % 5 == 0) {
      divisibleByFive++;
    }
  }
}

let divisibleByFive2 = 0;

D.forEach((arr) => {
  [...arr].forEach((number) => {
    if (arr.length < 2 && number % 5 == 0) {
      divisibleByFive2++;
    }
  });
});

console.log("Divisible by five ", divisibleByFive, divisibleByFive2); // 3

//8 Suskaičiuoti kiek skaičių be liekanos dalinasi iš 5,
//ieškant tik tokiuose sub masyvuose, kurie yra 2 ilgio;
let divisibleByFiveIn = 0;

for (let i = 0; i < D.length; i++) {
  for (let j = 0; j < D[i].length; j++) {
    if (D[i].length == 2 && D[i][j] % 5 == 0) {
      divisibleByFiveIn++;
    }
  }
}

let divisibleByFiveIn2 = 0;

D.forEach((arr) => {
  [...arr].forEach((number) => {
    if (arr.length == 2 && number % 5 == 0) {
      divisibleByFiveIn2++;
    }
  });
});
console.log(
  "Divisible by five in length two",
  divisibleByFiveIn,
  divisibleByFiveIn2
); // 8

//9 Suskaičiuoti sumą skaičių, kurie sub masyve turi indeksą 2;

let sumOfIndexTwo = 0;

for (let i = 0; i < D.length; i++) {
  if (D[i].length > 2) {
    sumOfIndexTwo += D[i][2];
  }
}

let sumOfIndexTwo2 = 0;

D.forEach((arr) => {
  if (arr.length > 2) {
    sumOfIndexTwo2 += arr[2];
  }
});

console.log("Sum of index two ", sumOfIndexTwo, sumOfIndexTwo2); // 799

//10 Suskaičiuoti vidurkį skaičių, kurie sub masyve turi indeksą 1 arba 3;

let sumIndexOneTree = 0;
let hasIndexOne = 0;

for (let i = 0; i < D.length; i++) {
  if (D[i].length > 3) {
    sumIndexOneTree += D[i][1] + D[i][3];
    hasIndexOne += 2;
  } else if (D[i].length > 1) {
    sumIndexOneTree += D[i][1];
    hasIndexOne++;
  }
}

let avg = sumIndexOneTree / hasIndexOne;

let sumIndexOneTree2 = 0;
let hasIndexOne2 = 0;
D.forEach((arr) => {
  if (arr.length > 3) {
    sumIndexOneTree2 += arr[1] + arr[3];
    hasIndexOne2 += 2;
  } else if (arr.length > 1) {
    sumIndexOneTree2 += arr[1];
    hasIndexOne2++;
  }
});
let avg2 = sumIndexOneTree2 / hasIndexOne2;
console.log("Sum of index one or tree ", avg, avg2); // 44.125
