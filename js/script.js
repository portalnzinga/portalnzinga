// Mensagem para confirmar que o JS foi carregado com sucesso
console.log("JavaScript interligado com sucesso e pronto para o GitHub!");

// Exemplo: Criar um alerta opcional ou efeito ao clicar nos botões do final do site
document.querySelectorAll('.footer-svg-link, .footer-link-icon').forEach(botao => {
    botao.addEventListener('click', function(evento) {
        // Exemplo de interação: mostra no painel qual a ferramenta que o utilizador clicou
        console.log("O utilizador clicou na ferramenta: " + this.getAttribute('title'));
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const btnPortal = document.querySelector('.btn_portal');
    const menuLinks = document.querySelector('.menu_links');
    const menuItems = document.querySelectorAll('.menu_item');

    // Abre/Fecha o menu ao clicar no botão do Portal (no Mobile)
    btnPortal.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            // Se o menu estiver fechado, vamos apenas abrir o menu e impedir a ação padrão do botão
            if (!menuLinks.classList.contains('active')) {
                e.preventDefault(); 
                menuLinks.classList.add('active');
            } else {
                // Se já estiver aberto e o utilizador clicar de novo, fecha o menu
                menuLinks.classList.remove('active');
            }
        }
    });

    // Fecha o menu automaticamente se o utilizador clicar em qualquer link (Início, Sobre...)
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menuLinks.classList.remove('active');
        });
    });
});