function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", (_) => {
  //
  const animals = document.querySelectorAll(".test ul li");

  animals.forEach((element) => {
    console.log(element.innerText);
  });

  //    const ul = document.querySelector(".test ul");
  //    const newDiv = document.createElement("li");
  //    newDiv.textContent = "Beaver";
  //    ul.appendChild(newDiv);
  //  ul.innerHTML = ul.innerHTML + `<li>Cat</li>`;
  const bigCat = document.querySelector(".test ul li:last-child");
  bigCat.insertAdjacentHTML("afterend", `<li>Beaver</li>`);

  // Select all elements again
  const animals2 = document.querySelectorAll(".test ul li");

  animals2.forEach((element, i) => {
    if (i % 2 == 0) {
      element.style.color = "skyblue";
    } else {
      element.style.fontSize = "20px";
    }
  });

  animals2.forEach((element, i) => {
    if (element.innerText === "Racoon" || element.innerText === "Fox") {
      element.innerText += "----*";
    }
  });

  const btnPress = document.querySelector("button");

  btnPress.addEventListener("click", (e) => {
    console.log("Pressed");
  });

  btnPress.addEventListener("mouseenter", (e) => {
    console.log("hover");
  });
  let count = 0;
  const red = document.querySelector(".red");
  const number = document.querySelector(".red span");

  red.addEventListener("click", (_) => {
    if (red.dataset.squareColor == "blue") {
      red.dataset.squareColor = "red";
      red.style.backgroundColor = "#dc143c66";
      red.style.borderColor = "#dc143c";
    } else {
      red.dataset.squareColor = "blue";
      red.style.backgroundColor = "#87ceeb66";
      red.style.borderColor = "#87ceeb";
    }
    count++;
    number.innerText = count;
  });
  //double click sets to 0
  red.addEventListener("dblclick", () => {
    count = 0;
    number.innerText = count;
  });
});
