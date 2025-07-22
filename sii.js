document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".ul");
  const navLinks = document.querySelectorAll(".ul li a");
  const dropdownParents = document.querySelectorAll(".dropdown-parent");

  const form = document.getElementById("studentApplicationForm");
  const modal = document.getElementById("modal");
  const modalMessage = document.getElementById("modalMessage");
  const modalClose = document.getElementById("modalClose");
  

  // 🍔 Hamburger menu
  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("show");
      hamburger.classList.toggle("open");
    });
  }

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (!link.closest(".dropdown-parent")) {
        navMenu?.classList.remove("show");
        hamburger?.classList.remove("open");
      }
    });
  });

  dropdownParents.forEach(parent => {
    const submenu = parent.querySelector(".dropdown-menu");
    const trigger = parent.querySelector("a");
    if (!submenu || !trigger) return;

    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      parent.classList.toggle("open");
    });
  });

  // 📝 Form submission
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(form);

      // remove empty file inputs
      ["passport_biodata_file", "academic_transcripts_file", "statement_of_purpose_file"].forEach(name => {
        const file = formData.get(name);
        if (file && file.size === 0) {
          formData.delete(name);
        }
      });

      try {
        const response = await fetch(form.action || "/submit", {
          method: "POST",
          body: formData,
        });

        const contentType = response.headers.get("Content-Type") || "";
        let result = { message: "" };

        if (contentType.includes("application/json")) {
          result = await response.json();
        } else {
          result.message = await response.text();
        }

        if (response.ok) {
          showModal(result.message || "✅ Application submitted successfully!", "success");
          form.reset();
        } else {
          showModal(result.detail || result.message || "❌ Something went wrong.", "error");
        }

      } catch (err) {
        showModal("❌ Network error: " + err.message, "error");
      }
    });
  }

  // 🎯 Modal logic
  function showModal(message, type) {
    if (!modal || !modalMessage) return;

    modalMessage.textContent = message;
    modalMessage.style.color = type === "success" ? "green" : "red";
    modal.classList.remove("hidden");

    // remove old click listeners
    modalClose?.replaceWith(modalClose.cloneNode(true));
    const newClose = document.getElementById("modalClose");

    newClose?.addEventListener("click", () => {
      closeModal();
    });

    setTimeout(() => {
      closeModal();
    }, 5000);
  }

  function closeModal() {
    modal?.classList.add("hidden");
  }
});
