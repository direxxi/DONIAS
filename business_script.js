// Mobile Menu
(function () {
  const btn = document.querySelector("button.hamburger");
  const menu = document.getElementById("mobile-menu");
  const spans = btn.querySelectorAll("span");

  if (!btn || !menu) return;

  btn.addEventListener("click", function () {
    const isHidden = menu.classList.contains("hidden");
    menu.classList.toggle("hidden");
    btn.setAttribute("aria-expanded", String(isHidden));

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

  menu.addEventListener("click", function (e) {
    const link = e.target.closest("a");
    if (link) {
      menu.classList.add("hidden");
      btn.setAttribute("aria-expanded", "false");
      spans[0].style.transform = "";
      spans[1].style.opacity = "";
      spans[2].style.transform = "";
    }
  });

  document.addEventListener("click", function (e) {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.add("hidden");
      btn.setAttribute("aria-expanded", "false");
      spans[0].style.transform = "";
      spans[1].style.opacity = "";
      spans[2].style.transform = "";
    }
  });
})();

// 3D Carousel
(function () {
  const cards = document.querySelectorAll(".industry-card");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const indicatorsContainer = document.getElementById("indicators");
  let currentIndex = 0;
  let autoRotateInterval;

  if (!cards.length || !prevBtn || !nextBtn || !indicatorsContainer) return;

  // Create indicators
  cards.forEach((_, index) => {
    const indicator = document.createElement("div");
    indicator.className =
      index === 0
        ? "w-10 h-3 rounded-full bg-[#a23342] transition-all duration-300 cursor-pointer"
        : "w-3 h-3 rounded-full bg-[#a23342]/20 transition-all duration-300 cursor-pointer";
    indicator.addEventListener("click", () => goToSlide(index));
    indicatorsContainer.appendChild(indicator);
  });

  function updateCarousel() {
    cards.forEach((card, index) => {
      card.classList.remove("active", "prev", "next", "hidden");

      if (index === currentIndex) {
        card.classList.add("active");
      } else if (index === (currentIndex - 1 + cards.length) % cards.length) {
        card.classList.add("prev");
      } else if (index === (currentIndex + 1) % cards.length) {
        card.classList.add("next");
      } else {
        card.classList.add("hidden");
      }
    });

    // Update indicators
    const allIndicators = indicatorsContainer.querySelectorAll("div");
    allIndicators.forEach((indicator, index) => {
      if (index === currentIndex) {
        indicator.className =
          "w-10 h-3 rounded-full bg-[#a23342] transition-all duration-300 cursor-pointer";
      } else {
        indicator.className =
          "w-3 h-3 rounded-full bg-[#a23342]/20 transition-all duration-300 cursor-pointer";
      }
    });
  }

  function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
    resetAutoRotate();
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCarousel();
  }

  function startAutoRotate() {
    autoRotateInterval = setInterval(nextSlide, 4000);
  }

  function resetAutoRotate() {
    clearInterval(autoRotateInterval);
    startAutoRotate();
  }

  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetAutoRotate();
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetAutoRotate();
  });

  cards.forEach((card, index) => {
    card.addEventListener("click", () => {
      if (index !== currentIndex) {
        goToSlide(index);
      }
    });
  });

  startAutoRotate();

  const carouselWrapper = document.querySelector(".carousel-wrapper");
  if (carouselWrapper) {
    carouselWrapper.addEventListener("mouseenter", () =>
      clearInterval(autoRotateInterval)
    );
    carouselWrapper.addEventListener("mouseleave", startAutoRotate);
  }

  updateCarousel();
})();
// Testimonials Carousel with Avatar Sync
(function () {
  const track = document.querySelector(".testimonial-track");
  const prevBtn = document.querySelector(".testimonial-prev");
  const nextBtn = document.querySelector(".testimonial-next");
  const indicators = document.querySelectorAll("#testimonial-indicators > div");
  const avatars = document.querySelectorAll(".testimonial-avatar");
  let currentTestimonial = 0;
  const totalTestimonials = 7;

  if (!track || !prevBtn || !nextBtn) return;

  function updateTestimonials() {
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;

    // Update indicators
    indicators.forEach((indicator, index) => {
      if (index === currentTestimonial) {
        indicator.className =
          "w-10 h-3 rounded-full bg-[#a23342] transition-all duration-300 cursor-pointer";
      } else {
        indicator.className =
          "w-3 h-3 rounded-full bg-gray-300 transition-all duration-300 cursor-pointer";
      }
    });

    // Update avatars - make current one larger
    avatars.forEach((avatar, index) => {
      if (index === currentTestimonial) {
        avatar.classList.add("active");
      } else {
        avatar.classList.remove("active");
      }
    });
  }

  nextBtn.addEventListener("click", () => {
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    updateTestimonials();
  });

  prevBtn.addEventListener("click", () => {
    currentTestimonial =
      (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
    updateTestimonials();
  });

  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      currentTestimonial = index;
      updateTestimonials();
    });
  });

  // Click on avatar to go to that testimonial
  avatars.forEach((avatar, index) => {
    avatar.addEventListener("click", () => {
      currentTestimonial = index;
      updateTestimonials();
    });
  });

  // Auto-advance every 6 seconds
  setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    updateTestimonials();
  }, 6000);
})();
