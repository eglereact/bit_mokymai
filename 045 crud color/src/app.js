import "bootstrap";

window.addEventListener("load", () => {
  if (document.querySelector(".alert")) {
    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 2000);
  }
});
