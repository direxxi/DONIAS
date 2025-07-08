const section = document.querySelector(".tourism-section");
const thumbs = document.querySelectorAll(".thumbs img");

const countryTitle = document.getElementById("country-title");
const capitalEl = document.getElementById("capital");
const altitudeEl = document.getElementById("altitude");
const descEl = document.getElementById("desc");
const placesEl = document.getElementById("places");

let data = Array.from(thumbs).map(thumb => ({
  src: thumb.dataset.src,
  title: thumb.dataset.title,
  capital: thumb.dataset.capital,
  altitude: thumb.dataset.altitude,
  desc: thumb.dataset.desc,
  places: thumb.dataset.places
}));

let current = 0;
let interval;

function updateContent(index) {
  section.style.background = `url('${data[index].src}') center/cover no-repeat`;
  countryTitle.textContent = data[index].title;
  capitalEl.textContent = `Capital: ${data[index].capital}`;
  altitudeEl.textContent = `Altitude: ${data[index].altitude}`;
  descEl.textContent = data[index].desc;
  placesEl.innerHTML = `<strong>Places To Visit:</strong> ${data[index].places}`;
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
