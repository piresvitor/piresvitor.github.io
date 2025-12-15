function revealContact(element, linkUrl, displayText) {
  const valueSpan = element.querySelector(".contact-value");

  if (element.classList.contains("revealed")) {
    window.location.href = linkUrl;
    return;
  }

  valueSpan.textContent = displayText;
  valueSpan.style.color = "var(--accent-color)";
  valueSpan.style.fontWeight = "600";
  element.classList.add("revealed");
}

const backToTopButton = document.getElementById('backToTop');
const header = document.querySelector('header');
const navLinks = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 300) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }

  if (scrollPosition > 0) {
    header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  } else {
    header.style.boxShadow = 'none';
  }

  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100; 
    const sectionHeight = section.clientHeight;

    if (scrollPosition >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active'); 
    if (link.getAttribute('href').includes(currentSection)) {
      link.style.color = "var(--accent-color)"; 
    } else {
      link.style.color = ""; 
    }
  });
});

backToTopButton.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

const sr = ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 2000,
  delay: 200,
  reset: false 
});

sr.reveal('.text-content', { origin: 'left' });
sr.reveal('.image-content', { origin: 'right', delay: 400 });

sr.reveal('.section-title-left', {}); 
sr.reveal('.skill-category', { interval: 200 }); 

sr.reveal('.project-card', { interval: 200 }); 

sr.reveal('.timeline-item', { origin: 'left', distance: '100px' });

sr.reveal('.col-half', { interval: 200 });