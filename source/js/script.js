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

var popapYourCity = document.querySelector('.city-popap');
var popapQuestion = document.querySelector('.question-popap');
var linkYourCity = document.querySelector('.header__contacts-city');
var linkQuestion = document.querySelector('.footer__text-question');
var linkClosePopapYourCity = document.querySelector('.city-popap .popap-close');
var linkClosePopapQuestion = document.querySelector('.question-popap .popap-close');
var overlayPopap = document.querySelector('.overlay-popap');
var linkBurgerMenu = document.querySelector('.header__burger');
var bodyPage = document.querySelector('.body-js');

if (linkYourCity) {

  linkYourCity.addEventListener('click', function (evt) {
    evt.preventDefault();
    popapYourCity.classList.add('city-popap--show');
    overlayPopap.classList.add('overlay-popap--show');
  });
}

if (linkClosePopapYourCity) {

  linkClosePopapYourCity.addEventListener('click', function (evt) {
    evt.preventDefault();
    popapYourCity.classList.remove('city-popap--show');
    overlayPopap.classList.remove('overlay-popap--show');
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (popapYourCity.classList.contains('city-popap--show')) {
        evt.preventDefault();
        popapYourCity.classList.remove('city-popap--show');
        overlayPopap.classList.remove('overlay-popap--show');
      }
    }
  });

  overlayPopap.addEventListener('click', function (evt) {
    if (popapYourCity.classList.contains('city-popap--show')) {
      evt.preventDefault();
      popapYourCity.classList.remove('city-popap--show');
      overlayPopap.classList.remove('overlay-popap--show');
    }
  });
}

if (linkQuestion) {

  linkQuestion.addEventListener('click', function (evt) {
    evt.preventDefault();
    popapQuestion.classList.add('question-popap--show');
    overlayPopap.classList.add('overlay-popap--show');
  });
}

if (linkClosePopapQuestion) {

  linkClosePopapQuestion.addEventListener('click', function (evt) {
    evt.preventDefault();
    popapQuestion.classList.remove('question-popap--show');
    overlayPopap.classList.remove('overlay-popap--show');
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (popapQuestion.classList.contains('question-popap--show')) {
        evt.preventDefault();
        popapQuestion.classList.remove('question-popap--show');
        overlayPopap.classList.remove('overlay-popap--show');
      }
    }
  });

  overlayPopap.addEventListener('click', function (evt) {
    if (popapQuestion.classList.contains('question-popap--show')) {
      evt.preventDefault();
      popapQuestion.classList.remove('question-popap--show');
      overlayPopap.classList.remove('overlay-popap--show');
    }
  });
}

if (linkBurgerMenu) {
  linkBurgerMenu.addEventListener('click', function (evt) {
    if (bodyPage.classList.contains('opened__header')) {
      evt.preventDefault();
      bodyPage.classList.remove('opened__header');
    } else {
      evt.preventDefault();
      bodyPage.classList.add('opened__header');
    }
  });
}
