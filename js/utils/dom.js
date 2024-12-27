// DOM Utility Functions
(function(global) {
    const createElement = (tag, options = {}, content = '') => {
        const element = document.createElement(tag);
        if (options.className) element.className = options.className;
        if (content) element.textContent = content;
        return element;
    };

    const createIcon = (type) => {
        const icons = {
            star: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>`,
            users: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>`
        };
        
        const wrapper = createElement('span', { className: 'icon' });
        wrapper.innerHTML = icons[type];
        return wrapper;
    };

    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = {
            createElement,
            createIcon
        };
    } else {
        global.domUtils = {
            createElement,
            createIcon
        };
    }
})(typeof window !== 'undefined' ? window : global);