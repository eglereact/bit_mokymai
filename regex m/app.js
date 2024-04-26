const input = document.querySelector(".input-text");
const btn = document.querySelector(".btn");
const text = document.querySelector(".result");

const countVowel = () => {
  let count = 0;
  const value = input.value.toLowerCase();
  let regex = /^[aeiou]$/i;
  for (let i = 0; i < value.length; i++) {
    const letter = value[i];
    if (letter.match(regex)) {
      count++;
    }
  }
  text.innerText = `${value} has ${count} vowels`;
};

btn.addEventListener("click", countVowel);
