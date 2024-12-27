// products.js
import ProductCard from '../components/ProductCard.js';
import { filterProducts } from '../utils/filters.js';

// Product types enum
const ProductType = {
    EXTENSION: 'extension',
    PLUGIN: 'plugin',
    WIDGET: 'widget',
    THEME: 'theme',
};

// Products data
const products = [
    {
        id: 'task-wizard',
        type: ProductType.EXTENSION,
        name: 'Task Wizard',
        description: 'Boost your productivity with AI-powered task management',
        category: 'Productivity',
        features: [
            'AI task prioritization',
            'Smart reminders',
            'Project templates',
            'Time tracking',
        ],
        githubUrl: 'https://github.com/example/task-wizard',
        screenshots: [
            'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
        ],
        rating: 4.8,
        reviews: 256,
    },
    {
        id: 'code-snap',
        type: ProductType.EXTENSION,
        name: 'Code Snap',
        category: 'Development',
        description: 'Beautiful code screenshots in seconds',
        features: [
            'Syntax highlighting',
            'Custom themes',
            'Multiple languages support',
            'Direct sharing',
        ],
        githubUrl: 'https://github.com/example/code-snap',
        screenshots: [
            'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80',
        ],
        rating: 4.9,
        reviews: 189,
    },
    {
        id: 'color-palette',
        type: ProductType.PLUGIN,
        name: 'Color Palette',
        category: 'Design',
        description: 'Generate beautiful color schemes from any image',
        features: [
            'Image color extraction',
            'Palette suggestions',
            'Export to various formats',
            'Color accessibility checker',
        ],
        githubUrl: 'https://github.com/example/color-palette',
        screenshots: [
            'https://images.unsplash.com/photo-1579547944212-c4f4961a8dd8?auto=format&fit=crop&w=800&q=80',
        ],
        rating: 4.7,
        reviews: 143,
    },
    {
        id: 'responsive-grid',
        type: ProductType.WIDGET,
        name: 'Responsive Grid',
        category: 'Development',
        description: 'Customizable responsive grid system for modern websites',
        features: [
            'Drag and drop interface',
            'Custom breakpoints',
            'CSS export',
            'Template library',
        ],
        githubUrl: 'https://github.com/example/responsive-grid',
        screenshots: [
            'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&w=800&q=80',
        ],
        rating: 4.6,
        reviews: 98,
    },
];

// Render products dynamically
export function renderProducts(container, filteredProducts) {
    container.innerHTML = ''; // Clear container content
    filteredProducts.forEach(product => {
        const productCard = new ProductCard(product);
        container.appendChild(productCard.render());
    });
}

// Handle filters
export function applyFilters(container, type = 'all', category = null) {
    const filteredProducts = filterProducts(products, type, category);
    renderProducts(container, filteredProducts);
}

export { products, ProductType };
