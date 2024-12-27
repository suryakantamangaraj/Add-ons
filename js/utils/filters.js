// Filter utilities
function filterProducts(products, type = 'all', category = null) {
    return products.filter(product => {
        const typeMatch = type === 'all' || product.type === type;
        const categoryMatch = !category || product.category === category;
        return typeMatch && categoryMatch;
    });
}

export { filterProducts };
