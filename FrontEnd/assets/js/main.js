document.addEventListener('scroll', function () {
    const aboutSection = document.getElementById('about');
    const cardapioSection = document.getElementById('cardapio');

    const aboutRect = aboutSection.getBoundingClientRect();

    // Verifica se a parte inferior da seção About está visível na tela
    if (aboutRect.bottom <= window.innerHeight) {
        cardapioSection.classList.add('visible');
    } else {
        cardapioSection.classList.remove('visible');
    }
});
