// ProductCard.js
import { createElement, createIcon } from '../utils/dom.js';

class ProductCard {
    constructor(product) {
        this.product = product;
    }

    getTypeLabel() {
        return this.product.type.charAt(0).toUpperCase() + this.product.type.slice(1);
    }

    render() {
        const card = createElement('div', 'card');
        
        const image = createElement('img', 'card-image');
        image.src = this.product.screenshots?.[0] || 'https://via.placeholder.com/150'; // Fallback image
        image.alt = this.product.name || 'Unnamed Product';
        
        const content = createElement('div', 'card-content');
        
        const typeLabel = createElement('span', 'type-label', this.getTypeLabel());
        const title = createElement('h3', 'card-title', this.product.name || 'Untitled');
        const description = createElement('p', 'card-description', this.product.description || 'No description available.');
        
        const footer = createElement('div', 'card-footer');
        
        const stats = createElement('div', 'card-stats');
        
        const rating = createElement('div', 'stats-item');
        rating.appendChild(createIcon('star'));
        rating.appendChild(createElement('span', '', this.product.rating || 'N/A'));
        
        const reviews = createElement('div', 'stats-item');
        reviews.appendChild(createIcon('users'));
        reviews.appendChild(createElement('span', '', this.product.reviews || '0'));
        
        stats.appendChild(rating);
        stats.appendChild(reviews);
        
        const learnMore = createElement('a', 'learn-more-btn', 'Learn More');
        learnMore.href = `/${this.product.type}s/${this.product.id}.html`;
        
        footer.appendChild(stats);
        footer.appendChild(learnMore);
        
        content.appendChild(typeLabel);
        content.appendChild(title);
        content.appendChild(description);
        content.appendChild(footer);
        
        card.appendChild(image);
        card.appendChild(content);
        
        return card;
    }
}

export default ProductCard;
