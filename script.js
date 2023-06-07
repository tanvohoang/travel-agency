window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
