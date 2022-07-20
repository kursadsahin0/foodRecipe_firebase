const modalBtn = document.getElementById("modal-open");
const modal = document.querySelector(".modals");
const modalKapat = document.getElementById("modal-close");

modalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

modalKapat.addEventListener("click", () => {
  modal.style.display = "none";
});