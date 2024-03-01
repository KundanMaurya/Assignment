const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

let counter = 1;
const size = images[0].clientWidth;

carouselSlide.style.transform = `translateX(${-size * counter}px)`;

document.querySelector('.next-btn').addEventListener('click', () => {
    if (counter >= images.length - 1) return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});

document.querySelector('.prev-btn').addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});

carouselSlide.addEventListener('transitionend', () => {
    if (images[counter].id === 'last-clone') {
        carouselSlide.style.transition = 'none';
        counter = images.length - 2;
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    }
    if (images[counter].id === 'first-clone') {
        carouselSlide.style.transition = 'none';
        counter = images.length - counter;
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    }
});
