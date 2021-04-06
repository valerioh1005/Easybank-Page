
const menuBTN = document.querySelector('#menuBtn');
const sideMenu = document.querySelector('.sidebar');

menuBTN.addEventListener('click', () => {
    openMenu();
})

function openMenu () {
    sideMenu.classList.toggle('show');
}