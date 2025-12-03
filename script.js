document.addEventListener('DOMContentLoaded', () => {
    const heartContainer = document.querySelector('.heart-container');
    const container = document.querySelector('.container');

    heartContainer.addEventListener('click', () => {
        container.classList.add('show');
        createBurst();
    });

    // Create background particles
    setInterval(createParticle, 300);
});

function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    // Randomize size and position
    const size = Math.random() * 15 + 5;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.top = '100vh'; // Start from bottom

    // Randomize animation duration
    const duration = Math.random() * 3 + 3;
    particle.style.animationDuration = `${duration}s`;

    document.body.appendChild(particle);

    // Remove particle after animation
    setTimeout(() => {
        particle.remove();
    }, duration * 1000);
}

function createBurst() {
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.animation = 'none'; // Override default float
        particle.style.width = '10px';
        particle.style.height = '10px';
        particle.style.left = '50%';
        particle.style.top = '50%';

        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 200 + 50;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;

        particle.style.transition = 'all 1s ease-out';

        document.body.appendChild(particle);

        requestAnimationFrame(() => {
            particle.style.transform = `translate(${tx}px, ${ty}px)`;
            particle.style.opacity = '0';
        });

        setTimeout(() => {
            particle.remove();
        }, 1000);
    }
}
