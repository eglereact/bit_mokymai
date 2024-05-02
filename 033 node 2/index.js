const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 80;

app.use(express.static("public"));
app.use(bodyParser.json());
app.get("/params/:name/:surname", (req, res) => {
  const name = req.params.name;
  const surname = req.params.surname;
  res.json({
    message: "OK",
    got: {
      name,
      surname,
    },
  });
});

app.get("/query", (req, res) => {
  const name = req.query.n;
  const surname = req.query.s;
  res.json({
    message: "OK",
    got: {
      name,
      surname,
    },
  });
});

app.post("/body", (req, res) => {
  const name = req.body.name;
  const surname = req.body.surname;
  res.json({
    message: "OK",
    got: {
      name,
      surname,
    },
  });
});

app.listen(port, () => {
  console.log(`033 app listening on port ${port}`);
});
