const navbar = document.querySelector("#NavBar");

let navtop = navbar.offsetTop;

function stickynavbar() {
  if (window.scrollY >= navtop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
window.addEventListener("scroll", stickynavbar);
