let slider = document.querySelector('.slider');
let list = document.querySelector('.list');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let items = document.querySelectorAll('.list .item');
let count = items.length;
let active = 0; 

let width_item = items[0].offsetWidth;


next.onclick = () => {
    active = active >= count - 1 ? 0 : active + 1;
    runCarousel();
}


prev.onclick = () => {
    active = active <= 0 ? count - 1 : active - 1;
    runCarousel();
}

function runCarousel() {
    
    prev.style.display = (active == 0) ? 'none' : 'block';
    next.style.display = (active == count - 1) ? 'none' : 'block';

    
    let old_active = document.querySelector('.item.active');
    if (old_active) old_active.classList.remove('active');
    
    
    items[active].classList.add('active');

    
    let leftTransform = width_item * active * -1;
    list.style.transition = 'transform 0.5s ease'; 
    list.style.transform = `translateX(${leftTransform}px)`; 
}


runCarousel();


let autoSlideInterval = 2000;

setInterval(() => {

    active = active >= count - 1 ? 0 : active + 1;
    runCarousel();
}, autoSlideInterval);