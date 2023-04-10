// Script for navigation bar
const nav = document.querySelector('.nav');
const menuIcon = document.querySelector('.menu__icon');
const closeMenu = document.querySelector('.close__menu');

menuIcon.addEventListener('click', () => nav.classList.add('show-menu'));
closeMenu.addEventListener('click', () => nav.classList.remove('show-menu'));


// ===== SCROLL HEADER =======

const header = document.querySelector('#header');

window.addEventListener('scroll', () => {
    (window.scrollY > 580) ? header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.09)' : header.style.boxShadow = '';
});