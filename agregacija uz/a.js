//A. Masyvas su skaičiais.
const A = [
  83, 55, 53, -73, 0, 8, 17, 76, 95, -1, 35, -16, -22, -94, 9, 54, 66, 30, -46,
  9, 62, -9, -64, -55, 0, 19, 29, -70, 0, 51, -92, 46, 43, 58, -61, 3, -12, -58,
  -82, 5, 5, 97, 90, -51, 57, 72, -71, -6, 86, 34, 100, -94, 44, 80, 54, 60, 87,
  -94, -25, -59, -90, -3, 35, 7, -16, 26, -38, 82, 79, -61, -48, -3, 56, -32,
  -94, -87, -24, 86, -93, -21, 83, -71, -2, -45, 15, 39, 0, 29, -77, -97, 27,
  77, 41, 0, 40, -54, 99, 70, -41, 91,
];

//1 Surasti didžiausią skaičių;

const max = Math.max(...A);
console.log("Max", max); // 100

//2 Surasti mažiausią skaičių;

const min = Math.min(...A);
console.log("Min", min); // -97

//3 Surasti didžiausią neigiamą skaičių;

let maxNegative = -Infinity;

for (let i = 0; i < A.length; i++) {
  if (A[i] < 0 && A[i] > maxNegative) {
    maxNegative = A[i];
  }
}

let maxNegative2 = -Infinity;
A.forEach((number) => {
  if (number < 0 && number > maxNegative2) {
    maxNegative2 = number;
  }
});
console.log("Max negative number: ", maxNegative, maxNegative2); // -1

//4 Surasti didžiausią skaičių, kuris yra mažesnis už 50;

let secondBigestAfter50 = -Infinity;

for (let i = 0; i < A.length; i++) {
  if (A[i] < 50 && A[i] > secondBigestAfter50) {
    secondBigestAfter50 = A[i];
  }
}

let secondBigestAfter502 = -Infinity;

A.forEach((number) => {
  if (number < 50 && number > secondBigestAfter502) {
    secondBigestAfter502 = number;
  }
});

console.log(
  "Second biggest number after 50: ",
  secondBigestAfter50,
  secondBigestAfter502
); // 46

//5 Suskaičiuoti teigiamų skaičių sumą;

let positiveSum = 0;

for (let i = 0; i < A.length; i++) {
  if (A[i] > 0) {
    positiveSum += A[i];
  }
}

let positiveSum2 = 0;

A.forEach((number) => {
  if (number > 0) {
    positiveSum2 += number;
  }
});

console.log("Positive sum", positiveSum, positiveSum2); // 2754

//6 Suskaičiuoti neigiamų skaičių kvadratų (skaičių pakeltų kvadratu) sumą;

let negativeSquareSum = 0;

for (let i = 0; i < A.length; i++) {
  if (A[i] < 0) {
    negativeSquareSum += Math.pow(A[i], 2);
  }
}

let negativeSquareSum2 = 0;

A.forEach((number) => {
  if (number < 0) {
    negativeSquareSum2 += Math.pow(number, 2);
  }
});

console.log("Negative square sum ", negativeSquareSum, negativeSquareSum2); // 150940

//7 Suskaičiuoti kiek skaičių patenka į intervalą (imtinai) 25-75

let numbersBetween = 0;

for (let i = 0; i < A.length; i++) {
  if (A[i] >= 25 && A[i] <= 75) {
    numbersBetween++;
  }
}

let numbersBetween2 = 0;
A.forEach((number) => {
  if (number >= 25 && number <= 75) {
    numbersBetween2++;
  }
});

console.log("Numbers between 25-75 ", numbersBetween, numbersBetween2); //27

//8 Suskaičiuoti kiek skaičių yra 0-iai;

let isZero = 0;

for (let i = 0; i < A.length; i++) {
  if (A[i] == 0) {
    isZero++;
  }
}

let isZero2 = 0;

A.forEach((number) => {
  if (number == 0) {
    isZero2++;
  }
});

console.log("Is zero ", isZero, isZero2); // 5

//9 Suskaičiuoti kiek skaičių be liekanos dalinasi iš 3;

let divFromThree = 0;

for (let i = 0; i < A.length; i++) {
  if (A[i] % 3 === 0) {
    divFromThree++;
  }
}

let divFromThree2 = 0;

A.forEach((number) => {
  if (number % 3 == 0) {
    divFromThree2++;
  }
});

console.log("Divides from three ", divFromThree, divFromThree2); // 36

//10 Suskaičiuoti neigiamų skaičių vidurkį;

let negativeSum = 0;
let negativeCount = 0;

for (let i = 0; i < A.length; i++) {
  if (A[i] < 0) {
    negativeSum += A[i];
    negativeCount++;
  }
}

let negativeSumAverage = negativeSum / negativeCount;

let negativeSum2 = 0;
let negativeCount2 = 0;

A.forEach((number) => {
  if (number < 0) {
    negativeSum2 += number;
    negativeCount2++;
  }
});
let negativeSumAverage2 = negativeSum2 / negativeCount2;
console.log(
  "Negative numbers sum average ",
  negativeSumAverage,
  negativeSumAverage2
); // -51.23
