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

// Counter Animation
const counters = document.querySelectorAll(".counter");
const speed = 200;

const animateCounter = (counter) => {
  const target = +counter.getAttribute("data-target");
  const increment = target / speed;

  const updateCount = () => {
    const count = +counter.innerText;
    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
};

// Intersection Observer for counters
const observerOptions = { threshold: 0.5 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const counter = entry.target.querySelector(".counter");
      if (counter && counter.innerText === "0") {
        animateCounter(counter);
      }
    }
  });
}, observerOptions);

document.querySelectorAll(".stat-box").forEach((box) => {
  observer.observe(box);
});

// Why Choose Us Interactive
const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    choices.forEach((c) => c.classList.remove("active"));
    choice.classList.add("active");
  });
});
