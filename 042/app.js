const obj = { animal: "fox", tail: "30" };

class Fox {
  constructor(tail, c) {
    this.tail = tail;
    this.color = c;
  }

  name(params) {
    return "hello " + params;
  }
  add10() {
    this.tail += 10;
  }
}

const obj2 = new Fox(30, "white");
const obj3 = new Fox(50, "black");

obj3.add10();

console.log(obj2.name("peter"));

console.log(obj, obj2, obj3);
