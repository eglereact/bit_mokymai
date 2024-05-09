const button = document.querySelector("button");
const text = document.querySelector("p");
const url = "https://api.chucknorris.io/jokes/random";

const getJoke = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const value = data.value;
      text.innerText = value;
    });
};

button.addEventListener("click", getJoke);
