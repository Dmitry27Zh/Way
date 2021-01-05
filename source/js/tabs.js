'use strict';

(function () {
  var tabsMenuElement = document.querySelector('.tabs__menu');
  var tabTitleElements = Array.from(tabsMenuElement.querySelectorAll('.tabs__title-link'));
  var tabElements = Array.from(document.querySelectorAll('.tabs__item'));

  var getTabSelector = function () {
    var currentTabTitle = tabTitleElements.find(function (tabTitle) {
      return tabTitle.matches('.tabs__title-link--current');
    });
    var currentTab = tabElements.find(function (tab) {
      return tab.matches('.tabs__item--current');
    });
    return function (evt) {
      evt.preventDefault();
      if (evt.target.matches('.tabs__title-link:not(.tabs__title-link--current)')) {
        currentTabTitle.classList.remove('tabs__title-link--current');
        currentTab.classList.remove('tabs__item--current');
        currentTabTitle = evt.target;
        currentTabTitle.classList.add('tabs__title-link--current');
        var index = tabTitleElements.indexOf(currentTabTitle);
        currentTab = tabElements[index];
        currentTab.classList.add('tabs__item--current');
      }
    };
  };

  var tabSelectHandler = getTabSelector();

  tabsMenuElement.addEventListener('click', tabSelectHandler);
})();
