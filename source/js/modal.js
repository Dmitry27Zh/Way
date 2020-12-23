'use strict';

var buyButtonElements = document.querySelectorAll('.buy-js');
var modalOrder = document.querySelector('.modal--order');

var showModal = function (modalElement) {
  modalElement.classList.add('modal--show');
  var modalClose = modalElement.querySelector('.modal__close');
  var modalOverlay = modalElement.querySelector('.modal__overlay');
  var closeModalHandler = function () {
    modalElement.classList.remove('modal--show');
    modalClose.removeEventListener('click', closeModalHandler);
  };
  modalClose.addEventListener('click', closeModalHandler);
  modalOverlay.addEventListener('click', closeModalHandler);
};

buyButtonElements.forEach(function (button) {
  button.addEventListener('click', function (evt) {
    evt.preventDefault();
    showModal(modalOrder);
  });
});
