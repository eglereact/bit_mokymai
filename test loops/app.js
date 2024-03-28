function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//1
for (let i = 10; i > 0; i--) {
  console.log(i);
}

console.clear();

//2
let sum = 0;
for (let i = 10; i > 0; i--) {
  let speed = rand(120, 220);
  console.log(speed);
  sum += speed;
}

let avg = sum / 10;

console.log(avg);

console.clear();

//3
let i = 10;
let gas = 44;
do {
  let use = rand(3, 6);
  gas -= use;
  i--;
} while (i > 0 && gas >= 0);

console.clear();

//4
let small = 120;
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 5; j++) {
    let rando = rand(20, 120);
    if (rando < small) {
      small = rando;
    }
  }
}

console.log(small);

console.clear();

//5
//(BOSO lygis) Dykumoje vyksta lenktynės. Automobilis Nr. 55 juose dalyvauja.
//Kiekviename kilometre gali atsitikti arba neatsitikti rand(0, 1) tokie trys įvykiai:
//netikėtai iššokti - neiišokti ant kelio kengūra,
//vairuotojas gali nespėti - spėti pasukti vairą ir vairuotojas gali nespėti - spėti paspausti stabdžius.
//Imituokite tokią situaciją do while ciklu- vienas kilometras vienas ciklo prasisukimas.
//Cikle rand() funkciją atsitiktinai generuokite visų įvykių tikimybę.
// Jeigu viename cikle įvyksta visi nepalankūs įvykiai: iššoka kengūra,
//vairuotojas nespėja pasukti vairo ir nespėja paspausti stabdžių while ciklą baikite.
// Ciklo pabaigoje atspausdinkite kiek kilometų sugebėjo nuvažiuoti automobilis be avarijos.

let km = 0;
let keng;
let vairas;
let stabdziai;

do {
  km++;
  keng = rand(0, 1) ? true : false;
  vairas = rand(0, 1) ? true : false;
  stabdziai = rand(0, 1) ? true : false;
  console.log(keng);
  console.log(vairas);
  console.log(stabdziai);
} while (!(keng == true && vairas == true && stabdziai == true));

console.log(km);
