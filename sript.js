// ===== Animate Typing Effect =====
document.addEventListener("DOMContentLoaded", () => {
  const nameElement = document.querySelector(".typed-name");
  const fullName = "Girgis Kelliny";
  let index = 0;
  nameElement.textContent = "";

  const typingInterval = setInterval(() => {
    if (index < fullName.length) {
      nameElement.textContent += fullName.charAt(index);
      index++;
    } else {
      clearInterval(typingInterval);
    }
  }, 150);
});

// ===== AOS Initialization =====
AOS.init({
  duration: 1000,
  once: true, // animation happens only once
});

// ===== Download Resume Logic =====
const downloadBtn = document.getElementById("downloadResumeBtn");
if (downloadBtn) {
  downloadBtn.addEventListener("click", () => {
    const a = document.createElement("a");
    a.href = "Assets/Gerges_CV.pdf";
    a.download = "Gerges CV.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
}

// ===== Optional Contact Form Alert =====
const contactForm = document.querySelector("form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    contactForm.reset();
  });
}
