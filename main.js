document.addEventListener("DOMContentLoaded", () => {
  // --- Mobile Navigation ---
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuLinks = mobileMenu.querySelectorAll("a");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });

  // --- Banner Image Fade ---
  const images = document.querySelectorAll('.fade-image');
  let current = 0;

  function showNextImage() {
    images[current].classList.remove('opacity-100');
    images[current].classList.add('opacity-0');

    current = (current + 1) % images.length;

    images[current].classList.remove('opacity-0');
    images[current].classList.add('opacity-100');
  }

  if (images.length > 0) {
    images[current].classList.remove('opacity-0');
    images[current].classList.add('opacity-100');
    setInterval(showNextImage, 1500);
  }

  // --- Scroll Fade Animations ---
  const sections = document.querySelectorAll('section');
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fadeInUp');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    section.style.opacity = '0';
    observer.observe(section);
  });
});
