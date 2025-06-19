document.addEventListener('DOMContentLoaded', () => {

    const vlibrasButton = document.querySelector('.vlibras-button');

    if (vlibrasButton) {

        vlibrasButton.addEventListener('click', () => {

            alert('O botão Vlibras foi clicado! Aqui você poderia integrar a funcionalidade.');
        });
    
    }

});

//Barra de pesquisa

const searchInput = document.getElementById('search-bar')

searchInput.addEventListener('input', (event) => {
    const value = formatString(event.target.value);

    const itens = document.querySelectorAll("#modulos-list .modulos-item");
    const lista = document.getElementById('modulos-list');

    if(value != ''){
        itens.forEach(item => {
         if(formatString(item.textContent).indexOf(value) !== -1){
              item.style.display = 'flex';
              lista.style.display = 'flex';
          } else{
               item.style.display = 'none';
           }
        });
    }else{
        lista.style.display = 'none'
    }
});

function formatString(value){
    return value.toLowerCase().trim();
}