console.log("Welcome to DOM! IV");

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", (_) => {
  const animals = [
    { animal: "Racoon", color: "skyblue" },
    { animal: "Fox", color: "orange" },
    { animal: "Wolf", color: "gray" },
    { animal: "Rabbit", color: "pink" },
  ];
  const test = document.querySelector(".test");

  //   const listItems = animals.map(
  //     (animal) => `<li style="color: ${animal.color};">${animal.animal}</li>`
  //   );
  //   test.innerHTML = `<ul>${listItems.join("")}</ul>`;

  //   let list = "";

  //   animals.forEach((a) => {
  //     list += `<li style="color:${a.color};" >${a.animal}</li>`;
  //   });

  //test.innerHTML = `<ul>${list}</ul>`;
  test.classList.add("back");
  test.classList.remove("test");

  console.log(test.classList.contains("test"));
  console.log(test.classList.contains("back"));

  //   setInterval(() => {
  //     test.classList.toggle("back");
  //   }, 1000);

  const top = document.querySelector(".top");
  //   top.innerHTML = `<h1>Labas</h1>`;
  //   const h1 = document.createElement("h1");
  //   const text = document.createTextNode("Labas");
  //   h1.appendChild(text);
  //   top.appendChild(h1);

  //console.log(h1);

  const ul = document.createElement("ul");
  animals.forEach((animal) => {
    const li = document.createElement("li");
    const text = document.createTextNode(`${animal.animal}`);
    li.style.color = animal.color;
    li.appendChild(text);
    ul.appendChild(li);
  });
  top.appendChild(ul);
});
