// Function to highlight the current navbar item
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    // Function to check if a link corresponds to the current section
    function highlightCurrentLink() {
      const scrollPosition = window.scrollY;
  
      navLinks.forEach(link => {
        const sectionId = link.getAttribute('href'); // Get the section ID from the href
        const section = document.querySelector(sectionId); // Get the actual section element
  
        if (section) {
          const sectionTop = section.offsetTop - 100; // Offset by 100px to account for fixed navbar
          const sectionHeight = section.offsetHeight;
  
          // Check if the current scroll position is within the section's range
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            link.classList.add('active'); // Add 'active' class to the link
          } else {
            link.classList.remove('active'); // Remove 'active' class from the link
          }
        }
      });
    }
  
    // Listen for scroll events and update active link
    window.addEventListener('scroll', highlightCurrentLink);
  
    // Initial highlight on page load in case the page is already scrolled
    highlightCurrentLink();
  });
  