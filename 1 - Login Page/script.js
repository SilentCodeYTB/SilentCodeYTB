document.addEventListener("DOMContentLoaded", function () {
  let signupButton = document.querySelector(".signup-button");
  let signinButton = document.querySelector(".signin-button");
  signupButton.addEventListener("click", toggleRotation);
  signinButton.addEventListener("click", toggleRotation);
});

function toggleRotation() {
  let container = document.querySelector(".container");
  container.classList.toggle("clicked");
}
