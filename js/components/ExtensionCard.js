class ExtensionCard {
    constructor(extension) {
        this.extension = extension;
    }

    render() {
        const card = createElement('div', 'card');
        
        const image = createElement('img', 'card-image');
        image.src = this.extension.screenshots[0];
        image.alt = this.extension.name;
        
        const content = createElement('div', 'card-content');
        
        const title = createElement('h3', 'card-title', this.extension.name);
        const description = createElement('p', 'card-description', this.extension.description);
        
        const footer = createElement('div', 'card-footer');
        
        const stats = createElement('div', 'card-stats');
        
        const rating = createElement('div', 'stats-item');
        rating.appendChild(createIcon('star'));
        rating.appendChild(createElement('span', '', this.extension.rating));
        
        const reviews = createElement('div', 'stats-item');
        reviews.appendChild(createIcon('users'));
        reviews.appendChild(createElement('span', '', this.extension.reviews));
        
        stats.appendChild(rating);
        stats.appendChild(reviews);
        
        const learnMore = createElement('a', 'learn-more-btn', 'Learn More');
        learnMore.href = `/extensions/${this.extension.id}.html`;
        
        footer.appendChild(stats);
        footer.appendChild(learnMore);
        
        content.appendChild(title);
        content.appendChild(description);
        content.appendChild(footer);
        
        card.appendChild(image);
        card.appendChild(content);
        
        return card;
    }
}