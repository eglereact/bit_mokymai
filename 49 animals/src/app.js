import "bootstrap";

window.addEventListener("load", () => {
  const alerts = document.querySelectorAll(".alert");
  if (alerts.length > 0) {
    setTimeout(() => {
      alerts.forEach((alert) => alert.remove());
    }, 5000);
  }
});
