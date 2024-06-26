console.log("hello");

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Game 01

//Žaidimo ekranas sudarytas iš dviejų kvadratų, mygtukų “start” ir “reset” ir laikmačio, skaičiuojančio sekundes.

//Kvadratai sudaryti iš 25 mažesnių kvadratukų ir sudaro matricą 5X5. Abu kvadratai žaidimo pradžioje tušti.
// Paspaudus “start” mygtuką įsijungia laikmatis, o kairysis kvadratas užpildomas spalvotais rutuliukais su
//skaičiais nuo 1 iki 25. Spalvos ir rutuliukų išdėliojimas atsitiktiniai. Žaidimo tikslas rutuliukus sudėlioti
// iš eilės (1,2,3…) perkeliant juos iš kairiojo kvadrato į dešinį. Spaudžiant ant rutuliuko kairiajame kvadrate,
//rutuliukas pereina į dešinį. Dešiniajame kvadrate rutuliukai dėliojami tik iš eilės. Pirmiausia reikia perkelti
//rutuliuką su skaičiumi 1 toliau su skaičiumi 2 ir t.t. Bandant perkelti rutuliuką ne iš eilės, turi trumpam
//atsirasti pranešimas apie pasirinktą netinkamą rutuliuką. Žaidimas pasibaigia perkėlus paskutinį, 25 rutuliuką.
// Laikmatis sustabdomas. Paspaudus mygtuką “reset”, abu kvadratai ištuštinami, o laikmatis padaromas 0.

const start = document.querySelector(".start");
const reset = document.querySelector(".reset");
const left = document.querySelector(".left");
const rigth = document.querySelector(".right");
const msg = document.querySelector(".msg");
const timerDiv = document.querySelector("#timer");
const fail = document.querySelector(".fails");
const gz = document.querySelector(".gz");

let currentNumber = 1;
let cron;
let minute = 0;
let second = 0;
let millisecond = 0;
let fails = 0;

function timer() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }

  document.getElementById("minute").innerText = returnData(minute);
  document.getElementById("second").innerText = returnData(second);
  document.getElementById("millisecond").innerText = returnData(millisecond);
}

function returnData(input) {
  return input > 10 ? input : `0${input}`;
}

reset.addEventListener("click", () => {
  cron = clearInterval(cron);
  left.replaceChildren();
  rigth.replaceChildren();
  start.disabled = false;
  msg.classList.remove("show");
  msg.classList.add("msg");
  currentNumber = 1;
  minute = 0;
  second = 0;
  millisecond = 0;
  document.getElementById("minute").innerText = "00";
  document.getElementById("second").innerText = "00";
  document.getElementById("millisecond").innerText = "000";
  gz.classList.remove("show-gz");
  fails = 0;
  fail.innerText = "0";
  fail.style.color = "black";
});

start.addEventListener("click", (e) => {
  cron = setInterval(() => {
    timer();
  }, 10);
  let numbers = [];
  // Fill the array with numbers from 1 to 25
  for (let i = 1; i <= 25; i++) {
    numbers.push(i);
  }
  let colors = [
    "AntiqueWhite ",
    "Coral",
    "CadetBlue",
    "CornflowerBlue ",
    "DarkGrey ",
    "DarkSeaGreen",
    "LightPink",
    "HoneyDew",
    "Khaki",
    "Lavender",
    "LightCyan",
    "MediumTurquoise",
    "NavajoWhite",
    "PaleVioletRed",
    "RosyBrown",
    "SkyBlue",
  ];
  // Shuffle the array
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }

  for (let i = 0; i < 25; i++) {
    const ball = document.createElement("div");
    const number = document.createTextNode(numbers[i]);
    ball.classList.add(`ball${numbers[i]}`);
    left.appendChild(ball);
    ball.appendChild(number);
    ball.style.backgroundColor = colors[rand(0, colors.length - 1)];
    ball.addEventListener("click", (e) => {
      e.stopPropagation();

      const clickedNumber = parseInt(e.target.innerText);
      if (clickedNumber === currentNumber) {
        currentNumber++; // Increment the current expected number

        e.target.style.visibility = "hidden";
        const clonedDiv = e.target.cloneNode(true);
        clonedDiv.style.visibility = "visible"; // Make the cloned div visible
        rigth.appendChild(clonedDiv);
        msg.classList.remove("show");
        msg.classList.add("msg");
        if (currentNumber == 26) {
          cron = clearInterval(cron);
          gz.classList.add("show-gz");
        }
      } else {
        msg.classList.add("show");
        fails++;
        if (fails > 0) {
          fail.style.color = "crimson";
        }
        msg.classList.remove("msg");
        fail.innerText = fails;
      }
    });
  }

  start.disabled = true; // stop creating more balls
});
