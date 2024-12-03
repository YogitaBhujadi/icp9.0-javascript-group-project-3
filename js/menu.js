function filterMenu(category) {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        document.querySelector(target).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function searchMenu() {
    const searchInput = document.getElementById('searchBar').value.toLowerCase();
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        const itemName = item.querySelector('h3').textContent.toLowerCase(); 
        if (itemName.includes(searchInput)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Carousel JS
let currentSlide = 0;

function updateCarousel() {
  const carousel = document.querySelector('.carousel');
  const slides = document.querySelectorAll('.carousel-item');
  const totalSlides = slides.length;

  const offset = -currentSlide * 100; 
  carousel.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  const slides = document.querySelectorAll('.carousel-item');
  currentSlide = (currentSlide + 1) % slides.length;
  updateCarousel();
}

function prevSlide() {
  const slides = document.querySelectorAll('.carousel-item');
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateCarousel();
}

// Auto-slide every 5 seconds
setInterval(nextSlide, 3000);
