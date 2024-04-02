console.log("hello");

// 1. Sukurti funkciją blueDash, kuri atspausdina 10 mėlynų brūkšnelių. Tą funkciją iškviesti 10 kartų.

const blueDash = () => {
  console.log("%c-----------", `color: blue; font-size: 30px;`);
};

for (let i = 0; i < 10; i++) {
  blueDash();
}

//2. Parašyti funkciją, kuri gauna skaičių ir atrspausdina to skaičiaus sandauga su 6.

const multipyBySix = (a) => {
  console.log(a * 6);
};

multipyBySix(5);
multipyBySix(3);
multipyBySix(1);

console.clear();

// 3. Parašyti funkciją, kuri gauna skaičių ir grąžina to skaičiaus kvadratą.

const kvadratas = (a) => {
  return a * a;
};

console.log(kvadratas(2));
console.log(kvadratas(4));
console.log(kvadratas(5));
