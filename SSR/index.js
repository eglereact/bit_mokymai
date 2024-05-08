const express = require("express");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");
const app = express();
const port = 80;

app.use(express.static("public"));
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const fs = require("node:fs");

app.post("/add-animal", (req, res) => {
  const animal = req.body.animal;
  const id = uuidv4();

  let data = fs.readFileSync("./data/animals.json", "utf8");
  data = JSON.parse(data);
  data.push({ id, animal });
  data = JSON.stringify(data);
  fs.writeFileSync("./data/animals.json", data);
  // res.json({ message: "OK" });
  res.redirect(302, "http://localhost");
});

app.get("/get-animals", (req, res) => {
  let data = fs.readFileSync("./data/animals.json", "utf8");

  data = JSON.parse(data);
  const sort = req.query.sort;
  if (sort === "asc") {
    data.sort((a, b) => a.animal.localeCompare(b.animal));
  } else if (sort === "desc") {
    data.sort((a, b) => b.animal.localeCompare(a.animal));
  }
  res.json({ message: "OK", animals: data });
});

app.get("/show-animal/:uuid", (req, res) => {
  let html = fs.readFileSync("./data/animal.html", "utf8");
  let data = fs.readFileSync("./data/animals.json", "utf8");
  data = JSON.parse(data);
  const animal = data.find((a) => a.id === req.params.uuid);
  html = html.replace("{{ANIMAL}}", animal.animal);
  res.send(html);
});

app.get("/", (req, res) => {
  let html = fs.readFileSync("./data/index.html", "utf8");
  let data = fs.readFileSync("./data/animals.json", "utf8");
  data = JSON.parse(data);
  const sort = req.query.sort;
  if (sort === "asc") {
    data.sort((a, b) => a.animal.localeCompare(b.animal));
  } else if (sort === "desc") {
    data.sort((a, b) => b.animal.localeCompare(a.animal));
  }
  let list = "";
  data.forEach((a) => {
    list += `
                <li>
                    <span>${a.animal}</span>
                    <a href="http://localhost/show-animal/${a.id}">show</a>
                </li>
                `;
  });

  html = html.replace("{{LIST}}", list);
  res.send(html);
});

app.listen(port, () => {
  console.log(`035 app listening on port ${port}`);
});
