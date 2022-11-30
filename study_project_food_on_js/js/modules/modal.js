
function openModal(modalSelector, modalTimerId) {
  const modalWindow = document.querySelector(modalSelector);
  modalWindow.classList.add('show');
  modalWindow.classList.remove('hide');
  document.body.style.overflow = 'hidden';
  console.log(modalTimerId);
  if (modalTimerId) {
    clearInterval(modalTimerId);
  }
  
}

function modalClosed(modalSelector) {
  const modalWindow = document.querySelector(modalSelector);
  modalWindow.classList.add('hide');
  modalWindow.classList.remove('show');
  document.body.style.overflow = '';
}

function modal(triggerSelector, modalSelector, modalTimerId) {

const modalWindowOpen = document.querySelectorAll(triggerSelector),
      modalWindow = document.querySelector(modalSelector);

modalWindowOpen.forEach(btn => {
  btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
}); 

modalWindow.addEventListener('click', (e) => {
  if (e.target === modalWindow || e.target.getAttribute('data-close') == '') {
      modalClosed(modalSelector);
  }
});

document.addEventListener('keydown', (e) => {
  if (e.code === "Escape" && modalWindow.classList.contains('show')) {
      modalClosed(modalSelector);
  }
});

function openModalByScroll() {
if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
  openModal(modalSelector, modalTimerId);
window.removeEventListener('scroll', openModalByScroll);
} 
}

window.addEventListener('scroll', openModalByScroll);


/*  getResource('http://localhost:3000/menu')
.then(data => createCard(data));

function createCard(data) {
data.forEach(({img, altimg, title, descr, price}) => {
  const element = document.createElement('div');
  element.classList.add('menu__item');
  element.innerHTML = `
  <img src=${img} alt=${altimg}>
      <h3 class="menu__item-subtitle">${title}</h3>
      <div class="menu__item-descr">${descr}
      <div class="menu__item-divider"></div>
      <div class="menu__item-price">
          <div class="menu__item-cost">Цена:</div>
          <div class="menu__item-total"><span>${price}</span> грн/день</div>
      </div>
  `;
  document.querySelector('.menu .container').append(element);
});
} */
}

export default modal;
export {openModal};
export {modalClosed};