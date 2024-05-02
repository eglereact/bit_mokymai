import axios from "axios";
import { error } from "laravel-mix/src/Log";

window.addEventListener("load", () => {
  const name = document.querySelector(`[name="name"]`);
  const surname = document.querySelector(`[name="surname"]`);
  const button1 = document.querySelector("#params");
  const button2 = document.querySelector("#query");
  const button3 = document.querySelector("#body");
  const h2 = document.querySelector("h2");

  button1.addEventListener("click", () => {
    const data = {
      name: name.value,
      surname: surname.value,
    };

    axios
      .get(`http://localhost/params/${data.name}/${data.surname}`)
      .then((res) => {
        console.log(res.data);
        h2.innerText = `${res.data.got.name} ${res.data.got.surname}`;
      })
      .catch((error) => console.log(error));
  });

  button2.addEventListener("click", () => {
    const data = {
      name: name.value,
      surname: surname.value,
    };

    axios
      .get(`http://localhost/query?n=${data.name}&s=${data.surname}`)
      .then((res) => {
        console.log(res.data);
        h2.innerText = `${res.data.got.name} ${res.data.got.surname}`;
      })
      .catch((error) => console.log(error));
  });
  button3.addEventListener("click", () => {
    const data = {
      name: name.value,
      surname: surname.value,
    };

    axios
      .post(`http://localhost/body`, data)
      .then((res) => {
        console.log(res.data);
        h2.innerText = `${res.data.got.name} ${res.data.got.surname}`;
      })
      .catch((error) => console.log(error));
  });
});
