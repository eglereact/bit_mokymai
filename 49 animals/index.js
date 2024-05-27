const express = require("express");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");
const animalZoo = require("./data/animals");
const cookieParser = require("cookie-parser");
const app = express();
const port = 80;

app.use(express.static("public"));
app.use(cookieParser());
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

const addMessage = (id, text, type) => {
  let data = fs.readFileSync("./data/sessions.json", "utf8");
  data = JSON.parse(data);
  data = data.map((s) =>
    s.id === id
      ? { id, d: { ...s.d, msgs: [...(s.d.msgs || []), { text, type }] } }
      : s
  );
  data = JSON.stringify(data);
  fs.writeFileSync("./data/sessions.json", data);
};

const showMessage = (id) => {
  let data = fs.readFileSync("./data/sessions.json", "utf8");
  data = JSON.parse(data);
  const session = data.find((s) => s.id === id);
  if (!session || !session.d?.msgs) {
    return "";
  }
  const messagesHtml = session.d.msgs
    .map(
      (msg) =>
        `<div class="mt-3 alert w-50 alert-${msg.type}" role="alert">${msg.text}</div>`
    )
    .join("");
  session.d.msgs = []; // Clear messages after showing them
  data = JSON.stringify(data);
  fs.writeFileSync("./data/sessions.json", data);
  return messagesHtml;
};

const addOld = (id, old) => {
  let data = fs.readFileSync("./data/sessions.json", "utf8");
  data = JSON.parse(data);
  data = data.map((s) => (s.id === id ? { id, d: { ...s.d, old } } : s));
  data = JSON.stringify(data);
  fs.writeFileSync("./data/sessions.json", data);
};

const showOld = (id, html) => {
  const allOlds = ["name", "species", "age"];
  let data = fs.readFileSync("./data/sessions.json", "utf8");
  data = JSON.parse(data);
  const session = data.find((s) => s.id === id);
  if (!session || !session.d?.old) {
    allOlds.forEach((o) => {
      html = html.replace(`{{${o}}}`, "");
    });
  } else {
    for (const k in session.d.old) {
      html = html.replace(`{{${k}}}`, session.d.old[k]);
    }
    delete session.d.old;
    data = JSON.stringify(data);
    fs.writeFileSync("./data/sessions.json", data);
  }
  return html;
};

app.use((req, res, next) => {
  const id = req.cookies.ANIMALS || "";
  let data = fs.readFileSync("./data/sessions.json", "utf8");
  data = JSON.parse(data);
  if (!id) {
    const newId = uuidv4();
    data.push({ id: newId, d: {} });
    data = JSON.stringify(data);
    fs.writeFileSync("./data/sessions.json", data);
    res.cookie("ANIMALS", newId, {
      maxAge: 24 * 60 * 60 * 1000,
    });
    req.sessionsId = newId;
  } else {
    let session = data.find((s) => s.id === id);
    if (!session) {
      const newId = uuidv4();
      data.push({ id: newId, d: {} });
      data = JSON.stringify(data);
      fs.writeFileSync("./data/sessions.json", data);
      res.cookie("ANIMALS", newId, {
        maxAge: 24 * 60 * 60 * 1000,
      });
      req.sreq.sessionsId = newId;
    } else {
      req.sessionsId = id;
      res.cookie("ANIMALS", id, {
        maxAge: 24 * 60 * 60 * 1000,
      });
    }
  }
  next();
});

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
  html = html
    .replace("{{LI}}", listItems)
    .replace("{{NAV}}", nav)
    .replace("{{MSG}}", showMessage(req.sessionsId));

  res.send(html);
});

app.get("/create", (req, res) => {
  let html = fs.readFileSync("./data/create.html", "utf8");
  let nav = fs.readFileSync("./data/nav.html", "utf8");
  let data = fs.readFileSync("./data/animals.json", "utf8");
  data = JSON.parse(data);
  html = html
    .replace("{{NAV}}", nav)
    .replace("{{MSG}}", showMessage(req.sessionsId));
  html = showOld(req.sessionsId, html);
  res.send(html);
});

app.post("/store", (req, res) => {
  const name = req.body.name;
  const species = req.body.species;
  const age = parseInt(req.body.age);

  if (name.length < 3) {
    addMessage(req.sessionsId, "Name is too short", "danger");
    addOld(req.sessionsId, { name, species, age: req.body.age });
  }

  if (species.length < 3) {
    addMessage(req.sessionsId, "Species is too short", "danger");
    addOld(req.sessionsId, { name, species, age: req.body.age });
  }

  if (isNaN(age) || age < 0) {
    addMessage(req.sessionsId, "Age must be a positive number", "danger");
    addOld(req.sessionsId, { name, species, age: req.body.age });
  }

  // Check for duplicate animal
  let data = fs.readFileSync("./data/animals.json", "utf8");
  const animals = JSON.parse(data);
  const duplicateAnimal = animals.find(
    (animal) => animal.name.toLowerCase() === name.toLowerCase()
  );

  if (duplicateAnimal) {
    addMessage(req.sessionsId, "This animal already exists", "danger");
    addOld(req.sessionsId, { name, species, age: req.body.age });
  }

  // If any validation fails, redirect back to the create page
  if (
    name.length < 3 ||
    species.length < 3 ||
    isNaN(age) ||
    age < 0 ||
    duplicateAnimal
  ) {
    res.redirect(302, "http://animals.test/create")?.end();
    return;
  }

  // Add new animal if no validation errors
  const id = uuidv4();
  animals.push({ id, name, species, age });
  data = JSON.stringify(animals);
  fs.writeFileSync("./data/animals.json", data);

  addMessage(req.sessionsId, `New animal was added`, "success");
  res.redirect(302, "http://animals.test/");
});

app.listen(port, () => {
  console.log(`049 app listening on port ${port}`);
});
