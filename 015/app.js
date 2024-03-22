//Arrays
function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//1: Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.
let arr = [];
let arr2 = [];
let biggerThenTen = 0;
let evenSum = 0;
for (let i = 0; i <= 29; i++) {
  let number = rand(5, 25);
  arr.push(number);
  arr2.push(number - i);
  if (arr[i] > 10) {
    biggerThenTen++;
  }
  if (i % 2 === 0) {
    evenSum += arr[i];
  }
}

console.log(arr);
console.log("Bigger than 10 : " + biggerThenTen);
console.log(
  "Biggest number : " +
    Math.max(...arr) +
    " index: " +
    arr.indexOf(Math.max(...arr))
);
console.log("Even numbers sum: " + evenSum);
console.log(arr2);
//Naudodamiesi 1 uždavinio masyvu:
//+Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;
//+Raskite didžiausią masyvo reikšmę ir jos indeksą;
//+Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;
//Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;
//Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;
//Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indeksų reikšmių, o kitas iš porinių (pagal neporinį-porinį indeksą, ne reikšmę);
//Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;
//Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;
