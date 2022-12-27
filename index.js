// NavBar
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navBarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navBarLinks.classList.toggle("active");
});

const contentTitle = document.getElementsByClassName("content-title")[0];

contentTitle.addEventListener("click", () => {
  console.log("The Title was clicked");
});
