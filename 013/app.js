function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 1. Konsolėje išspausdinti žodį "Labas" atsitiktinį nuo 5 iki 10 kiekį kartų.
let random = rand(5, 10);
for (let i = 0; i < random; i++) {
  console.log("Labas");
}

// 2. Patobulinti 1 uždavinio kodą, kad rezultatas būtų viena eilutė su visais 'Labas' žodžiais.let random = rand(5, 10);
let hello = "";
let random2 = rand(5, 10);
for (let i = 0; i < random2; i++) {
  hello += "Labas ";
}

console.log(hello);

// 3. Konsolėje išspausdinti atsitiktinį skaičių intervale nuo 0 iki 4.

console.log(rand(0, 4));

// 4. Konsolėje 5 kartus išspausdinti atsitiktinį skaičių intervale nuo 0 iki 4.

for (let i = 0; i < 5; i++) {
  console.log(rand(0, 4));
}

// 5. Konsolėje 7 kartus išspausdinti atsitiktinį skaičių intervale nuo 0 iki 4.

for (let i = 0; i < 7; i++) {
  console.log(rand(0, 4));
}

// 6. Konsolėje 5 arba 7 kartus išspausdinti atsitiktinį skaičių intervale nuo 0 iki 4.
let random3 = rand(0, 1) ? 5 : 7;
for (let i = 0; i < random3; i++) {
  console.log(rand(0, 4));
}
console.clear();
// 7. Konsolėje 5 kartus išspausdinti atsitiktinį skaičių intervale nuo 0 iki 4. Dar išspausdinti jų sumą.
let sum = 0;

for (let i = 0; i < 5; i++) {
  let random8 = rand(0, 4);
  sum += random8;
  console.log(random8);
}
console.log(sum);
