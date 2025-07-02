const choices = document.querySelectorAll('.choice');

choices.forEach(choice => {
  choice.addEventListener('click', () => {
    choices.forEach(c => {
      c.classList.remove('active');
      c.style.removeProperty('background-image');
    });

    choice.classList.add('active');

    const img = choice.getAttribute('data-img');
    if (img) {
      choice.style.setProperty('background-image', `url(${img})`);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
    let triggered = false;
  
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
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !triggered) {
          animateCounters();
          triggered = true;
        }
      });
    });
  
    const statSection = document.querySelector(".three");
    if (statSection) observer.observe(statSection);
  });
  