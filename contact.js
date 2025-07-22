document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    const modal = document.getElementById("customModal");
    const modalMessage = document.getElementById("modalMessage");
    const modalClose = document.getElementById("modalClose");
  
    if (contactForm) {
      contactForm.addEventListener("submit", async (e) => {
        e.preventDefault();
  
        const formData = new FormData(contactForm);
  
        try {
          const response = await fetch(contactForm.action || "/contact", {
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
            showModal(result.message || "✅ Message sent successfully!", "success");
            contactForm.reset();
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
  