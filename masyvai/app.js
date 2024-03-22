function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//1: Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis nuo 10 iki 30, o reikšmės atsitiktiniai skaičiai nuo 0 iki 10 (pinigai);
//2: Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio reikšmių (pinigų esančių piniginėje) sumą;
//3: Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio popierinių pinigų (skaičių didesnių už 2 ) reikšmių sumą;
//4: Išleisti visus metalinius pinigus (reikšmes, kurios yra mažesnės arba lygios 2 padaryti lygias 0) iš 1 uždavinio;

let ilgis = rand(10, 30);
let pinigine = [];
let sum = 0;
let biggerThanTwoSum = 0;
let maxNumber = 0;
for (let i = 0; i < ilgis; i++) {
  let pinigai = rand(0, 10);
  pinigine.push(pinigai);
  if (pinigine[i] > 2) {
    biggerThanTwoSum += pinigine[i]; // Suma be reiksmiu mazesniu uz 2
  }
  //   if (pinigine[i] <= 2) {
  //     pinigine[i] = 0; // Isleidziam monetas
  //   }

  sum += pinigine[i];
}

//5: Surasti didžiausią reikšmę 1 uždavinio masyve ir paskaičiuoti kiek tokių didžiausių reikšmių masyve yra;
for (let i = 0; i < pinigine.length; i++) {
  if (pinigine[i] === Math.max(...pinigine)) {
    maxNumber++;
  }
}

//6: Visus masyvo elementus, kurie yra lygūs 0, pakeisti į tų elementų indeksų (vietų, numerių) reikšmes
for (let i = 0; i < pinigine.length; i++) {
  if (pinigine[i] === 0) {
    pinigine[i] = i;
  }
}
//7: Į 1 uždavinio masyvą pridėti tiek naujų reikšmių (pinigų, atsitiktinių skaičių nuo 0 iki 10), kad masyvo ilgis būtų lygiai 30;
for (let i = ilgis; i < 30; i++) {
  let pinigai = rand(0, 10);
  pinigine.push(pinigai);
}

//8: Naudojant 1 uždavinio masyvą iš jo reikšmių sukurti dar du papildomus masyvus.
//Į vieną iš 1 uždavinio masyvo pridėti reikšmes mažesnes arba lygias 2 (monetas), o į kitą didesnes nei 2 (popierinius pinigus);
let monetos = [];
let popieriniai = [];

for (let i = 0; i < pinigine.length; i++) {
  if (pinigine[i] <= 2) {
    monetos.push(pinigine[i]);
  } else {
    popieriniai.push(pinigine[i]);
  }
}

//9: Sukurti masyvą (piniginę su dviem skyreliais) iš dviejų elementų,
//kurio pirmas elementas būtų masyvas iš 8 uždavinio su monetom, o antras elementas masyvas iš 8 uždavinio su popieriniais pinigais;
let wallet = [monetos, popieriniai];

//10: Į 9 uždavinio masyvą, piniginę su dviem skyreliais,
//pridėti trečią skyrelį- masyvą su kortelėm: ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];
let korteles = [
  "KIKA",
  "Euro Vaistinė",
  "Drogas",
  "Ačiū",
  "Lietuvos Geležinkeliai",
  "Mano RIMI",
];

wallet.push(korteles);

//11 Korteles skyrelyje sudėlioti (išrūšiuoti) pagal abėcėlę;
korteles.sort();
//12 Į kortelių skyrelį pridėti mokėjimo kortelių 'MasterCard', 'Visa'
//(su rand generuokite atsitiktines reikšmes 'MasterCard' arba 'Visa' ir rašykite į masyvą)
//iš skirtingų bankų tiek, kad skyrelis (masyvo ilgis) pasidarytų lygus 20;

while (korteles.length < 20) {
  let bankCard = rand(0, 1) ? "MasterCard" : "Visa";
  korteles.push(bankCard);
}

//13: Paskaičiuokite, kokio tipo kortelių ('MasterCard' arba 'Visa') yra daugiau;
let masterCard = 0;
let visa = 0;

for (let i = 0; i < korteles.length; i++) {
  if (korteles[i] === "MasterCard") {
    masterCard++;
  }
  if (korteles[i] === "Visa") {
    visa++;
  }
}

console.log(pinigine);
console.log(sum);
console.log(biggerThanTwoSum);
console.log("Max reiksme: ");
console.log(Math.max(...pinigine));
console.log("Max reiksmiu yra: ");
console.log(maxNumber);
console.log(monetos);
console.log(popieriniai);
console.log(wallet);
console.log(masterCard);
console.log(visa);
console.log(`Daugiau yra: ${masterCard > visa ? "MasterCard" : "Visa"}`);
