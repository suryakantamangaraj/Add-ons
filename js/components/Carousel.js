import { createElement } from '../utils/dom.js';

export class Carousel {
    constructor(container, images) {
        this.container = container;
        this.images = images;
        this.currentIndex = 0;
    }

    render() {
        const carousel = createElement('div', 'carousel');
        const inner = createElement('div', 'carousel-inner');
        const nav = createElement('div', 'carousel-nav');

        this.images.forEach((image, index) => {
            const item = createElement('div', 'carousel-item');
            const img = createElement('img');
            img.src = image;
            img.alt = `Slide ${index + 1}`;
            item.appendChild(img);
            inner.appendChild(item);

            const dot = createElement('div', 'carousel-dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => this.goToSlide(index));
            nav.appendChild(dot);
        });

        carousel.appendChild(inner);
        carousel.appendChild(nav);

        // Auto-advance slides
        setInterval(() => this.nextSlide(), 5000);

        return carousel;
    }

    goToSlide(index) {
        this.currentIndex = index;
        const inner = this.container.querySelector('.carousel-inner');
        inner.style.transform = `translateX(-${index * 100}%)`;

        // Update dots
        const dots = this.container.querySelectorAll('.carousel-dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.goToSlide(this.currentIndex);
    }
}