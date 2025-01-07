
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');

    // Fonction pour basculer le menu
    function toggleMenu() {
        menu.classList.toggle('show'); // Affiche ou masque le menu
        hamburger.classList.toggle('hidden'); // Masque ou affiche le bouton hamburger
    }

    // Fonction pour fermer le menu si on clique en dehors
    function closeMenu(event) {
        if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
            menu.classList.remove('show'); // Masque le menu
            hamburger.classList.remove('hidden'); // Réaffiche le hamburger
        }
    }

    // Écouteur d'événement pour le clic sur le hamburger
    hamburger.addEventListener('click', toggleMenu);

    // Écouteur d'événement pour le clic sur le document
    document.addEventListener('click', closeMenu);
});

const particlesContainer = document.querySelector('.particles');

function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    particle.style.left = `${Math.random() * 250}vw`;

    particle.style.animationDuration = `${Math.random() * 12 + 10}s`;

    particlesContainer.appendChild(particle);

    setTimeout(() => {
        particle.remove(1);
    }, 22000);
}

setInterval(createParticle, 15);