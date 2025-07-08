const section = document.querySelector(".tourism-section");
const thumbs = document.querySelectorAll(".thumb");
const titleEl = document.querySelector(".title");
const descEl = document.getElementById("description");

const descriptions = {
  "FLIGHT BOOKING": "Book flights worldwide with competitive rates and excellent support.",
  "BUS BOOKING": "Convenient bus ticket booking for local and intercity travel.",
  "TRAIN BOOKING": "Easy reservations on domestic and international train networks.",
  "CRUISE BOOKING": "Luxury cruise packages for unforgettable sea journeys.",
  "HOTEL BOOKING": "Find and book hotels at the best prices anywhere you go."
};

const data = Array.from(thumbs).map(thumb => {
  const img = thumb.querySelector("img");
  const text = thumb.querySelector("p").textContent.trim();
  return {
    src: img.getAttribute("src"),
    title: text
  };
});

let current = 0;
let interval;

function updateContent(index) {
  section.style.background = `url('${data[index].src}') center/cover no-repeat`;
  titleEl.textContent = data[index].title;
  descEl.textContent = descriptions[data[index].title] || "";
  current = index;
}

function startSlideshow() {
  interval = setInterval(() => {
    current = (current + 1) % data.length;
    updateContent(current);
  }, 4000);
}

thumbs.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    clearInterval(interval);
    updateContent(index);
    startSlideshow();
  });
});

updateContent(0);
startSlideshow();
