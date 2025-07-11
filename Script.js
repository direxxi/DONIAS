const words = ["Travels", "Education", "Business", "Medical", "Agribusiness", "IT Solutions"];
const typedSpan = document.getElementById("typed-word");
const bgImages = JSON.parse(typedSpan.dataset.images);
const section = document.querySelector(".one");

// ✅ Preload background images
bgImages.forEach((url) => {
  const img = new Image();
  img.src = url;
});

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  const displayedText = currentWord.substring(0, charIndex);
  typedSpan.textContent = displayedText;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 50);
  } else {
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(typeEffect, 2000); // pause before deleting
    } else {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;

      // ✅ Update background image
      section.style.backgroundImage = `url(${bgImages[wordIndex]})`;
      setTimeout(typeEffect, 500);
    }
  }
}

// ✅ Initial background
section.style.backgroundImage = `url(${bgImages[0]})`;
typeEffect();

// ✅ Center zoom effect for scroller
const autoScroller = document.getElementById("autoScroller");
const track = autoScroller.querySelector(".scroller-track");
const items = track.querySelectorAll(".service-item");

let lastFrameTime = 0;
function zoomOnCenter(timestamp) {
  if (timestamp - lastFrameTime > 100) {
    const centerX = autoScroller.offsetWidth / 2;

    items.forEach((item) => {
      const box = item.getBoundingClientRect();
      const itemCenter = box.left + box.width / 2;
      const distance = Math.abs(centerX - itemCenter);
      const scale = Math.max(1, 1.5 - distance / 300); // adjust as needed
      item.style.transform = `scale(${scale})`;
    });

    lastFrameTime = timestamp;
  }

  requestAnimationFrame(zoomOnCenter);
}

requestAnimationFrame(zoomOnCenter);
const sections = [
    {
      title: "Why choose Donias Global Consultants?",
      desc: "We go beyond travel—we prepare you for success abroad through expert guidance, personalized consultation, and seamless experiences.",
      image: "images/spencer-davis-0QcSnCM0aMc-unsplash.jpg",
      features: [
        {
          icon: "icons/experts.png",
          title: "Expert Advisors",
          desc: "Certified consultants who guide you through visa, school admissions, and travel prep.",
        },
        {
          icon: "icons/speed.png",
          title: "Swift Processing",
          desc: "We handle paperwork and bookings efficiently, helping you meet urgent deadlines.",
        },
        {
          icon: "icons/pricing.png",
          title: "Transparent Pricing",
          desc: "No hidden charges — just fair and honest pricing for all your needs.",
        },
        {
          icon: "icons/help-desk.png",
          title: "All-in-One Support",
          desc: "Visa, flights, interviews, and more — all managed from one seamless platform.",
        },
      ],
    },
    {
      title: "Why trust us for Medical Tourism?",
      desc: "From health consultations to international care coordination — we simplify the journey to world-class treatment.",
      image: "images/hush-naidoo-jade-photography-XwguHkKQqSA-unsplash.jpg",
      features: [
        {
          icon: "icons/doctor.png",
          title: "Certified Health Partners",
          desc: "We work with accredited hospitals across continents to ensure top-tier care.",
        },
        {
          icon: "icons/support.png",
          title: "Pre & Post Support",
          desc: "From consultation to recovery, we stand by your side with expert help.",
        },
        {
          icon: "icons/translate.png",
          title: "Multilingual Services",
          desc: "Our interpreters ensure seamless communication with your medical team.",
        },
        {
          icon: "icons/flight.png",
          title: "Travel Coordination",
          desc: "We plan everything — flights, accommodation, care schedules — stress-free.",
        },
      ],
    },
    {
      title: "Why choose Donias for Agribusiness?",
      desc: "We empower agro-entrepreneurs with the tools and connections they need to thrive globally.",
      image: "images/randy-fath-dDc0vuVH_LU-unsplash.jpg",
      features: [
        {
          icon: "icons/network.png",
          title: "Global Market Access",
          desc: "We link you with distributors, exporters, and agro hubs around the world.",
        },
        {
          icon: "icons/training.png",
          title: "Business Training",
          desc: "We offer agribusiness growth workshops and investor-readiness programs.",
        },
        {
          icon: "icons/monitor.png",
          title: "Smart Farming Tools",
          desc: "Stay updated with tools that optimize yield and track performance.",
        },
        {
          icon: "icons/support.png",
          title: "Dedicated Support",
          desc: "Your agri-journey gets a dedicated consultant from start to finish.",
        },
      ],
    },
    {
        title: "Why choose Donias for IT Consultancy?",
        desc: "We empower businesses and individuals with cutting-edge digital solutions, tailored to your unique tech needs.",
        image: "images/person-working-html-computer.jpg",
        features: [
          {
            icon: "icons/code.png",
            title: "Custom Software Solutions",
            desc: "We build web and mobile applications that streamline your operations and boost efficiency.",
          },
          {
            icon: "icons/cloud.png",
            title: "Cloud & Infrastructure",
            desc: "Get scalable, secure cloud setups with expert support and data migration assistance.",
          },
          {
            icon: "icons/shield.png",
            title: "Cybersecurity Services",
            desc: "We secure your digital assets with robust audits, protection plans, and real-time monitoring.",
          },
          {
            icon: "icons/tech-support.png",
            title: "Ongoing Tech Support",
            desc: "From setup to maintenance, we provide continuous support and system upgrades.",
          },
        ],
      },
      {
        title: "Why choose Donias for Business Consulting?",
        desc: "Whether you're launching or scaling, our strategic insights and tailored solutions drive business success.",
        image: "images/adeolu-eletu-E7RLgUjjazc-unsplash.jpg",
        features: [
          {
            icon: "icons/strategy.png",
            title: "Strategic Planning",
            desc: "We help define clear goals, align your team, and plan for scalable growth.",
          },
          {
            icon: "icons/legal.png",
            title: "Regulatory Compliance",
            desc: "We guide you through licensing, company registration, and legal documentation.",
          },
          {
            icon: "icons/finance.png",
            title: "Financial Advisory",
            desc: "From budgeting to funding strategies, we optimize your financial performance.",
          },
          {
            icon: "icons/market.png",
            title: "Market Entry Support",
            desc: "Break into new markets with research-backed strategies and positioning.",
          },
        ],
      },
      
      
  ];
  
  let index = 0;
  
  function updateWhyChooseUs() {
    const textEl = document.getElementById("whyText");
    const layoutEl = document.getElementById("whyLayout");
    const section = sections[index];
  
    // Text block
    textEl.innerHTML = `
      <h2>${section.title}</h2>
      <p>${section.desc}</p>
    `;
  
    // Features and image layout
    layoutEl.innerHTML = `
      <div class="why-side">
        ${section.features
          .slice(0, 2)
          .map(
            (feat) => `
          <div class="why-feature">
            <img src="${feat.icon}" alt="${feat.title}" />
            <h4>${feat.title}</h4>
            <p>${feat.desc}</p>
          </div>
        `
          )
          .join("")}
      </div>
  
      <div class="why-image">
        <img src="${section.image}" alt="Dynamic Image" />
      </div>
  
      <div class="why-side">
        ${section.features
          .slice(2)
          .map(
            (feat) => `
          <div class="why-feature">
            <img src="${feat.icon}" alt="${feat.title}" />
            <h4>${feat.title}</h4>
            <p>${feat.desc}</p>
          </div>
        `
          )
          .join("")}
      </div>
    `;
  
    // Move to next section
    index = (index + 1) % sections.length;
  }
  
  // Initial load
  updateWhyChooseUs();
  
  // Auto-switch every 8 seconds
  setInterval(updateWhyChooseUs, 8000);
  const counters = document.querySelectorAll(".counter");

const animateCounters = () => {
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.dataset.target;
      const current = +counter.innerText;
      const increment = target / 100;

      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
};
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".ul");
  const navLinks = document.querySelectorAll(".ul li a");
  const dropdownParents = document.querySelectorAll(".dropdown-parent");

  // Open/close hamburger menu
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    hamburger.classList.toggle("open");
  });

  // Close nav when clicking any link (optional — keep if desired)
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (!link.closest(".dropdown-parent")) {
        navMenu.classList.remove("show");
        hamburger.classList.remove("open");
      }
    });
  });

  // Toggle dropdown menus
  dropdownParents.forEach(parent => {
    const submenu = parent.querySelector(".dropdown-menu");
    if (!submenu) return; // skip if no submenu
  
    const trigger = parent.querySelector("a");
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      parent.classList.toggle("open");
    });
  });
});
  


// Trigger when in view (optional optimization)
window.addEventListener("load", animateCounters);



