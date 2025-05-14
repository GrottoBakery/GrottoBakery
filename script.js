// DARK MODE TOGGLE 
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  themeIcon.textContent = "🌙";
} else {
  themeIcon.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  themeIcon.textContent = isDark ? "🌙" : "☀️";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// SCROLL TO PRODUCTS BUTTON 
const scrollButton = document.querySelector(".scroll-button");
if (scrollButton) {
  scrollButton.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
  });
}

// BACK TO TOP BUTTON 
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// LIGHTBOX FUNCTIONALITY 
document.querySelectorAll(".lightbox").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const src = link.getAttribute("href");

    const modal = document.createElement("div");
    modal.className = "lightbox-modal";
    modal.innerHTML = `
      <div class="overlay"></div>
      <img src="${src}" alt="Preview" />
      <button class="close-btn" aria-label="Close preview">&times;</button>
    `;
    document.body.appendChild(modal);

    modal.querySelector(".overlay").onclick = () => modal.remove();
    modal.querySelector(".close-btn").onclick = () => modal.remove();
  });
});

// SHRINK HEADER ON SCROLL 
const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    nav.classList.add("shrink");
  } else {
    nav.classList.remove("shrink");
  }
});

// SCROLL REVEAL ANIMATION 
const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    if (rect.top < windowHeight - 100) {
      el.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// SMOOTH FLOW FOR ALL INTERNAL LINKS 
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});