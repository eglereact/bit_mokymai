// 1. Naudojant ciklą atspausdinti skaičius nuo 1 iki 100

for (let i = 1; i <= 100; i++) {
  console.log(i);
}
console.clear();

// 2. Atspausdinti skaičius nuo 100 iki 1

for (let i = 100; i > 0; i--) {
  console.log(i);
}
console.clear();

// 3. Atspausdinti lyginius skaičius nuo 0 iki 100

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
console.clear();

// 4. Naudojant ciklą padarykite sekaičių iš 9 vienetų ir prie to skaičiaus pridėkite 3

let number = "";
for (let i = 0; i < 9; i++) {
  number += 1;
}
console.log(number);
console.log(parseInt(number) + 3);
console.log(Number(number) + 3);
console.log(+number + 3);
console.clear();

// 5. Atspausdinti skaičius nuo 1 iki 100, bet jeigu skaičius dalinasi iš 3, atspausdinti 'Fizz' vietoje skaičiaus.

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}
console.clear();

// 6. Naudojant ciklą paskaičiuoti visų skaičių nuo 1 iki 100 sumą

let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);
console.clear();

// 7. Naudojant ciklą paskaičiuoti visų nelyginių skaičių nuo 1 iki 100 sumą
let oddSum = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    oddSum += i;
  }
}
console.log(oddSum);
