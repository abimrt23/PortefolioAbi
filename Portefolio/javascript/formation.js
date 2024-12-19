function showOption(option) {
    const content = document.getElementById('option-content');

    if (option === 'slam') {
        content.innerHTML = `
            <h2>Option SLAM (Solutions Logicielles et Applications Métiers)</h2>
            <p class="texteF">L'option SLAM forme les étudiants au développement d'applications et à la programmation.</p>
            <ul>
            <p class="texteF">Apprendre différents langages de programmation (Java, PHP, etc.)</p>
            <p class="texteF">Maîtriser la gestion de bases de données</p>
            <p class="texteF">Conception et réalisation de solutions logicielles</p>
            </ul>
        `;
    } else if (option === 'sisr') {
        content.innerHTML = `
            <h2>Option SISR (Solutions d'Infrastructures, Systèmes et Réseaux)</h2>
            <p class="texteF">L'option SISR forme les étudiants à l'administration des systèmes et réseaux informatiques.</p>
            <ul>
                <p class="texteF">Gestion des réseaux et infrastructures informatiques</p>
                <p class="texteF">Configuration de serveurs et maintenance</p>
                <p class="texteF">Sécurité des réseaux et des données</p>
            </ul>
        `;
    }
}
