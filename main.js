"use strict"

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
