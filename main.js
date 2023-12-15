"use strict"

function checkClassName (el, className) {
  const splitClassNames = el.className.split(' ');
  return splitClassNames.includes(className);
}

const navMenuItems = document.querySelectorAll('.header__nav-menu-item');
navMenuItems.forEach((el) => {
  el.addEventListener('mouseover', (event) => {
    event.currentTarget.classList.add('header__nav-menu-item_active');
  });
  el.addEventListener('mouseout', (event) => {
    event.currentTarget.classList.remove('header__nav-menu-item_active');
  });
});

const startButtons = document.querySelectorAll('.start-button');
startButtons.forEach((el) => {
  el.addEventListener('mouseover', (event) => {
    event.currentTarget.classList.add('start-button_active');
 });
  el.addEventListener('mouseout', (event) => {
    event.currentTarget.classList.remove('start-button_active');
  });
});

const downArrows = document.querySelectorAll('.down-arrow');
downArrows.forEach((el) => {
  el.addEventListener('mouseover', (event) => {
    event.currentTarget.classList.add('down-arrow_active');
  });
  el.addEventListener('mouseout', (event) => {
    event.currentTarget.classList.remove('down-arrow_active');
  });
});

const infoGroupLinks = document.querySelectorAll('.info-groups__info-group-link');
infoGroupLinks.forEach((el) => {
  el.addEventListener('mouseover', (event) => {
    event.currentTarget.classList.add('info-groups__info-group-link_active');
  });
  el.addEventListener('mouseout', (event) => {
    event.currentTarget.classList.remove('info-groups__info-group-link_active');
  });
});

const priceToggleButtons = document.querySelectorAll('.price__toggle-button');
priceToggleButtons.forEach((el, i) => {
  el.addEventListener('click', (event) => {
    const priceToggleButtonLeft = document.querySelector('.price__toggle-button_left');
    const priceToggleButtonRight = document.querySelector('.price__toggle-button_right');
    if (!checkClassName(el, 'price__toggle-button_active')) {
      (checkClassName(el, 'price__toggle-button_left')) ? 
        (priceToggleButtonRight.classList.remove('price__toggle-button_active')) :
        (priceToggleButtonLeft.classList.remove('price__toggle-button_active'));
    } 
    event.currentTarget.classList.add('price__toggle-button_active');
  });
});
