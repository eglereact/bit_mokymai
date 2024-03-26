function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const products = [
  "Dviratis",
  "Triratis",
  "Žvakidė",
  "Stalas",
  "Kėdė",
  "Knygų lentyna",
  "Paveikslas su rėmu",
  "Veidrodis",
  "Keturių vietų palapinė",
  "Pripučiama valtis",
  "Meškerė karosams gaudyti",
  "Planšetė",
  "Pastatoma lempa",
  "Vazonas",
  "Baterijų pakrovėjas",
  "Pagalvių komplektas",
  "Oro drėkintuvas",
  "Oro sausintuvas",
  "Kavinukas elektrinis",
  "Kilimas 2 X 3 metrų",
  "Kilimėlis kojoms valyti",
  "Užuolaidos",
  "Vėjo malūnas",
  "Dažai sienoms",
  "Dažai luboms",
  "Medinė dėžė",
];

const randomProducts = () => {
  let productsArr = [];

  for (let i = 0; i < rand(1, 10); i++) {
    let price = rand(1, 100).toFixed(2);
    let amount = rand(1, 20);
    let total = price * amount;
    let product = {
      title: products[Math.floor(Math.random() * products.length)],
      price: parseInt(price),
      amount: amount,
      total: total,
    };
    productsArr.push(product);
  }
  let productsTotal = 10;

  for (let i = 0; i < productsArr.length; i++) {
    productsTotal += productsArr[i].total;
  }

  return { products: productsArr, totalSum: productsTotal };
};

//A Sukurti 100 sąskaitų masyvą.
let saskaitos = [];

for (let i = 1; i <= 10; i++) {
  let { products: productsNew, totalSum: total } = randomProducts();
  let saskaita = {
    number: i < 10 ? "INV00" + i : i < 100 ? "INV0" + i : "INV" + i,
    products: productsNew,
    total: total,
    vat: parseInt((total * 0.21).toFixed(2)),
    grandTotal: total + parseInt((total * 0.21).toFixed(2)),
  };
  saskaitos.push(saskaita);
}

console.log(saskaitos);

//B Sugeneruotame (ne generavimo metu!) masyve paskaičiuoti ir konsolėje atspausdinti visų sąskaitų grandTotal sumą,
// produktų sąrašą prie kiekvieno produkto pavadinimo pridedant koks to produkto kiekis yra visose sąskaitose bendrai ir už kokią bendrą sumą.
