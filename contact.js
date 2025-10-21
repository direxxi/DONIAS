// Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.getElementById("mobile-menu");
const spans = hamburger.querySelectorAll("span");

hamburger.addEventListener("click", function () {
  const isHidden = mobileMenu.classList.contains("hidden");
  mobileMenu.classList.toggle("hidden");

  if (isHidden) {
    spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
    spans[1].style.opacity = "0";
    spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)";
  } else {
    spans[0].style.transform = "";
    spans[1].style.opacity = "";
    spans[2].style.transform = "";
  }
});
