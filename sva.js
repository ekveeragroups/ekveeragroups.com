document.addEventListener("DOMContentLoaded", () => {
    const toggles = document.querySelectorAll(".feature-toggle");
  
    toggles.forEach(toggle => {
      toggle.addEventListener("click", () => {
        const clickedFeature = toggle.closest(".feature");
        const clickedFeatureName = clickedFeature.dataset.feature;
        const shouldExpand = clickedFeature.querySelector(".feature-desc").style.maxHeight === "" || clickedFeature.querySelector(".feature-desc").style.maxHeight === "0px";
  
        // Get all features
        const allFeatures = document.querySelectorAll(".feature");
  
        allFeatures.forEach(feature => {
          const featureName = feature.dataset.feature;
          const desc = feature.querySelector(".feature-desc");
          const icon = feature.querySelector(".icon");
  
          if (featureName === clickedFeatureName && shouldExpand) {
            // Expand the clicked group
            desc.style.maxHeight = desc.scrollHeight + "px";
            icon.textContent = "−";
          } else {
            // Collapse everything else
            desc.style.maxHeight = null;
            icon.textContent = "+";
          }
        });
      });
    });
  
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
  
    document.querySelectorAll('.course-toggle').forEach(button => {
      button.addEventListener('click', () => {
        const currentItem = button.closest('.course-item');
        const currentDesc = currentItem.querySelector('.course-desc');
        const currentIcon = button.querySelector('.icon');
    
        document.querySelectorAll('.course-item').forEach(item => {
          const desc = item.querySelector('.course-desc');
          const icon = item.querySelector('.icon');
    
          if (item === currentItem) {
            const isExpanded = desc.style.maxHeight && desc.style.maxHeight !== "0px";
            if (isExpanded) {
              desc.style.maxHeight = null;
              icon.textContent = "+";
            } else {
              desc.style.maxHeight = desc.scrollHeight + "px";
              icon.textContent = "−";
            }
          } else {
            desc.style.maxHeight = null;
            icon.textContent = "+";
          }
        });
      });
    });
    
  });
  