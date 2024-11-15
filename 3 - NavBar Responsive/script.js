const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".navigation");
const navLinks = document.querySelectorAll(".navigation a");

function toggleMenu() {
  navigation.classList.toggle("open");
  menuButton.classList.toggle("active");
}

menuButton.addEventListener("click", toggleMenu);

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navigation.classList.contains("open")) {
      toggleMenu();
    }
  });
});
