//B. Masyvas su stringais.
const B = [
  "the quick brown fox",
  "jumps over the lazy dog",
  "a bird in the hand",
  "is worth two in the bush",
  "an apple a day",
  "keeps the doctor away",
  "actions speak louder than words",
  "all good things must come to an end",
  "beauty is in the eye of the beholder",
  "better late than never",
  "birds of a feather flock together",
  "cleanliness is next to godliness",
  "dont bite the hand that feeds you",
  "dont count your chickens before they hatch",
  "dont put all your eggs in 1 basket",
  "every cloud has a silver lining",
  "every dog has its day",
  "every rose has its thorn",
  "fortune favors the bold",
  "good things come to those who wait",
  "a watched pot never boils",
  "haste makes waste",
  "history repeats itself",
  "cat got your tongue",
  "home is where the heart is",
  "if the shoe fits, wear it",
  "ignorance is bliss",
  "it takes two to tango",
  "arabs have 100 words for sand",
  "kill two birds with one stone",
  "laughter is the best medicine",
  "love is blind",
  "money doesnt grow on trees",
  "no pain no gain",
  "nothing ventured nothing gained",
  "once bitten twice shy",
  "practice makes perfect",
  "the early bird catches the worm",
  "the grass is always greener on the other side",
  "the pen is mightier than 10 swords",
  "theres no smoke without fire",
  "time heals all wounds",
  "5 second rule",
  "every dog has its day",
  "to err is human to forgive divine",
  "2 wrongs dont make a right",
  "when in Rome do as the Romans do",
  "where theres smoke, theres fire",
  "you cant judge a book by its cover",
  "you cant make an omelette without breaking eggs",
  "you reap what you sow",
  "youre never too old to learn",
];

//1 Surasti ilgiausią stringą;

let longest = B[0];

for (let i = 0; i < B.length; i++) {
  if (B[i].length > longest.length) {
    longest = B[i];
  }
}

let longest2 = B[0];

B.forEach((str) => {
  if (str.length > longest2.length) {
    longest2 = str;
  }
});

console.log("Longest string ", longest, longest2); //you cant make an omelette without breaking eggs

//2 Surasti trumpiausią stringą;

let shortest = B[0];

for (let i = 0; i < B.length; i++) {
  if (B[i].length < shortest.length) {
    shortest = B[i];
  }
}

let shortest2 = B[0];

B.forEach((str) => {
  if (str.length < shortest2.length) {
    shortest2 = str;
  }
});

console.log("Shortest string: ", shortest, shortest2); //love is blind

//3 Surasti stringą, kuris prasideda “a” raide;

for (let i = 0; i < B.length; i++) {
  if (B[i].charAt(0) == "a" && B[i].charAt(1) == " ") {
    console.log(B[i]); // a bird in the hand , a watched pot never boils
  }
}

const startsWitha = B.forEach((str) => {
  if (str[0] == "a" && str[1] == " ") {
    console.log(str); // a bird in the hand , a watched pot never boils
  }
});

//4 Surasti stringą su daugiausia žodžių;

let maxWordsStr = B[0];

for (let i = 0; i < B.length; i++) {
  if (B[i].split(" ").length > maxWordsStr.split(" ").length) {
    maxWordsStr = B[i];
  }
}

let maxWordsStr2 = B[0];

B.forEach((str) => {
  if (str.split(" ").length > maxWordsStr2.split(" ").length) {
    maxWordsStr2 = str;
  }
});

console.log("Sentince with max words: ", maxWordsStr, maxWordsStr2); //the grass is always greener on the other side

//5 Surasti stringą su mažiausiai žodžių;

let leastWords = B[0];

for (let i = 0; i < B.length; i++) {
  if (B[i].split(" ").length < leastWords.split(" ").length) {
    leastWords = B[i];
  }
}

let leastWords2 = B[0];
B.forEach((str) => {
  if (str.split(" ").length < leastWords2.split(" ").length) {
    leastWords2 = str;
  }
});
console.log("Sentince with min words: ", leastWords, leastWords2); // haste makes waste

//6 Suskaičiuoti kiek stringų turi daugiau nei 4 žodžius;

let moreThanFour = 0;

for (let i = 0; i < B.length; i++) {
  if (B[i].split(" ").length > 4) {
    moreThanFour++;
  }
}

let moreThanFour2 = 0;

B.forEach((str) => {
  if (str.split(" ").length > 4) {
    moreThanFour2++;
  }
});

console.log("Have more than 4 words ", moreThanFour, moreThanFour2); //36

//7 Suskaičiuoti kiek masyve yra žodžių;

let words = 0;

for (let i = 0; i < B.length; i++) {
  words += B[i].split(" ").length;
}

let words2 = 0;

B.forEach((str) => {
  words2 += str.split(" ").length;
});

console.log("Words in array ", words, words2); // 280

//8 Suskaičiuoti visas ‘s’ raides;

let sCount = 0;

for (let i = 0; i < B.length; i++) {
  for (let j = 0; j < B[i].length; j++) {
    if (B[i][j] == "s" || B[i][j] == "S") {
      sCount++;
    }
  }
}

let sCount2 = 0;

B.forEach((str) => {
  [...str].forEach((char) => {
    if (char == "s" || char == "S") {
      sCount2++;
    }
  });
});

console.log("Letter 's' count ", sCount, sCount2); // 83

//9 Suskaičiuoti kiek masyve yra raidžių (tarpų tarp žodžių neskaičiuoti!);

let countAllLetters = 0;

for (let i = 0; i < B.length; i++) {
  countAllLetters += B[i].split(" ").join("").length;
}

let countAllLetters2 = 0;

B.forEach((str) => {
  countAllLetters2 += str.split(" ").join("").length;
});

console.log("Letters in array ", countAllLetters, countAllLetters2); // 1155

//10 Surasti ilgiausią žodį (ne stringą, o atskirą stringo žodį!);

let longestWord = "";

for (let i = 0; i < B.length; i++) {
  const words = B[i].split(" ");
  for (let j = 0; j < words.length; j++) {
    if (words[j].length > longestWord.length) {
      longestWord = words[j];
    }
  }
}
let longestWord2 = "";

B.forEach((str) => {
  const words = str.split(" ");
  words.forEach((word) => {
    if (word.length > longestWord2.length) {
      longestWord2 = word;
    }
  });
});

console.log("Longest word in array ", longestWord, longestWord2); // cleanliness
