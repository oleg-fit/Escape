'use strict';
var popapYourCity = document.querySelector('.city-popap');
var popapQuestion = document.querySelector('.question-popap');
var linkYourCity = document.querySelector('.header__contacts-city');
var linkQuestion = document.querySelector('.footer__text-question');
var linkClosePopapYourCity = document.querySelector('.city-popap .popap-close');
var linkClosePopapQuestion = document.querySelector('.question-popap .popap-close');
var overlayPopap = document.querySelector('.overlay-popap');
var linkBurgerMenu = document.querySelector('.header__burger');
var bodyPage = document.querySelector('.body-js');
var linksCity = document.querySelectorAll('.city-popap__list-link');

var form = document.querySelector('.question-popap__form');

if (linkYourCity) {

  linkYourCity.addEventListener('click', function (evt) {
    evt.preventDefault();
    bodyPage.classList.add('body-js--overlay');
    popapYourCity.classList.add('city-popap--show');
    overlayPopap.classList.add('overlay-popap--show');
  });
}

if (linkClosePopapYourCity) {

  linkClosePopapYourCity.addEventListener('click', function (evt) {
    evt.preventDefault();
    bodyPage.classList.remove('body-js--overlay');
    popapYourCity.classList.remove('city-popap--show');
    overlayPopap.classList.remove('overlay-popap--show');
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (popapYourCity.classList.contains('city-popap--show')) {
        evt.preventDefault();
        bodyPage.classList.remove('body-js--overlay');
        popapYourCity.classList.remove('city-popap--show');
        overlayPopap.classList.remove('overlay-popap--show');
      }
    }
  });

  overlayPopap.addEventListener('click', function (evt) {
    if (popapYourCity.classList.contains('city-popap--show')) {
      evt.preventDefault();
      bodyPage.classList.remove('body-js--overlay');
      popapYourCity.classList.remove('city-popap--show');
      overlayPopap.classList.remove('overlay-popap--show');
    }
  });
}

if (linkQuestion) {

  linkQuestion.addEventListener('click', function (evt) {
    evt.preventDefault();
    bodyPage.classList.add('body-js--overlay');
    popapQuestion.classList.add('question-popap--show');
    nameInput.focus();
    overlayPopap.classList.add('overlay-popap--show');
  });
}

if (linkClosePopapQuestion) {

  linkClosePopapQuestion.addEventListener('click', function (evt) {
    evt.preventDefault();
    bodyPage.classList.remove('body-js--overlay');
    popapQuestion.classList.remove('question-popap--show');
    overlayPopap.classList.remove('overlay-popap--show');
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (popapQuestion.classList.contains('question-popap--show')) {
        evt.preventDefault();
        bodyPage.classList.remove('body-js--overlay');
        popapQuestion.classList.remove('question-popap--show');
        overlayPopap.classList.remove('overlay-popap--show');
      }
    }
  });

  overlayPopap.addEventListener('click', function (evt) {
    if (popapQuestion.classList.contains('question-popap--show')) {
      evt.preventDefault();
      bodyPage.classList.remove('body-js--overlay');
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

if (linksCity) {
  for (var i = 0; i < linksCity.length; i++) {
    linksCity[i].addEventListener('click', function (evt) {
      if (popapYourCity.classList.contains('city-popap--show')) {
        evt.preventDefault();
        bodyPage.classList.remove('body-js--overlay');
        popapYourCity.classList.remove('city-popap--show');
        overlayPopap.classList.remove('overlay-popap--show');
      }
    });
  }
}


// Валидация формы
if (form) {
  var nameInput = form.querySelector('#name');
  var nameErrorBlock = form.querySelector('.error-name');
  var emailInput = form.querySelector('#mail');
  var emailErrorBlock = form.querySelector('.error-email');
  var textInput = form.querySelector('#question');
  var textErrorBlock = form.querySelector('.error-text');
  var agreeInput = form.querySelector('#agree');
  var textErrorAgree = form.querySelector('.error-agree');

  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  function validation(e) {
    if (nameInput.value === '') {
      e.preventDefault();
      nameErrorBlock.classList.add('error-name--show');
      nameInput.classList.add('input--invalid');
    } else {
      nameErrorBlock.classList.remove('error-name--show');
      nameInput.classList.remove('input--invalid');
      nameInput.classList.add('input--valid');
    }

    if (validateEmail(emailInput.value) === false) {
      e.preventDefault();
      emailErrorBlock.classList.add('error-email--show');
      emailInput.classList.add('input--invalid');
    } else {
      emailErrorBlock.classList.remove('error-email--show');
      emailInput.classList.remove('input--invalid');
      emailInput.classList.add('input--valid');
    }

    if (textInput.value === '') {
      e.preventDefault();
      textErrorBlock.classList.add('error-text--show');
      textInput.classList.add('input--invalid');
    } else {
      textErrorBlock.classList.remove('error-text--show');
      textInput.classList.remove('input--invalid');
      textInput.classList.add('input--valid');
    }

    if (!agreeInput.checked) {
      e.preventDefault();
      textErrorAgree.classList.add('error-agree--show');
    } else {
      textErrorAgree.classList.remove('error-agree--show');
    }
  }

  form.addEventListener('submit', validation);
}
