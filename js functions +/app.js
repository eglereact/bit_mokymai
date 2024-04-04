function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//1. Parašykite funkciją, kurios argumentas būtų tekstas, kuris yra atspausdinamas su console.log;

const printText = (text) => console.log(text);

printText(
  "Parašykite funkciją, kurios argumentas būtų tekstas, kuris yra atspausdinamas su console.log"
);

//2. Parašykite funkciją su dviem argumentais, pirmas argumentas tekstas, įterpiamas atspausdinamas su console.log,
//o antrasis kiek kartų spausdinimas atliekamas. Rašydami šią funkciją remkitės pirmame uždavinyje parašytą funkciją;

const printTextNTimes = (text, times) => {
  for (let i = 0; i < times; i++) {
    console.log(text);
  }
};
printTextNTimes("hello", 6);
printTextNTimes("Nice", 15);

//4. Parašykite funkciją, kuri skaičiuotų, iš kiek sveikų skaičių jos argumentas dalijasi be liekanos (išskyrus vienetą ir patį save)

const divideCount = (number) => {
  let count = 0;
  if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        count++;
      }
    }
  }
  return count;
};

console.log(divideCount(6));
console.log(divideCount(17));
console.log(divideCount(15));

//5. Sugeneruokite masyvą iš 100 elementų, kurio reikšmės atsitiktiniai skaičiai nuo 33 iki 77.
//Išrūšiuokite masyvą pagal daliklių be liekanos kiekį mažėjimo tvarka, panaudodami ketvirto uždavinio funkciją.

const bigArr = [];

for (let i = 0; i < 100; i++) {
  bigArr.push(rand(33, 77));
}

console.log(bigArr);
