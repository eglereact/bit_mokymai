function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//1: Programiškai ridenkite du žaidimo kauliukus- sugeneruokite du atsitiktinius skaičius nuo 1 iki 6
//Jeigu kauliukų suma didesnė nei 8 jūs laimėjote, priešingu atveju pralošėte.
//Išveskite atsakymą, kuriame būtų abiejų kauliukų reikšmės ir išvada laimėjote ar pralošėte.

let number1 = rand(1, 6);
let number2 = rand(1, 6);
let sum = number1 + number2;
if (sum > 8) {
  console.log(
    `You won! Number1 = ${number1}, number2 = ${number2}, sum = ${sum} `
  );
} else {
  console.log(
    `You Loose! Number1 = ${number1}, number2 = ${number2}, sum = ${sum} `
  );
}

console.clear();

//2 Gyveno du katinukai, Pilkis ir Murklys. Jų svoriai kilogramais buvo atsitiktiniai dydžiai nuo 3 iki 6.
//Parašyti programą, kuri išvestų katinukų svorius ir apskaičiuotų, kuris katinukas yra lengvesnis.
//Atsakymas turi būti katinukų vardai su jų svoriais ir lengvesnio katinuko vardas.
//Jeigu katinukai sveria vienodai, vietoj katinuko vardo parašykite, kad “katinukų svoriai vienodi”.

let Plikis = rand(3, 6);
let Murklys = rand(3, 6);

if (Plikis > Murklys) {
  console.log(
    `Plikis sveria ${Plikis}, Murklys - ${Murklys}, lengvesnis Murklys`
  );
} else if (Plikis === Murklys) {
  console.log(
    `“Plikis sveria ${Plikis}, Murklys - ${Murklys}, Katinukų svoriai vienodi”`
  );
} else {
  console.log(
    `Plikis sveria ${Plikis}, Murklys - ${Murklys}, lengvesnis Plikis`
  );
}

console.clear();

//3 Nojus pasiruošė potvyniui ir nusipirko dvi valtis. Vienoje telpa 15 katinukų, kitoje 15 karvių
//(katinukus galima sodinti tik į katinukų valtis, o karves tik į karvių, maišyti negalima)
//Prasidėjus liūčiai pas Nojų atėjo atsitiktinis skaičius nuo 0 iki 30 katinukų ir toks pats atsitiktinis skaičius karvių.
//Išveskite atėjusių katinukų ir karvių skaičių ir ar Nojus galės juos sutalpinti į valtis.
//Jeigu netelpa tik katinukai arba tik karvės vistiek išveskite “Netelpa”.
//Kas konkrečiai netelpa išvedinėti nereikia. “Telpa” išveskite tik tuo atveju jeigu ir katinukai ir karvės telpa.

let karves = rand(0, 30);
let katinai = rand(0, 30);
let katinuValtis = 15;
let karviuValtis = 15;

console.log("karves " + karves);
console.log("katinai " + katinai);
if (karves <= karviuValtis && katinai <= katinuValtis) {
  console.log("Telpa");
} else {
  console.log("Netelpa");
}

console.clear();
// 4 Antanas nusipirko naują butą ir pinigų jam liko nedaug.
//Dabar jis niekaip negali apsispręsti ką pirmiausiai pirkti: televizorių, skalbimo mašiną ar šaldytuvą.
// Todėl nusprendžia ridenti kauliuką (atsitiktinis skaičius nuo 1 iki 6) ir jeigu iškris 1 arba 5 pirkti televizorių,
// jeigu 3 arba 4 pirkti skalbimo mašiną ir jeigu 2 arba 6 - šaldytuvą.
//Padėkite Antanui apsispręsti. Ridenkite kauliuką ir parašykite atsakymą kokį daiktą jam pirkti.

let number4 = rand(1, 6);
console.log(number4);
if (number4 == 1 || number4 == 5) {
  console.log("Perka televizorių");
}
if (number4 == 3 || number4 == 4) {
  console.log("Perka skalbimo mašiną");
}
if (number4 == 2 || number4 == 6) {
  console.log("Perka šaldytuvą");
}
console.clear();
//5 (BOSO lygis) Sugeneruokite tris atsitiktinius skaičius nuo 1 iki 7.
//Skaičius atspausdinkite nuo mažiausio iki didžiausio.
// Pavyzdžiui: sugeneravus 4, 2, 4 juos reikia atspausdinti tokia tvarka: 2 4 4;

let arr = [];

for (let i = 0; i < 3; i++) {
  arr.push(rand(1, 7));
}

console.log(arr.sort((a, b) => a - b));
