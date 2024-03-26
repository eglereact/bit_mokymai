function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const vienas = [];
const du = [];
const trys = [];

for (let i = 0; i < 200; i++) {
  vienas.push(["A", "B", "C", "D"][rand(0, 3)]);
  du.push(["A", "B", "C", "D"][rand(0, 3)]);
  trys.push(["A", "B", "C", "D"][rand(0, 3)]);
}

console.log(vienas);
console.log(du);
console.log(trys);

const bendras = [];

for (let i = 0; i < 200; i++) {
  bendras.push(vienas[i] + du[i] + trys[i]);
}

console.log(bendras);

const unikalios = [];

for (let i = 0; i < 200; i++) {
  if (-1 == unikalios.indexOf(bendras[i])) {
    unikalios.push(bendras[i]);
  }
}

console.log(unikalios);

const unikaliosPo1 = [];

for (let i = 0; i < unikalios.length; i++) {
  const nuo = bendras.indexOf(unikalios[i]);
  if (-1 == bendras.indexOf(unikalios[i], nuo + 1)) {
    unikaliosPo1.push(unikalios[i]);
  }
}
console.log(unikaliosPo1);

console.clear();

// 1 padaryti masyvą iš skaičių nuo 1 iki 100

const arr = [];

for (let i = 1; i <= 100; i++) {
  arr.push(i);
}

console.log(arr);

// 2 Skaičius kurie dalinasi iš 3 pakeiskite į raidę "C"
// 3 Skaičius kurie dalinasi iš 7 pakeiskite į raidę "B"
const arr2 = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 3 === 0) {
    arr2.push("C");
  } else if (arr[i] % 7 === 0) {
    arr2.push("B");
  } else {
    arr2.push(arr[i]);
  }
}

// 4 Padauginti visus skaičius iš 5
for (let i = 0; i < arr.length; i++) {
  if (typeof arr2[i] === "number") {
    arr2[i] *= 5;
  }
}

// 5 Pakeisti raides į jų indeksus
for (let i = 0; i < arr2.length; i++) {
  if (typeof arr2[i] === "string") {
    arr2[i] = i;
  }
}

// 6 Skaičius kurie dalijasi iš 3 bet nesidalina iš 5 pakeisti į "A"

for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] % 3 === 0 && arr2[i] % 5 !== 0) {
    arr2[i] = "A";
  }
}
console.log(arr2);

// Suskaičiuoti skaičių sumą

let suma = 0;

for (let i = 0; i < arr2.length; i++) {
  if (typeof arr2[i] === "number") {
    suma += arr2[i];
  }
}

console.log(suma);
