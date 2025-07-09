document.addEventListener("DOMContentLoaded", () => {
  // WHY CHOOSE US
  const choices = document.querySelectorAll(".choice");

  const setActiveChoice = (activeChoice) => {
    choices.forEach(c => {
      c.classList.remove("active");
      const label = c.querySelector(".basic-label");
      if (label) label.style.display = "block";
    });

    activeChoice.classList.add("active");
    const activeLabel = activeChoice.querySelector(".basic-label");
    if (activeLabel) activeLabel.style.display = "none";
  };

  choices.forEach(choice => {
    choice.addEventListener("click", () => {
      setActiveChoice(choice);
    });
  });

  if (!document.querySelector(".choice.active") && choices.length) {
    setActiveChoice(choices[0]);
  }

  window.addEventListener("resize", () => {
    const active = document.querySelector(".choice.active");
    if (active) setActiveChoice(active);
  });

  // COUNTERS
  const counters = document.querySelectorAll(".counter");
  let countersTriggered = false;

  const animateCounters = () => {
    counters.forEach(counter => {
      const target = +counter.dataset.target;
      let current = 0;
      const increment = target / 100;

      const updateCount = () => {
        current += increment;
        if (current < target) {
          counter.innerText = Math.ceil(current);
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
  };

  const statSection = document.querySelector(".three");
  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !countersTriggered) {
        animateCounters();
        countersTriggered = true;
      }
    });
  });
  if (statSection) counterObserver.observe(statSection);

  // FLIP CARDS
  const flipCards = document.querySelectorAll(".flip-card");
  flipCards.forEach(card => {
    card.addEventListener("click", () => {
      flipCards.forEach(c => {
        if (c !== card) c.classList.remove("flipped");
      });
      card.classList.toggle("flipped");
    });
  });

  // HAMBURGER
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".ul");
  const navLinks = document.querySelectorAll(".ul li a");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    hamburger.classList.toggle("open");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show");
      hamburger.classList.remove("open");
    });
  });
});
