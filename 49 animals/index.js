const express = require("express");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");
const app = express();
const port = 80;

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const fs = require("node:fs");
const animalZoo = [
  { name: "Lion", species: "Panthera leo", age: 10 },
  { name: "Tiger", species: "Panthera tigris", age: 12 },
  { name: "Elephant", species: "Loxodonta africana", age: 15 },
  { name: "Giraffe", species: "Giraffa camelopardalis", age: 20 },
  { name: "Zebra", species: "Equus zebra", age: 8 },
  { name: "Hippopotamus", species: "Hippopotamus amphibius", age: 25 },
  { name: "Crocodile", species: "Crocodylus niloticus", age: 30 },
  { name: "Flamingo", species: "Phoenicopterus", age: 5 },
  { name: "Penguin", species: "Aptenodytes forsteri", age: 3 },
  { name: "Kangaroo", species: "Macropus", age: 7 },
  { name: "Koala", species: "Phascolarctos cinereus", age: 4 },
  { name: "Kookaburra", species: "Dacelo novaeguineae", age: 2 },
  { name: "Platypus", species: "Ornithorhynchus anatinus", age: 6 },
  { name: "Wallaby", species: "Macropus", age: 5 },
  { name: "Dingo", species: "Canis lupus dingo", age: 8 },
];

fs.writeFileSync("./data/animals.json", JSON.stringify(animalZoo));

app.get("/", (req, res) => {
  let html = fs.readFileSync("./data/index.html", "utf8");
  data = fs.readFileSync("./data/animals.json", "utf8");
  data = JSON.parse(data);
  const listItem = fs.readFileSync("./data/listItem.html", "utf8");
  let listItems = "";
  data.forEach((li) => {
    let liHtml = listItem;
    liHtml = liHtml
      .replaceAll("{{ID}}", li.id)
      .replace("{{NAME}}", li.name)
      .replace("{{SPECIES}}", li.species)
      .replace("{{AGE}}", li.age);
    listItems += liHtml;
  });
  html = html.replace("{{LI}}", listItems);

  res.send(html);
});

app.listen(port, () => {
  console.log(`049 app listening on port ${port}`);
});
