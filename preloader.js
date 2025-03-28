// Mostra o preloader
document.addEventListener('DOMContentLoaded', function () {
    // Esconde o preloader após 2 segundos (ou quando a página estiver carregada)
    setTimeout(function () {
        const preloader = document.getElementById('preloader');
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';

        // Mostra o conteúdo principal
        document.body.style.overflow = 'auto';
    }, 2000);
});