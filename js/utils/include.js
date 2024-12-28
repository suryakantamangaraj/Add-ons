export async function includeHTML() {
    const elements = document.getElementsByTagName("*");
    
    for (const element of elements) {
        const file = element.getAttribute("include-html");
        if (file) {
            try {
                const response = await fetch(file);
                const html = await response.text();
                element.innerHTML = html;
                element.removeAttribute("include-html");
                // Initialize icons
                const icons = document.querySelectorAll('svg.icon use');
                icons.forEach(icon => {
                    const href = icon.getAttribute('href');
                    if (href) {
                        icon.setAttribute('xlink:href', href);
                    }
                });
                
            } catch (error) {
                console.error(`Error including HTML file ${file}:`, error);
            }
        }
    }
}