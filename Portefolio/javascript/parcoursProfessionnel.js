document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.timeline-item');
    let delay = 0;

    items.forEach(item => {
        setTimeout(() => {
            item.classList.add('active');
        }, delay);
        delay += 800;  // Délai d'animation entre les éléments
    });
});
