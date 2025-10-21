// Testimonial navigation functionality
let currentTestimonial = 0;
const testimonials = [
  {
    text: "Thank God for Medivisit. They were instrumental in my uncle's successful operation in India.",
    name: "W. Popoola",
    rating: 5,
  },
  // Add more testimonials here as needed
];

function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  updateTestimonial();
}

function prevTestimonial() {
  currentTestimonial =
    currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1;
  updateTestimonial();
}

function updateTestimonial() {
  // Update testimonial content based on currentTestimonial index
  // This would be expanded with actual testimonial data
}

// Form file upload handling
document
  .getElementById("medical-report")
  ?.addEventListener("change", function (e) {
    const fileName = e.target.files[0]?.name || "No file chosen";
    const fileLabel = e.target.parentElement.querySelector("span");
    if (fileLabel) {
      fileLabel.textContent = fileName;
    }
  });

(function () {
  const btn = document.querySelector("button.hamburger");
  const menu = document.getElementById("mobile-menu");
  const spans = btn.querySelectorAll("span");

  if (!btn || !menu) return;

  btn.addEventListener("click", function () {
    const isHidden = menu.classList.contains("hidden");
    menu.classList.toggle("hidden");
    btn.setAttribute("aria-expanded", String(isHidden));

    // Animate hamburger icon
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

  // Close menu when clicking a link
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

  // Close menu when clicking outside
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
