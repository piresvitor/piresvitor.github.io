function revealContact(element, linkUrl, displayText) {
  const valueSpan = element.querySelector(".contact-value");

  if (element.classList.contains("revealed")) {
    window.location.href = linkUrl;
    return;
  }

  valueSpan.textContent = displayText;
  element.classList.add("revealed");
}

const backToTopButton = document.getElementById("backToTop");
const header = document.querySelector("header");
const navLinks = document.querySelectorAll("nav ul li a");
const sections = document.querySelectorAll("section");

let lastScrollY = 0;

function onScroll() {
  const currentScroll = window.scrollY;

  if (Math.abs(currentScroll - lastScrollY) < 50) return;
  lastScrollY = currentScroll;

  backToTopButton.classList.toggle("show", currentScroll > 300);
  header.classList.toggle("scrolled", currentScroll > 0);

  let currentSection = "";

  sections.forEach(section => {
    if (currentScroll >= section.offsetTop - 120) {
      currentSection = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle(
      "active",
      link.getAttribute("href").includes(currentSection)
    );
  });
}

window.addEventListener("scroll", onScroll, { passive: true });

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (!prefersReducedMotion) {
  const sr = ScrollReveal({
    origin: "top",
    distance: "30px",
    duration: 600,
    delay: 100,
    easing: "ease-out",
    reset: false,
    mobile: false
  });

  sr.reveal(".text-content", { origin: "left" });
  sr.reveal(".image-content", { origin: "right", delay: 200 });
  sr.reveal(".section-title-left");
  sr.reveal(".timeline-item", { origin: "left" });

  sr.reveal(
    ".skill-category, .project-card, .col-half",
    { interval: 150 }
  );
}

backToTopButton.addEventListener("click", event => {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});