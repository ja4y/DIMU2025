const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("open"); // X-muoto
  navMenu.classList.toggle("open"); // Näytä/piilota navigaatio
});
