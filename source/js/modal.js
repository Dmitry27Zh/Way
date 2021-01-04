'use strict';

var buyButtonElements = document.querySelectorAll('.buy-js');
var modalOrder = document.querySelector('.modal--order');
var orderFormElemenent = modalOrder.querySelector('.order__form');
var modalSuccess = document.querySelector('.modal--success');
var feedbackFormElement = document.querySelector('.feedback__form');

var onSuccessFeedback = function (evt) {
  evt.preventDefault();
  showModal(modalSuccess);
};

var feedbackSubmitHandler = function (evt) {
  onSuccessFeedback(evt);
  evt.target.removeEventListener('submit', feedbackSubmitHandler);
};

var showModal = function (modalElement) {
  modalElement.classList.add('modal--show');
  var modalClose = modalElement.querySelector('.modal__close');
  var modalOverlay = modalElement.querySelector('.modal__overlay');
  var closeModalHandler = function () {
    modalElement.classList.remove('modal--show');
    modalClose.removeEventListener('click', closeModalHandler);
    document.removeEventListener('keydown', escKeydownHandler);
  };
  var escKeydownHandler = function (evt) {
    if (evt.key === 'Escape') {
      closeModalHandler();
    }
  };
  modalClose.addEventListener('click', closeModalHandler);
  modalOverlay.addEventListener('click', closeModalHandler);
  document.addEventListener('keydown', escKeydownHandler);
  var orderSubmitHandler = function (evt) {
    onSuccessFeedback(evt);
    closeModalHandler();
    evt.target.removeEventListener('submit', orderSubmitHandler);
  };
  if (modalElement === modalOrder) {
    orderFormElemenent.addEventListener('submit', orderSubmitHandler);
  }
};

buyButtonElements.forEach(function (button) {
  button.addEventListener('click', function (evt) {
    evt.preventDefault();
    showModal(modalOrder);
  });
});

feedbackFormElement.addEventListener('submit', function (evt) {
  evt.preventDefault();
  showModal(modalSuccess);
});
