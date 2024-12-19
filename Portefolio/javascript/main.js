document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".focus-container");
    const focusCircle = document.createElement("div");
    focusCircle.classList.add("focus");

    // Ajoute le cercle de focus au conteneur
    container.appendChild(focusCircle);

    // Déplace le cercle de focus en fonction de la position du curseur
    container.addEventListener("mousemove", (e) => {
        focusCircle.style.left = `${e.clientX}px`;
        focusCircle.style.top = `${e.clientY}px`;

        // Annule le flou sous le cercle de focus
        document.querySelectorAll("h1, p").forEach(element => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Vérifie si la position du curseur est sur l'élément
            if (x > 0 && x < rect.width && y > 0 && y < rect.height) {
                element.style.filter = "none"; // Enlève le flou
            } else {
                element.style.filter = "blur(5px)"; // Applique le flou
            }
        });
    });

    // Réapplique le flou quand la souris quitte le conteneur
    container.addEventListener("mouseleave", () => {
        document.querySelectorAll("h1, p").forEach(element => {
            element.style.filter = "blur(5px)";
        });
    });
});
