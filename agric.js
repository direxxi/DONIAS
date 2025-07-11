
  document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.five-swiper', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        }
      }
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const hamburgerNav = document.querySelector(".hamburger");
    const menuNav = document.getElementById("ulz");
    const hamburgerServices = document.querySelector(".hamburger2");
    const menuServices = document.querySelector(".ull .ul");
  
    const navLinks = menuNav?.querySelectorAll("li a");
    const serviceLinks = menuServices?.querySelectorAll("li a");
  
    const closeNav = () => {
      menuNav?.classList.remove("show");
      hamburgerNav?.classList.remove("open");
      hamburgerServices.style.display = ""; // show other hamburger back
    };
  
    const closeServices = () => {
      menuServices?.classList.remove("show");
      hamburgerServices?.classList.remove("open");
      hamburgerNav.style.display = ""; // show other hamburger back
    };
  
    if (hamburgerNav && menuNav) {
      hamburgerNav.addEventListener("click", () => {
        const isOpen = menuNav.classList.toggle("show");
        hamburgerNav.classList.toggle("open");
  
        if (isOpen) {
          hamburgerServices.style.display = "none"; // hide the other hamburger
          closeServices(); // make sure its menu is closed
        } else {
          hamburgerServices.style.display = "";
        }
      });
  
      navLinks.forEach(link => {
        link.addEventListener("click", closeNav);
      });
    }
  
    if (hamburgerServices && menuServices) {
      hamburgerServices.addEventListener("click", () => {
        const isOpen = menuServices.classList.toggle("show");
        hamburgerServices.classList.toggle("open");
  
        if (isOpen) {
          hamburgerNav.style.display = "none"; // hide the other hamburger
          closeNav(); // make sure its menu is closed
        } else {
          hamburgerNav.style.display = "";
        }
      });
  
      serviceLinks.forEach(link => {
        link.addEventListener("click", closeServices);
      });
    }
  
    // dropdowns
    const dropdownParents = document.querySelectorAll(".dropdown-parent");
    dropdownParents.forEach(parent => {
      const trigger = parent.querySelector("a");
      const submenu = parent.querySelector(".dropdown-menu");
  
      if (trigger && submenu) {
        trigger.addEventListener("click", e => {
          e.preventDefault();
          parent.classList.toggle("open");
        });
      }
    });
  
    // counters
    const counters = document.querySelectorAll(".counter");
    const animateCounters = () => {
      counters.forEach(counter => {
        const update = () => {
          const target = +counter.dataset.target;
          const current = +counter.innerText;
          const increment = target / 100;
  
          if (current < target) {
            counter.innerText = Math.ceil(current + increment);
            setTimeout(update, 30);
          } else {
            counter.innerText = target;
          }
        };
        update();
      });
    };
  
    animateCounters();
  });
  