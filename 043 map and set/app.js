const arr = [];

arr.push("cat");
arr.push("dog");

console.log(arr);

const map = new Map();

map.set("a", "cat");
map.set("b", "dog");
map.set("c", "fox");

console.log(map, map.get("c"), map.has("a"), map.size);

map.forEach((v, i) => console.log(i, v));

const arrFromMap = [...map];
console.log(arrFromMap);

const map2 = new Map(arrFromMap);
console.log(map2);

const set = new Set();

set.add("cat");
set.add("dog");
set.add("sheep");

set.add("cat");

console.log(set);

class Fox {
  static allAge = 0;
  static allFoxes = 0;
  constructor(color) {
    this.color = color;
    this.age = 0;
    Fox.allFoxes++;
  }

  foxAge(age) {
    this.age = age;
    Fox.allAge += age;
  }
}

const fox1 = new Fox("brown");
const fox2 = new Fox("black");
const fox3 = new Fox("red");

fox1.foxAge(5);
fox2.foxAge(3);
fox3.foxAge(4);

const div = document.querySelector("div");

div.innerHTML = fox1.age;

console.log(fox1, fox2);
console.log(Fox.allFoxes);
console.log("Average: ", Fox.allAge / Fox.allFoxes);
