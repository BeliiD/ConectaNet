document.addEventListener('DOMContentLoaded', () => {

    const vlibrasButton = document.querySelector('.vlibras-button');

    if (vlibrasButton) {

        vlibrasButton.addEventListener('click', () => {

            alert('O botão Vlibras foi clicado! Aqui você poderia integrar a funcionalidade.');
        });
    
    }

    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {

        link.addEventListener('click', (event) => {

            event.preventDefault(); 
            
            console.log(`O link "${link.textContent}" foi clicado!`);
            alert(`Você clicou em "${link.textContent}". Esta ação poderia te levar para outra página.`);

        });
        
    });

});