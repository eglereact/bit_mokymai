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
      price: price,
      amount: amount,
      total: total,
    };
    productsArr.push(product);
  }
  let productsTotal = productsArr.reduce((sum, p) => sum + p.total, 0);
  return { products: productsArr, total: productsTotal };
};

//1 Sukurti 100 sąskaitų masyvą.
let saskaitos = [];

for (let i = 1; i <= 10; i++) {
  let saskaita = {
    number: i < 10 ? "INV00" + i : i < 100 ? "INV0" + i : "INV" + i,
    products: randomProducts().products,
    total: randomProducts().total,
    vat: 45,
    grandTotal: 1552,
  };
  saskaitos.push(saskaita);
}

console.log(saskaitos);
