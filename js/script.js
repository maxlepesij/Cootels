"use strict"

const theme = document.querySelector('.header__themes');
const wrapper = document.querySelector('.wrapper');
if(theme){
    theme.addEventListener("click", function(e){
        wrapper.classList.toggle('_theme');
    });
}

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const menulink = document.querySelectorAll('.menu__link');
if (iconMenu){
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
};


let menuArrows = document.querySelectorAll('.menu-room__item');
if (menuArrows){
    if (menuArrows.length > 0){
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener("click", function(e) {
                menuArrow.classList.toggle('_active');
            });
        };
    };
};


new Swiper('.image-slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoHeight: true,
    loop: true,
    speed: 200,
});


