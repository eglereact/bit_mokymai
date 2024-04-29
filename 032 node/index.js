const express = require("express");
const app = express();
const port = 80;

app.get("/", (req, res) => {
  const content = `<h1>Bla bla</h1>`
  res.send(content);
});

app.get("/bebras", (req, res) => {
  const content = `<h1>Labas bebrai</h1>`
  res.send(content);
});

app.get("/zveris/:animal", (req, res) => {
  const animal = req.params.animal;
  const content = `<h1>Labas ${animal}</h1>`
  res.send(content);
});


app.listen(port, () => {
  console.log(`Zoologijos sodas veikia ant ${port} porto`);
});
