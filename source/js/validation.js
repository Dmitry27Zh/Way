'use strict';

(function () {
  var feedbackFormElement = document.querySelector('.feedback__form');
  var feedbackTelElement = feedbackFormElement.querySelector('.feedback-tel-js');

  var checkTelInput = function (input) {
    if (input.value[0] !== '+') {
      input.setCustomValidity('Номер должен начинаться с +');
    } else if (isNaN(input.value.slice(1))) {
      input.setCustomValidity('Номер должен состоять из цифр');
    } else if (input.value.length !== 12) {
      input.setCustomValidity('Недостаточно цифр');
    } else {
      input.setCustomValidity('');
    }
    input.reportValidity();
  };

  var checkFeedbackForm = function (input, action) {
    if (input.value.length === 0) {
      input.setCustomValidity('Заполните поле');
    } else {
      input.setCustomValidity('');
      action();
    }
    input.reportValidity();
  };

  feedbackTelElement.addEventListener('input', function (evt) {
    checkTelInput(evt.target);
  });

  feedbackFormElement.addEventListener('submit', function (evt) {
    evt.preventDefault();
    checkFeedbackForm(feedbackTelElement, function () {
      window.modal.showModal(window.modal.modalSuccess);
    });
  });

  window.validation = {
    feedbackTelElement: feedbackTelElement,
    checkTelInput: checkTelInput,
    checkFeedbackForm: checkFeedbackForm,
  };
})();
