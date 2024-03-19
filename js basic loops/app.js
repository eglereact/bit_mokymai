function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Task 1--------------------------------------------------------------------------------------------------------------------------------------
//Sukurkite tris kintamuosius ir priskirkite jiems skirtingus sveikus skaičius iš intervalo 5…25;
//A: Paskaičiuokite jų sumą ir priskirkite ją kintamajam. Pasinaudokite console.log atspauzdinkite sumos kintamąjį;
//B: Sudėkite skaičius į stringo tipo kintamąjį ir jį atspauszdinkite pasinaudodami console.log;
//C: Sudėkite skaičius į stringo tipo kintamąją padarant tarp skaičių tarpus ir jį atspauszdinkite pasinaudodami console.log;
//D: Sudėkite skaičius į stringo tipo kintamąją padarant tarp skaičių tarpus ir gale pridedėkite trijų skaičių sumą, paskaičiuotą A dalyje.
// Atspausdinkite gautą stringo tipo kintąmąjį pasinaudodami console.log;

// let a = rand(5, 25);
// let b = rand(5, 25);
// let c = rand(5, 25);

// let sum = a + b + c;

// console.log(a, b, c);
// console.log(sum);
// console.log("Sum as a string " + String(sum));
// console.log(`${a} ${b} ${c}`);
// console.log(`${a} + ${b} + ${c} = ${sum}`);

//Task 2--------------------------------------------------------------------------------------------------------------------------------------
//Sukurkite vieną kintamąjį, jam priskirkite skaičių (iš intervalo 5…10), kurį sugeneruoja funkcija rand(5, 10)
//ir jį atspauszdinkite pasinaudojus console.log;

//let number = rand(5, 10);
// console.log(number);

//Task 3--------------------------------------------------------------------------------------------------------------------------------------
//Sukurkite kintamąjį ir jam priskirkite stringą “Labas”. Pasinaudodami ciklu ir console.log atspauzdinkite kintamąjį 5 kartus;

// const hello = "Labas";
// for (let i = 0; i < 5; i++) {
//   console.log(hello);
// }

//Task 4--------------------------------------------------------------------------------------------------------------------------------------
//Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio 7 kartus;

// for (let i = 1; i <= 7; i++) {
//   console.log(number);
// }

//Task 5--------------------------------------------------------------------------------------------------------------------------------------
//Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio tiek kartų, koks skaičius yra sugeneruotas;

// for (let i = 1; i <= number; i++) {
//   console.log(number);
// }

//Task 6--------------------------------------------------------------------------------------------------------------------------------------
//Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio tiek kartų, koks skaičius yra sugeneruotas,
//bet tik tada jeigu jis didesnis už 7;

// for (let i = 1; i <= number; i++) {
//   if (number > 7) {
//     console.log(number);
//   }
// }

//Task 7--------------------------------------------------------------------------------------------------------------------------------------
//Deklaruokite kintamąjį už ciklo ribų. Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 10…20.
// Ciklą kartokite 5 kartus;
// A: Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, kurį sukūrėte už ciklo ribų ir jį atspauzdinkite;
// B: Skaičiuokite ciklo viduje generuojamų reikšmių sumą, ją priskirdami kintamajam, kurį sukūrėte už ciklo ribų.
// Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų;
// C: Skaičius, generuojamus ciklo viduje dėkite į stringo tipo kintamąjį tarp skaičių darydami tarpą.
// Stringo tipo kintamąjį atspauzdinkite už ciklo ribų jam pasibaigus;
// D: Skaičius, generuojamus ciklo viduje dėkite į stringo tipo kintamąjį tarp skaičių darydami tarpą.
// Ciklui pasibaigus prie stringo tipo kintamojo pridėkite ciklo viduje generuotų skaičių sumą, paskaičiuotą kaip B dalyje.
// Stringo tipo kintamąjį atspausdinkite pasinaudodami console.log;

// let number7;
// let sum = 0;
// let stringType = "";

// for (let i = 1; i <= 5; i++) {
//   number7 = rand(10, 20);
//   sum += number7;
//   stringType += number7 + " ";
//   console.log(number7);
// }

// console.log("sum: " + sum);
// console.log("String type: " + stringType);
// console.log("String type: " + stringType + "sum: " + sum);

// Task 8 ------------------------------------------------------------------
// Deklaruokite kintamąjį (jeigu reikia kelis kintamuosius) už ciklo ribų.
// Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 10…25.
// Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius mažesnis nei 12;
// A: Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, kurį sukūrėte už ciklo ribų ir jį atspauzdinkite;
// B: Suskaičiuokite kiek iteracijų padarėte ir jų kiekį atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus;
// C: Skaičiuokite ciklo viduje generuojamų reikšmių sumą, atmesdami (neskaičiuodami) skaičius, kurie yra didesni nei 18, ją priskirdami kintamajam,
// kurį sukūrėte už ciklo ribų. Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų;
// D: Sumą skaičiuokite kaip C dalyje, bet papildomai susikurkite kintamąjį, kuriame suskaičiuokite kiek reikšmių atmetėte (nesumavote).
// Rezultatą su suma ir atmestų reikšmių kiekiu atspauzdinkite pasinaudodami console.log už ciklo ribų;
// E: Suskaičiuokite kiek tarp cikle atsitiktinai generuojamų reikšmių yra lyginių ir kiek nelyginių skaičių.
// Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus.
// F: Ciklą iš dalies B kartokite tol,  kol to ciklo iteracijų kiekis bus didesnis nei 20 (vieno ciklo).
// Paskaičiuokite kiek pakartojimų buvo atlikta ir rezultatą atspauzdinkite pabaigoje.

// let number8 = 0;
// let i = 0;
// let sum = 0;
// let notValid = 0;
// let odd = 0;
// let even = 0;
// let repeatedI = 0;

// while (true) {
//   number8 = rand(10, 25);
//   i++;
//   if (number8 < 12) {
//     break;
//   }
//   if (number8 < 18) {
//     sum += number8;
//   } else {
//     notValid++;
//   }
//   if (number8 % 2 === 0) {
//     even++;
//   } else {
//     odd++;
//   }
//   if (i > 20) {
//     break;
//   }

//   repeatedI++;
//   console.log(number8);
// }

// console.log("Iteration number: " + i);
// console.log("Sum " + sum);
// console.log("Not valid " + notValid);
// console.log("Odd " + odd);
// console.log("Even " + even);
// console.log("Repeated i " + repeatedI);

// Task 9 ------------------------------------------------------------------
// Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 5-10.
// Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius 5;
// A: Ciklo viduje paleiskite dar vieną ciklą kurį kartokite tiek kartų, koks skaičius buvo sugeneruotas.
// Paskaičiuokite kiek iteracijų padarė išorinis ciklas ir kiek bendrai iteracijų padarė vidinis ciklas.
// Rezultatus atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus;
// B: Padarykite taip, kad išorinis ciklas pasibaigtų kai 5 yra sugeneruojamas ne pirmą, bet trečią kartą ir
// paskaičiuokite iteracijas analogiškai kaip A dalyje;
// C: Padarykite analogiškai kaip B dalyje, bet tik kai 5 yra sugeneruojami 3 kartus iš eilės;

// let outer = 0;
// let inner = 0;
// let fivesInARow = 0;
// let number9;

// do {
//   outer++;
//   number9 = rand(5, 10);
//   console.log(number9);
//   if (number9 === 5) {
//     fivesInARow++;
//   } else {
//     fivesInARow = 0;
//   }
//   for (let i = 0; i < number9; i++) {
//     inner++;
//   }
// } while (fivesInARow != 3);

// console.log("Inner count " + inner);
// console.log("outter count " + outer);

// Task 10 ------------------------------------------------------------------
// Kazys ir Petras žaidžiai bingo. Petras per vieną partiją surenka taškų kiekį nuo 10 iki 20,
// Kazys - surenka taškų kiekį nuo 5 iki 25.
// Console.log išvesti žaidėjų vardus su taškų kiekiu ir “Partiją laimėjo: ​laimėtojo vardas​”. Taškų kiekį generuokite funkcija ​rand()​.
// Žaidimą laimi tas, kas greičiau surenka 222 taškus. Partijas kartokite tol, kol kažkuris žaidėjas pirmas surenks 222 arba daugiau taškų.

// let kazysPoints = rand(5, 25);
// let petrasPoints = rand(10, 20);
// let kazysSum = 0;
// let petrasSum = 0;

// while (true) {
//   kazysSum += kazysPoints;
//   petrasSum += petrasPoints;
//   if (kazysSum >= 222) {
//     console.log(`{Partiją laimėjo: Kazys su ${kazysSum} taškų}`);
//     break;
//   }
//   if (petrasSum >= 222) {
//     console.log(`{Partiją laimėjo: Petras su ${petrasSum} taškų}`);
//     break;
//   }
// }
