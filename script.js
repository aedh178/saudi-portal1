document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const searchInput = document.getElementById('searchInput');
    const cardsGrid = document.getElementById('cardsGrid');

    const websites = [
        { name: "Absher", url: "https://www.absher.sa", category: "Government", tag: "Citizen Services" },
        { name: "Tawakkalna", url: "https://tawakkalna.sdaia.gov.sa", category: "Government", tag: "Health Pass" },
        { name: "Nafath (IAM)", url: "https://www.iam.gov.sa", category: "Government", tag: "National Access" },
        { name: "MOI", url: "https://www.moi.gov.sa", category: "Government", tag: "Interior" },
        { name: "MOFA", url: "https://www.mofa.gov.sa", category: "Government", tag: "Foreign Affairs" },
        { name: "MOH", url: "https://www.moh.gov.sa", category: "Government", tag: "Health Ministry" },
        { name: "King Saud University", url: "https://ksu.edu.sa", category: "Education", tag: "Riyadh" },
        { name: "King Abdulaziz Univ.", url: "https://kau.edu.sa", category: "Education", tag: "Jeddah" },
        { name: "KFUPM", url: "https://kfupm.edu.sa", category: "Education", tag: "Dhahran" },
        { name: "Sehhaty", url: "https://sehhaty.sa", category: "Health", tag: "Health App" },
        { name: "Al Rajhi Bank", url: "https://www.alrajhibank.com.sa", category: "Banking", tag: "Bank" },
        { name: "Riyad Bank", url: "https://www.riyadbank.com", category: "Banking", tag: "Bank" },
        { name: "STC", url: "https://www.stc.com.sa", category: "Services", tag: "Telecom" },
        { name: "Mobily", url: "https://mobily.com.sa", category: "Services", tag: "Telecom" },
        { name: "Visit Saudi", url: "https://www.visitsaudi.com", category: "Services", tag: "Tourism" }
    ];

    function renderCards(filter = "") {
        cardsGrid.innerHTML = "";
        const filteredWebsites = filter
            ? websites.filter(w => w.name.toLowerCase().includes(filter.toLowerCase()) || w.category.toLowerCase().includes(filter.toLowerCase()))
            : websites;
        filteredWebsites.forEach(site => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `<a href="${site.url}" target="_blank">${site.name} <br> <small>${site.category}</small></a>`;
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