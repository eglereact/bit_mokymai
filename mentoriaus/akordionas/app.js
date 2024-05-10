const accordions = document.querySelectorAll(".accordion");

accordions.forEach((a) => {
  a.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("active");
    const desc = event.currentTarget.nextElementSibling;
    if (desc.style.maxHeight) {
      desc.style.maxHeight = null;
    } else {
      desc.style.maxHeight = desc.scrollHeight + "px";
    }
  });
});
