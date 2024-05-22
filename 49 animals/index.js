const express = require("express");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");
const animalZoo = require("./data/animals");
const app = express();
const port = 80;

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const fs = require("node:fs");

const compareByName = (a, b) => {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
};

if (!fs.existsSync("./data/animals.json")) {
  fs.writeFileSync("./data/animals.json", JSON.stringify(animalZoo));
}

app.get("/", (req, res) => {
  let html = fs.readFileSync("./data/index.html", "utf8");
  let nav = fs.readFileSync("./data/nav.html", "utf8");
  data = fs.readFileSync("./data/animals.json", "utf8");
  data = JSON.parse(data).sort(compareByName);
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
  html = html.replace("{{LI}}", listItems).replace("{{NAV}}", nav);

  res.send(html);
});

app.get("/create", (req, res) => {
  let html = fs.readFileSync("./data/create.html", "utf8");
  let nav = fs.readFileSync("./data/nav.html", "utf8");
  let data = fs.readFileSync("./data/animals.json", "utf8");
  data = JSON.parse(data);
  html = html.replace("{{NAV}}", nav);
  res.send(html);
});

app.post("/store", (req, res) => {
  const name = req.body.name;
  const species = req.body.species;
  const age = parseInt(req.body.age);
  const id = uuidv4();

  let data = fs.readFileSync("./data/animals.json", "utf8");
  data = JSON.parse(data);
  data.push({ id, name, species, age });
  data = JSON.stringify(data);
  fs.writeFileSync("./data/animals.json", data);
  res.redirect(302, "http://animals.test/");
});

app.listen(port, () => {
  console.log(`049 app listening on port ${port}`);
});
