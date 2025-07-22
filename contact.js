document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  const studentForm = document.getElementById("studentApplicationForm");
  const modal = document.getElementById("customModal") || document.getElementById("modal");
  const modalMessage = document.getElementById("modalMessage");
  const modalClose = document.getElementById("modalClose");

  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".ul");
  const navLinks = document.querySelectorAll(".ul li a");
  const dropdownParents = document.querySelectorAll(".dropdown-parent");

  // 🍔 Hamburger menu toggle
  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("show");
      hamburger.classList.toggle("open");
    });
  }

  // Close nav menu when clicking a normal link
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (!link.closest(".dropdown-parent")) {
        navMenu?.classList.remove("show");
        hamburger?.classList.remove("open");
      }
    });
  });

  // Dropdown toggle
  dropdownParents.forEach(parent => {
    const submenu = parent.querySelector(".dropdown-menu");
    const trigger = parent.querySelector("a");
    if (!submenu || !trigger) return;

    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      parent.classList.toggle("open");
    });
  });

  // Form handler (works for either contactForm or studentForm)
  const form = contactForm || studentForm;

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(form);

      try {
        const response = await fetch(form.action || "/submit", {
          method: "POST",
          body: formData
        });

        const contentType = response.headers.get("Content-Type") || "";
        let result = {};

        if (contentType.includes("application/json")) {
          result = await response.json();
        } else {
          result.message = await response.text();
        }

        if (response.ok) {
          showModal(result.message || "✅ Submission successful!", "success");
          form.reset();
        } else {
          showModal(result.detail || result.message || "❌ Something went wrong.", "error");
        }

      } catch (err) {
        showModal("❌ Network error: " + err.message, "error");
      }
    });
  }

  function showModal(message, type) {
    if (!modal || !modalMessage) return;

    modalMessage.textContent = message;
    modalMessage.style.color = type === "success" ? "green" : "red";
    modal.classList.remove("modal_hidden");

    modalClose?.replaceWith(modalClose.cloneNode(true));
    const newClose = document.getElementById("modalClose");

    newClose?.addEventListener("click", () => {
      modal?.classList.add("modal_hidden");
    });

    setTimeout(() => {
      modal?.classList.add("modal_hidden");
    }, 5000);
  }
});
