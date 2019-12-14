'use strict';
// var pageHeader = document.querySelector('.page-header');
// var headerToggle = document.querySelector('.page-header__toggle');

// pageHeader.classList.remove('page-header--nojs');

// headerToggle.addEventListener('click', function () {
//   if (pageHeader.classList.contains('page-header--closed')) {
//     pageHeader.classList.remove('page-header--closed');
//     pageHeader.classList.add('page-header--opened');
//   } else {
//     pageHeader.classList.add('page-header--closed');
//     pageHeader.classList.remove('page-header--opened');
//   }
// });
var popapYourCity = document.querySelector('.your-city');
var linkYourCity = document.querySelector('.header__contacts-city');
var linkClosePopapYourCity = document.querySelector('.your-city .your-city__btn-close');

if (linkYourCity) {

  linkYourCity.addEventListener('click', function(evt) {
    evt.preventDefault();
    popapYourCity.classList.add('your-city--show');
  });
}

if(linkClosePopapYourCity) {

  linkClosePopapYourCity.addEventListener('click', function(evt) {
    evt.preventDefault();
    popapYourCity.classList.remove('your-city--show');
  });

  window.addEventListener('keydown',  function(evt) {
    if (evt.keyCode === 27) {
      if (popapYourCity.classList.contains('your-city--show')) {
        evt.preventDefault();
        popapYourCity.classList.remove('your-city--show');
      }
    }
  });
}
