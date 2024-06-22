const inputCheck = document.querySelector('#modo-noturno')
const elemento = document.querySelector('body')
const imagem = document.querySelector('.navbar-brand img')
const navbar = document.querySelector('.navbar');

window.addEventListener('DOMContentLoaded', () => {

    const inputCheck = document.querySelector('#modo-noturno')
    const elemento = document.querySelector('body')
    const imagem = document.querySelector('.navbar-brand img')
    const navbar = document.querySelector('.navbar');

    // Função para alternar o tema
    inputCheck.addEventListener('click', () => {
        const modo = inputCheck.checked ? 'dark' : 'light';
        elemento.setAttribute("data-bs-theme", modo);
    });

    // Função para verificar a rolagem da página
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) { // Se a posição de rolagem for maior que 0
            navbar.classList.add('scrolled');
            console.log('Classe scrolled adicionada');
        } else {
            navbar.classList.remove('scrolled');
            console.log('Classe scrolled removida');
        }
    });
});
/* Para poder verificar quando a pagina foi scrolada pra poder mudar o fundo de transparente para cor solida*/
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) { // Se a posição de rolagem for maior que 5
      navbar.classList.remove('navbar-transparent');
      navbar.classList.add('navbar-solid');
      imagem.classList.add('small');
    } else {
      navbar.classList.remove('navbar-solid');
      navbar.classList.add('navbar-transparent');
      imagem.classList.remove('small');
    }
});

