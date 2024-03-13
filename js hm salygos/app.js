// task 1

// let a = rand(0, 4);
// let b = rand(0, 4);

// console.log(a);
// console.log(b);

// if (a >= b) {
//   console.log(a / b);
// } else {
//   console.log(b / a);
// }

// task 2

// let a = rand(0, 25);
// let b = rand(0, 25);
// let c = rand(0, 25);

// console.log(a, b, c);

// if ((a <= b && b <= c) || (c <= b && b <= a)) {
//   console.log(b);
// } else if ((b <= a && a <= c) || (c <= a && a <= b)) {
//   console.log(a);
// } else {
//   console.log(c);
// }

// task 3

// let a = rand(1, 10);
// let b = rand(1, 10);
// let c = rand(1, 10);

// console.log(a, b, c);

// if (a + b > c && a + c > b && b + c > a) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

// task 4
// let a = rand(0, 2);
// let b = rand(0, 2);
// let c = rand(0, 2);
// let d = rand(0, 2);

// console.log(a, b, c, d);

// const numbers = [a, b, c, d];

// const zero = numbers.filter((x) => x == 0).length;
// const one = numbers.filter((x) => x == 1).length;
// const two = numbers.filter((x) => x == 2).length;

// console.log("There are " + zero + " zeros");
// console.log("There are " + one + " ones");
// console.log("There are " + two + " twos");

// task 5
// let a = rand(-10, 10);
// let b = rand(-10, 10);
// let c = rand(-10, 10);

// console.log(a, b, c);

// if (a < 0) {
//   console.log("+" + a + "+");
// } else if (a == 0) {
//   console.log("*" + a + "*");
// } else {
//   console.log("-" + a + "-");
// }
// if (b < 0) {
//   console.log("+" + b + "+");
// } else if (b == 0) {
//   console.log("*" + b + "*");
// } else {
//   console.log("-" + b + "-");
// }
// if (c < 0) {
//   console.log("+" + c + "+");
// } else if (c == 0) {
//   console.log("*" + c + "*");
// } else {
//   console.log("-" + c + "-");
// }

// task 6 Candles

// const countOfCandles = rand(5, 3000);

// console.log(countOfCandles);

// if (countOfCandles < 1000) {
//   console.log("The price of candles are " + countOfCandles + " $");
// } else if (countOfCandles < 2000) {
//   let newPrice = countOfCandles - countOfCandles * 0.03;
//   console.log("The price of candles are " + newPrice + " $");
// } else {
//   let newPrice = countOfCandles - countOfCandles * 0.04;
//   console.log("The price of candles are " + newPrice + " $");
// }

// task 7 Average
let a = rand(0, 100);
let b = rand(0, 100);
let c = rand(0, 100);

console.log(a, b, c);

let avg = (a + b + c) / 3;

console.log("Average (from 0 to 100): " + avg);

const array = [a, b, c];

const limitedArray = array.filter((x) => x > 10 && x < 90);

console.log(limitedArray);
let sum = 0;
for (let i = 0; i < limitedArray.length; i++) {
  sum += limitedArray[i];
}
console.log("Average (from 10 to 90): " + sum / limitedArray.length);

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
