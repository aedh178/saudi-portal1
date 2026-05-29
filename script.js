document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const searchInput = document.getElementById('searchInput');
    const cardsGrid = document.getElementById('cardsGrid');

    const websites = [
        { name: "Absher", url: "https://www.absher.sa", logo: "https://upload.wikimedia.org/wikipedia/en/4/4f/Absherlogo.png", category: "Government" },
        { name: "Tawakkalna", url: "https://tawakkalna.sdaia.gov.sa", logo: "https://upload.wikimedia.org/wikipedia/en/a/a6/Twklna_logo-app.png", category: "Government" },
        { name: "Nafath (IAM)", url: "https://www.iam.gov.sa", logo: "https://upload.wikimedia.org/wikipedia/en/3/3f/Nafathlogo.png", category: "Government" },
        { name: "MOFA", url: "https://www.mofa.gov.sa", logo: "https://www.mofa.gov.sa/SiteCollectionImages/Shared/mofa_logo.png", category: "Government" },
        { name: "King Saud University", url: "https://ksu.edu.sa", logo: "https://upload.wikimedia.org/wikipedia/en/8/83/King_Saud_University_Logo.png", category: "Education" },
        { name: "King Abdulaziz Univ.", url: "https://kau.edu.sa", logo: "https://upload.wikimedia.org/wikipedia/en/b/bc/KAU_logo.png", category: "Education" },
        { name: "Al Rajhi Bank", url: "https://www.alrajhibank.com.sa", logo: "https://upload.wikimedia.org/wikipedia/en/1/15/Al_Rajhi_Bank_logo.png", category: "Banking" },
        { name: "STC", url: "https://www.stc.com.sa", logo: "https://upload.wikimedia.org/wikipedia/en/e/e0/STC_logo.png", category: "Telecom" }
    ];

    function renderCards(filter = "") {
        cardsGrid.innerHTML = "";
        const filteredWebsites = filter
            ? websites.filter(w => w.name.toLowerCase().includes(filter.toLowerCase()) || w.category.toLowerCase().includes(filter.toLowerCase()))
            : websites;
        filteredWebsites.forEach(site => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <img src="${site.logo}" alt="${site.name} Logo">
                <a href="${site.url}" target="_blank">${site.name}</a>
                <p><small>${site.category}</small></p>
            `;
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