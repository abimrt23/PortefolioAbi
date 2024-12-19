document.addEventListener("DOMContentLoaded", function() {
    const paragraphs = document.querySelectorAll(".terminal-effect p");
    let delay = 0;

    paragraphs.forEach(paragraph => {
        setTimeout(() => {
            paragraph.style.display = "block"; // Affiche le paragraphe
            paragraph.style.animation = "typing 3s steps(50, end), blink-caret 0.75s step-end infinite";

            // Une fois l'animation terminée, supprime le curseur en ajoutant la classe 'finished'
            setTimeout(() => {
                paragraph.classList.add("finished");
            }, 3000); // Délai ici doit correspondre à la durée de l'animation 'typing'
        }, delay);

        delay += 4000; // Augmente le délai pour chaque paragraphe
    });
});
