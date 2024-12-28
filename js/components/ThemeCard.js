// ThemeCard.js
import { createElement, createIcon } from '../utils/dom.js';

class ThemeCard {
    constructor(theme) {
        this.theme = theme;
    }

    render() {
        const card = createElement('div', 'card');
        
        const image = createElement('img', 'card-image');
        image.src = this.theme.screenshots[0];
        image.alt = this.theme.name;
        
        const content = createElement('div', 'card-content');
        
        const title = createElement('h3', 'card-title', this.theme.name);
        const description = createElement('p', 'card-description', this.theme.description);
        
        const footer = createElement('div', 'card-footer');
        
        const stats = createElement('div', 'card-stats');
        
        const rating = createElement('div', 'stats-item');
        rating.appendChild(createIcon('star'));
        rating.appendChild(createElement('span', '', this.theme.rating));
        
        const reviews = createElement('div', 'stats-item');
        reviews.appendChild(createIcon('users'));
        reviews.appendChild(createElement('span', '', this.theme.reviews));
        
        stats.appendChild(rating);
        stats.appendChild(reviews);
        
        const learnMore = createElement('a', 'learn-more-btn', 'Learn More');
        learnMore.href = `/themes/${this.theme.id}.html`;
        
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

export default ThemeCard;
