class ProductCard {
    constructor(product) {
        this.product = product;
    }

    getTypeLabel() {
        return this.product.type.charAt(0).toUpperCase() + this.product.type.slice(1);
    }

    render() {
        const card = createElement('div', 'extension-card');
        
        const image = createElement('img', 'card-image');
        image.src = this.product.screenshots[0];
        image.alt = this.product.name;
        
        const content = createElement('div', 'card-content');
        
        const typeLabel = createElement('span', 'type-label', this.getTypeLabel());
        const title = createElement('h3', 'card-title', this.product.name);
        const description = createElement('p', 'card-description', this.product.description);
        
        const footer = createElement('div', 'card-footer');
        
        const stats = createElement('div', 'card-stats');
        
        const rating = createElement('div', 'stats-item');
        rating.appendChild(createIcon('star'));
        rating.appendChild(createElement('span', '', this.product.rating));
        
        const reviews = createElement('div', 'stats-item');
        reviews.appendChild(createIcon('users'));
        reviews.appendChild(createElement('span', '', this.product.reviews));
        
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