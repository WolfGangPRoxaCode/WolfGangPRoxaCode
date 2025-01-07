
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