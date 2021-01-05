'use strict';

(function () {
  var navElement = document.querySelector('.main-nav');
  var toggle = navElement.querySelector('.main-nav__toggle');

  navElement.classList.remove('main-nav--nojs');

  toggle.addEventListener('click', function () {
    if (navElement.classList.contains('main-nav--opened')) {
      navElement.classList.remove('main-nav--opened');
    } else {
      navElement.classList.add('main-nav--opened');
    }
  });
})();
