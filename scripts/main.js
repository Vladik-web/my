'use strict';

const btnBurder = document.querySelector('.btn-burger');
const catalog = document.querySelector('.catalog');
const btnClose = document.querySelector('.btn-close');


const subCatalog = document.querySelector('.subcatalog');
const subcatalogHeader = document.querySelector('.subcatalog-header');
const btnReturn = document.querySelector('.btn-return');

const overlay = document.createElement('div');
overlay.className = 'overlay';
document.body.insertAdjacentElement('beforeend',overlay);


const openMenu = () =>{
    catalog.classList.add('open');
    overlay.classList.add('active')
};

const closeMenu = () =>{
    catalog.classList.remove('open');
    overlay.classList.remove('active');
    closeSubMenu();
};

const openSubMenu = event =>{
    event.preventDefault();
    
    const itemList = event.target.closest('.catalog-list__item');
    if(itemList) {
        subcatalogHeader.innerHTML = itemList.innerHTML
        
        subCatalog.classList.add('subopen');
    }
}

const closeSubMenu = () => {
    subCatalog.classList.remove('subopen');
}

btnBurder.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);
catalog.addEventListener('click', openSubMenu);
btnReturn.addEventListener('click', closeSubMenu);
overlay.addEventListener('click', closeMenu)
