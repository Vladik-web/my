const btnBurder = document.querySelector('.btn-burger');
const catalog = document.querySelector('.catalog');
const btnClose = document.querySelector('.btn-close');
const overlay = document.querySelector('.overlay');

const subCatalog = document.querySelector('.subcatalog');
const subcatalogHeader = document.querySelector('.subcatalog-header');
const openMenu = () =>{
    catalog.classList.add('open');
    overlay.classList.add('active')
};

const closeMenu = () =>{
    catalog.classList.remove('open');
    overlay.classList.remove('active')
};

const openSubMenu = event =>{
    event.preventDefault();
    const target = event.target;
    const itemList = target.closest('.catalog-list__item');
    if(itemList) {
        subcatalogHeader.innerHTML = itemList.innerHTML;
        
        subCatalog.classList.add('subopen');
    }
}

btnBurder.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);
catalog.addEventListener('click', openSubMenu);