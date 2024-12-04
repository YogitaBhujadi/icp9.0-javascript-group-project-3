// Inject the navbar dynamically
document.getElementById("navbar").innerHTML = `
    <div class="navbar-container">
        <img src="../img/Logo.png" alt="Logo" class="navbar-logo">
        <div class="navbar-links">
            <a href="../index.html">Home</a>
            <a href="/pages/menu.html">Menu</a>
            <a href="/pages/about.html">About Us</a>
            <a href="/pages/offers.html">Offers</a>
            <a href="/pages/order.html">Order Online</a>
            <a href="/pages/events.html">Events</a>
            <a href="/pages/reservation.html">Reservation</a>
        </div>
    </div>  
`;

// Inject the footer dynamically
document.getElementById("footer").innerHTML = `
<div class="footer-f">
        <div class="footer-container">
            <div class="feature1-email-phone-location">
                <div class="features-main text-centre font-family">
                    <div class="features">
                        <img src="/img/email.png" alt="E-mail" class="footer-icon">
                        <p class="info">hotnfastresto@gmail.com</p>
                    </div>

                    <div class="features">
                        <img src="/img/phone.png" alt="phone-call" class="footer-icon">
                        <p class="info">+91-7821011979</p>
                    </div>

                    <div class="features">
                        <img src="/img/location.png" alt="location" class="footer-icon">
                        <p class="info">404, Laxmi Heights, Above Lotus Multi-speciality Hospital <br> Shewalewadi(Hadapsar), Pune - 412307</p>
                    </div>
                </div>
            </div>

            <div class="footer-coonect-us-container">
                <h2 class="features-heading font-family">Connect with Us</h2>
                    <div class="fb-container">
                        <a href="https://www.facebook.com/" style="text-decoration: none;">
                            <img src="/img/facebook.png" alt="facebook" class="fb">
                        </a>
                        <a href="https://chat.whatsapp.com/" style="text-decoration: none;"><img
                                src="/img/Whatsapp.png" alt="whatsapp" class="fb">
                        </a>
                        <a href="https://www.youtube.com/" style="text-decoration: none;"><img
                                src="/img/Youtube.png" alt="youtube" class="fb">
                        </a>
                        <a href="https://www.instagram.com/" style="text-decoration: none;">
                            <img src="/img/instagram.png" alt="instagram" class="fb">
                        </a>
                    </div>
            </div>
            <div class="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d500.0307940025006!2d73.79416121326348!3d18.598850116478292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b91e0701ce81%3A0x6499f7f8d8cdf224!2sLotus%20Multi-specialty%20Hospital!5e1!3m2!1sen!2sin!4v1733145258212!5m2!1sen!2sin" width="300" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
        </div>
    <footer class="footer">
        <p>&copy; 2024 HOT N' Fast Restaurant. All rights reserved.</p>
    </footer>
`;

// Typewriter effect
document.addEventListener("DOMContentLoaded", () => {
    const text = "HOT N' FAST Restaurant";
    let i = 0;
    const typingSpeed = 100;
    const targetElement = document.querySelector('.hero-content h1');

    if (targetElement) {
        function typeWriter() {
            if (i < text.length) {
                targetElement.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, typingSpeed);
            }
        }
        typeWriter();
    }
});

// Slider functionality
document.addEventListener("DOMContentLoaded", () => {
    const images = [
        "./img/img1.jpg", "./img/img2.jpg", "./img/img3.jpg",
        "./img/img4.jpg", "./img/img5.jpg", "./img/img6.jpg", "./img/img7.jpg"
    ];
    let index = 0;
    const slide = document.getElementById('slide');

    function next() {
        index = (index + 1) % images.length; 
        slide.src = images[index];
    }

    function prev() {
        index = (index - 1 + images.length) % images.length; 
        slide.src = images[index];
    }

    window.next = next;
    window.prev = prev;

    setInterval(next, 3000);
});

// sidebar
function openSiderbar(){
    const sidebarElement = document.getElementById('sidebar');
    sidebarElement.style.display = 'block';

    const hamburgerMenuElement = document.getElementById('hamburger-menu');
    hamburgerMenuElement.style.display = 'none'
}
function closeSidebar(){
    const sidebarElement = document.getElementById('sidebar');
    sidebarElement.style.display = 'none';

    const hamburgerMenuElement = document.getElementById('hamburger-menu');
    hamburgerMenuElement.style.display = 'block'
}

