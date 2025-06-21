document.addEventListener('DOMContentLoaded', () => {

    const vlibrasButton = document.querySelector('.vlibras-button');

    if (vlibrasButton) {

        vlibrasButton.addEventListener('click', () => {

            alert('O botão Vlibras foi clicado! Aqui você poderia integrar a funcionalidade.');
        });

    }

});

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3
                    }s`);
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init();

const searchInput = document.getElementById('search-bar')

searchInput.addEventListener('input', (event) => {
    const value = formatString(event.target.value);

    const itens = document.querySelectorAll("#modulos-list .modulos-item");
    const lista = document.getElementById('modulos-list');

    if (value != '') {
        itens.forEach(item => {
            if (formatString(item.textContent).indexOf(value) !== -1) {
                item.style.display = 'flex';
                lista.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    } else {
        lista.style.display = 'none'
    }
});

function formatString(value) {
    return value.toLowerCase().trim();
}