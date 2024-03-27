const animals2 = [
  ["ant", "bison", "camel"],
  ["duck", "elephant", "giraffe"],
  ["hippo", "iguana"],
];

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// 1. išspausdinti visus gyvūnus

for (let i = 0; i < animals2.length; i++) {
  for (let j = 0; j < animals2[i].length; j++) {
    console.log(animals2[i][j]);
  }
}

console.clear();

// 2. duck pakeisti į dog
for (let i = 0; i < animals2.length; i++) {
  for (let j = 0; j < animals2[i].length; j++) {
    if (animals2[i][j] === "duck") {
      animals2[i][j] = "dog";
    }
    console.log(animals2[i][j]);
  }
}

console.clear();

// 3. Padaryti naują masyvą 5x4 kurio reikšmės yra atsitiktiniai dviženkliai skaičiai

let newMD = [];
let minNumber = 99;

for (let i = 0; i < 5; i++) {
  const row = [];
  for (let j = 0; j < 4; j++) {
    let random = rand(10, 99);
    row.push(random);
    if (random < minNumber) {
      minNumber = random;
    }
  }
  newMD.push(row);
}

//4. Surasti ir išspausdinti mažiausią skaičių

let min2 = Math.min(...newMD.flat());

console.table(newMD);
console.log(newMD);
console.log(minNumber, min2);
