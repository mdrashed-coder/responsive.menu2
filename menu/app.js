const navBar = document.querySelector('.navbartoggle');
const menuBar = document.querySelector('.nav-menu');

navBar.addEventListener('click', () => {
    navBar.classList.toggle('active');
    menuBar.classList.toggle('active');

})
