// Toggle Button

const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("harmburger");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("-translate-x-full"); 
    navMenu.classList.toggle("translate-x-0"); 
    hamburger.classList.toggle("ri-close-large-line");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.add("-translate-x-full"); 
        navMenu.classList.toggle("translate-x-0");
        hamburger.classList.toggle("ri-close-large-line"); 
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".lazy");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.style.transitionDelay = `${index * 200}ms`; 
            entry.target.classList.remove("opacity-0", "translate-y-10");
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.3 }
    );

    images.forEach((img) => observer.observe(img));
  });

  document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".animate-slideLeft, .animate-slideRight");

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("show"); 
              observer.unobserve(entry.target); 
          }
      });
  }, { threshold: 0.2 });

  elements.forEach(element => {
      observer.observe(element);
  });
});