const express = require("express");
const app = express();
const port = 80;
app.use(express.static("public"));

app.get("/", (req, res) => {
  const content = `<h1>Bla bla</h1>`;
  res.send(content);
});

app.get("/bebras", (req, res) => {
  const content = `<h1>Labas bebrai</h1>`;
  res.send(content);
});

app.get("/zveris/:animal/:color", (req, res) => {
  const animal = req.params.color;
  const content = `<h1>Labas ${animal}</h1>`;
  res.send(content);
});

// Padaryti sumatorių, kuris rodytų sumą bet kokių skaičių užrašytų pvz taip: localhost/sum/58/32

app.get("/sum/:one/:two", (req, res) => {
  const one = req.params.one;
  const two = req.params.two;
  const content = `<h1> ${parseInt(one) + parseInt(two)}</h1>`;
  res.send(content);
});

// Padaryti sumatorių, kuris rodytų sumą bet kokių skaičių užrašytų pvz taip: localhost/sum/58/plus/32

app.get("/sum/:one/plus/:two", (req, res) => {
  const one = req.params.one;
  const two = req.params.two;
  const content = `<h1> ${parseInt(one) + parseInt(two)}</h1>`;
  res.send(content);
});
// Padaryti sumatorių, kuris rodytų rezultatą bet kokių skaičių užrašytų pvz taip: localhost/calc/58/plus/32 rodytų sumą, localhost/calc/58/minus/32 rodytų skirtumą
app.get("/calc/:one/:par/:two", (req, res) => {
  const one = parseInt(req.params.one);
  const two = parseInt(req.params.two);
  const par = req.params.par;
  let result;

  if (par === "plus") {
    result = one + two;
  } else if (par === "minus") {
    result = one - two;
  } else if (par === "multi") {
    result = one * two;
  } else if (par === "div") {
    result = one / two;
  } else {
    result = "Unsupported operation";
  }
  const content = `<h1> ${result}</h1>`;
  res.send(content);
});

//http://localhost/narve?sedi=karve

app.get("/narve", (req, res) => {
  const kas = req.query.sedi;
  const kas2 = req.query.guli;
  const content = `<h1>Sedi:  ${kas}, guli: ${kas2}</h1>`;
  res.send(content);
});

// Padaryti sumatorių, kuris rodytų sumą bet kokių viejų skaičių kurie yra perduodami per query iš url: localhost/sumatorius
//http://localhost/sumatorius?one=13&two=14
app.get("/sumatorius", (req, res) => {
  const one = parseInt(req.query.one);
  const two = parseInt(req.query.two);
  const content = `<h1>Suma:  ${one + two}</h1>`;
  res.send(content);
});

app.listen(port, () => {
  console.log(`Zoologijos sodas veikia ant ${port} porto`);
});
