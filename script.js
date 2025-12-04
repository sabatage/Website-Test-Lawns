// Mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!menuBtn.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove('active');
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
      
      // Close mobile menu if open
      navLinks.classList.remove('active');
    }
  });
});

// Booking form submission
const bookingForm = document.getElementById('bookingForm');

bookingForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form data
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    address: document.getElementById('address').value,
    service: document.getElementById('service').value
  };
  
  // In a real application, you would send this data to a server
  // For now, we'll just show a success message
  alert('Thank you for your booking request! We will contact you within 24 hours.');
  
  // Reset form
  bookingForm.reset();
  
  // Scroll to top
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
  } else {
    navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
  }
});