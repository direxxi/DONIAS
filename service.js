document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".ul");
    const navLinks = document.querySelectorAll(".ul li a");
    const dropdownParents = document.querySelectorAll(".dropdown-parent");
  
    // Open/close hamburger menu
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("show");
      hamburger.classList.toggle("open");
    });
  
    // Close nav when clicking any link (optional — keep if desired)
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        if (!link.closest(".dropdown-parent")) {
          navMenu.classList.remove("show");
          hamburger.classList.remove("open");
        }
      });
    });
  
    // Toggle dropdown menus
    dropdownParents.forEach(parent => {
      const trigger = parent.querySelector("a");
      trigger.addEventListener("click", (e) => {
        e.preventDefault(); // prevent default navigation
        parent.classList.toggle("open");
      });
    });
  });