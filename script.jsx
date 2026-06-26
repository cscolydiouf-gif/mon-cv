// =========================
// CV INTERACTIF
// =========================

window.onload = function () {

    // Message de bienvenue
    alert("👋 Bienvenue sur le CV de Cheikh Sadibou Coly Diouf");

    // Animation des sections
    let items = document.querySelectorAll(".item");

    items.forEach(function(item, index) {

        item.style.opacity = "0";
        item.style.transform = "translateY(30px)";

        setTimeout(function() {
            item.style.transition = "all 0.8s ease";
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
        }, index * 300);

    });

    // Animation des centres d'intérêt
    let interests = document.querySelectorAll(".interest-box");

    interests.forEach(function(box) {

        box.addEventListener("mouseover", function() {
            box.style.transform = "scale(1.1)";
            box.style.transition = "0.3s";
        });

        box.addEventListener("mouseout", function() {
            box.style.transform = "scale(1)";
        });

    });

    // Affichage de la date de visite dans la console
    let date = new Date();

    console.log(
        "Visite du CV le : " +
        date.toLocaleDateString() +
        " à " +
        date.toLocaleTimeString()
    );
    const bouton = document.getElementById("back-to-top");
}
// ===== MODE SOMBRE / CLAIR =====
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Charger le thème sauvegardé
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

// Basculer au clic
themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const newTheme = current === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    
    console.log('Thème changé vers :', newTheme); // Pour déboguer
});