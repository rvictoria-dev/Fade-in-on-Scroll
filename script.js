// 1. Select all animatable elements
const items = document.querySelectorAll('.fade-item');

// 2. Create the IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {

    // Element entered the viewport
    if (entry.isIntersecting) {

      // Add .visible - triggers the CSS transition
      entry.target.classList.add('visible');

      // Stop observing aftr it animates (runs only once)
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15  // fires when 15% of the element is visible
});

// 3. Start observing each element
items.forEach(item => observer.observe(item));