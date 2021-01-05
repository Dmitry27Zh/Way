'use strict';

(function () {
  var buyButtonElements = document.querySelectorAll('.buy-js');
  var modalOrder = document.querySelector('.modal--order');
  var orderFormElemenent = modalOrder.querySelector('.order__form');
  var orderTelElement = orderFormElemenent.querySelector('.order__input--tel');
  var modalSuccess = document.querySelector('.modal--success');

  var onSuccessFeedback = function (evt) {
    evt.preventDefault();
    showModal(modalSuccess);
    orderTelElement.removeEventListener('input', orderTelInputHandler);
  };

  var orderTelInputHandler = function (evt) {
    window.validation.checkTelInput(evt.target);
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
      evt.preventDefault();
      window.validation.checkFeedbackForm(orderTelElement, function () {
        onSuccessFeedback(evt);
        closeModalHandler();
        evt.target.removeEventListener('submit', orderSubmitHandler);
      });
    };
    if (modalElement === modalOrder) {
      orderTelElement.focus();
      orderTelElement.addEventListener('input', orderTelInputHandler);
      orderFormElemenent.addEventListener('submit', orderSubmitHandler);
    }
  };

  buyButtonElements.forEach(function (button) {
    button.addEventListener('click', function (evt) {
      evt.preventDefault();
      showModal(modalOrder);
    });
  });

  window.modal = {
    modalSuccess: modalSuccess,
    showModal: showModal,
  };
})();
