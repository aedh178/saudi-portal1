document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const searchInput = document.getElementById('searchInput');
    const cardsGrid = document.getElementById('cardsGrid');

    const websites = [
        { name: "Absher", url: "https://absher.sa", category: "Government" },
        { name: "Tawakkalna", url: "https://tawakkalna.sa", category: "Health" }
    ];

    function renderCards(filter = "") {
        cardsGrid.innerHTML = "";
        const filteredWebsites = filter
            ? websites.filter(w => w.name.toLowerCase().includes(filter.toLowerCase()))
            : websites;
        filteredWebsites.forEach(site => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `<a href="${site.url}" target="_blank">${site.name}</a>`;
            cardsGrid.appendChild(card);
        });
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    searchInput.addEventListener('input', (e) => {
        renderCards(e.target.value);
    });

    renderCards();
});