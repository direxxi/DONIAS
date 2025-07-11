document.addEventListener("DOMContentLoaded", () => {
  // ✅ Swiper init
  if (document.querySelector(".five-swiper")) {
    const swiper = new Swiper(".five-swiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        480: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  }

  // ✅ Modal functionality
  const btn = document.getElementById("learnMoreBtn");
  const modal = document.getElementById("modal");
  const close = document.querySelector(".close");

  if (btn && modal && close) {
    btn.onclick = () => (modal.style.display = "flex");
    close.onclick = () => (modal.style.display = "none");

    window.onclick = (e) => {
      if (e.target === modal) modal.style.display = "none";
    };
  }

  // ✅ Hamburger menu
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".ul");
  const navLinks = document.querySelectorAll(".ul li a");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("show");
      hamburger.classList.toggle("open");
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("show");
        hamburger.classList.remove("open");
      });
    });
  }
});
