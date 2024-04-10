function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", (_) => {
  //   const h1 = document.querySelector("body");
  //   h1.innerHTML = rand(0, 1) ? `<h1>Dom 2</h1>` : `<h2>Sub Dom 2</h2>`;
  //   if (document.querySelector("h1")) {
  //     document.querySelector("h1").innerHTML = `<span>Valio</span`;
  //   }
  //   if (document.querySelector("h2")) {
  //     document.querySelector("h2").innerHTML = `<span>Valio</span`;
  //   }

  const animals = document.querySelectorAll(".animals span");

  animals.forEach((element) => {
    console.log(element.textContent + "***");
  });

  const animalArray = [...animals];
  console.log(animalArray);

  animals.forEach((a) => a.innerText == "Rabbit" && (a.innerText = "Bunny"));

  const h1 = document.querySelector("h1");

  h1.style.color = "skyblue";
  h1.style.fontSize = "50px";

  //   setInterval(() => {
  //     h1.style.color = h1.style.color == "skyblue" ? "red" : "skyblue";
  //   }, 1000);
  const bin = document.querySelector(".bin");
  let divs = "";

  for (let i = 0; i < 222; i++) {
    divs += `<div></div>`;
  }

  bin.innerHTML = divs;
  const balls = document.querySelectorAll(".bin div");
  const ballGo = () => {
    balls.forEach((b) => {
      b.style.top = rand(0, 450) + "px";
      b.style.left = rand(0, 450) + "px";
    });
  };

  setInterval(ballGo, 500);
});
