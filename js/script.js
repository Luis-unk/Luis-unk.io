document.addEventListener('DOMContentLoaded', () => {
    const themeSelect = document.getElementById('theme-select');
    const htmlOutput = document.getElementById('html-output');

    // Função para aplicar o tema
    function applyTheme(theme) {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('portfolioTheme', theme);
    }

    // Carregar tema salvo ou padrão
    const savedTheme = localStorage.getItem('portfolioTheme') || 'light';
    applyTheme(savedTheme);
    if (themeSelect) {
        themeSelect.value = savedTheme;
    }

    // Evento para mudar o tema
    if (themeSelect) {
        themeSelect.addEventListener('change', (event) => {
            applyTheme(event.target.value);
        });
    }


});
