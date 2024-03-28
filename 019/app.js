function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// 1. Sukurti objektą, kuriame būtų:
// - vardas
// - pavardė
// - amžius
// reikšmės užpildyti savo duomenimis (galite meluoti jeigu nenorite teikti tikrų duomenų)

const person = {
  firstName: "Egle",
  lastName: "Tree",
  age: 25,
};
//2. Pasendinkite sukurtą objektą 5 metais ir atspausdinkite objektą

person.age += 5;

console.log(person);

const person1 = {
  name: "Briedis",
  surname: "Miškinius",
  age: 15,
};

const person2 = {
  name: "Vilkas",
  surname: "Miškinius",
  age: 53,
};

const person3 = {
  name: "Lapė",
  surname: "Miškinius",
  age: 34,
};

const people = [person1, person2, person3];

// 3. Visus pasendinkite 5 metais ir atspausdinkite

for (let i = 0; i < people.length; i++) {
  people[i].age += 5;
}

console.log(people);

// 4. Suskaičiuokite visų žmonių amžių vidurkį ir atspausdinkite

let sum = 0;

for (let i = 0; i < people.length; i++) {
  sum += people[i].age;
}

let avg = sum / people.length;

console.log(avg);

// 5. Tasitiktiniu būdu atspausdinkite A arba B raidę

let at = rand(0, 1) ? "A" : "B";

console.log(at);

// const raides = ["A", "B"];
// console.log(raides[rand(0, 1)]);

// 6. Sugeneruokite atsitiktinį skaičių nuo 0 iki 4. Jeigu jis didesnis nei 2 atspauzdinkite 'DIDESNIS', kitu atveju 'MAZESNIS'

let ats = rand(0, 4) > 2 ? "DIDESNIS" : "MAZESNIS";

console.log(ats);

// 7. Parašykite vyriausiojo žmogaus vardą

let oldestPerson = people[0];

for (let i = 0; i < people.length; i++) {
  if (people[i].age > oldestPerson.age) {
    oldestPerson = people[i];
  }
}

console.log(oldestPerson.name);

// 8. Sukurkite naują žmogų ir įdėkite jį į žmonių masyvo pradžią

const person4 = {
  name: "Katė",
  surname: "Miškinius",
  age: 30,
};

people.unshift(person4);

console.log(people);

console.clear();

const colors = ["crimson", "gold", "pink", "purple", "skyblue", "orange"];

// 9. Sukurti masyvą eggs su 10 elementų, kurie yra atsitiktinės spalvos iš masyvo colors
const eggs = [];
for (let i = 0; i < 10; i++) {
  eggs.push(colors[rand(0, colors.length - 1)]);
}

console.log(eggs);
