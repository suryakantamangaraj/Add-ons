// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Render extensions
    const extensionsGrid = document.getElementById('extensionsGrid');
    extensions.forEach(extension => {
        const card = new ExtensionCard(extension);
        extensionsGrid.appendChild(card.render());
    });
});