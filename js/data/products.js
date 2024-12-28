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
    {
        id: 'markdown-editor',
        type: ProductType.PLUGIN,
        name: 'Markdown Editor',
        category: 'Writing',
        description: 'A powerful markdown editor with live preview and syntax highlighting',
        features: [
            'Live preview',
            'Syntax highlighting',
            'Export to PDF and HTML',
            'Customizable themes',
        ],
        githubUrl: 'https://github.com/example/markdown-editor',
        screenshots: [
            'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1517430816045-df4b7de211e0?auto=format&fit=crop&w=800&q=80',
        ],
        rating: 4.6,
        reviews: 178,
    },
    {
        id: 'time-tracker',
        type: ProductType.PLUGIN,
        name: 'Time Tracker',
        category: 'Productivity',
        description: 'Track your work hours and boost your productivity',
        features: [
            'Task timer',
            'Daily and weekly reports',
            'Project-based time tracking',
            'Integration with calendar apps',
        ],
        githubUrl: 'https://github.com/example/time-tracker',
        screenshots: [
            'https://images.unsplash.com/photo-1524666041073-7112e22b7230?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1506812574058-fc75fa93fead?auto=format&fit=crop&w=800&q=80',
        ],
        rating: 4.7,
        reviews: 210,
    },
    {
        id: 'notes-organizer',
        type: ProductType.PLUGIN,
        name: 'Notes Organizer',
        category: 'Organization',
        description: 'Organize your notes and keep your thoughts in order',
        features: [
            'Rich text formatting',
            'Tagging and categorization',
            'Search and filter notes',
            'Sync across devices',
        ],
        githubUrl: 'https://github.com/example/notes-organizer',
        screenshots: [
            'https://images.unsplash.com/photo-1535930749574-1399327ce78f?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
        ],
        rating: 4.8,
        reviews: 195,
    },
    {
        id: 'dark-mode',
        type: ProductType.THEME,
        name: 'Dark Mode',
        category: 'Dark',
        description: 'A sleek and modern dark theme for your application',
        features: [
            'High contrast',
            'Customizable colors',
            'Supports various platforms',
            'Easy to install',
        ],
        githubUrl: 'https://github.com/example/dark-mode',
        screenshots: [
            'https://images.unsplash.com/photo-1533907657544-b8dc71d9423d?auto=format&fit=crop&w=800&q=80',
        ],
        rating: 4.9,
        reviews: 175,
    },
    {
        id: 'light-mode',
        type: ProductType.THEME,
        name: 'Light Mode',
        category: 'Light',
        description: 'A clean and minimal light theme for your application',
        features: [
            'Soft colors',
            'Customizable layout',
            'Supports various platforms',
            'Easy to install',
        ],
        githubUrl: 'https://github.com/example/light-mode',
        screenshots: [
            'https://images.unsplash.com/photo-1508921236213-88e33c37d5ab?auto=format&fit=crop&w=800&q=80',
        ],
        rating: 4.8,
        reviews: 160,
    },
    {
        id: 'weather-widget',
        type: ProductType.WIDGET,
        name: 'Weather Widget',
        category: 'Design',
        description: 'Real-time weather widget with customizable themes and layouts',
        features: [
            'Live weather updates',
            'Multiple themes',
            'Geolocation support',
            'Responsive design',
        ],
        githubUrl: 'https://github.com/example/weather-widget',
        screenshots: [
            'https://images.unsplash.com/photo-1485547069373-037a377c3279?auto=format&fit=crop&w=800&q=80',
        ],
        rating: 4.7,
        reviews: 122,
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
