
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
const btn = document.getElementById("learnMoreBtn");
const modal = document.getElementById("modal");
const close = document.querySelector(".close");

btn.onclick = () => modal.style.display = "flex";
close.onclick = () => modal.style.display = "none";
window.onclick = (e) => {
  if (e.target == modal) modal.style.display = "none";
}
