/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый (не вызванный) код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */
import {
  isWebp,
  headerFixed,
  togglePopupWindows,
  addTouchClass,
  addLoadedClass,
} from './modules';

// import BurgerMenu from './modules/BurgerMenu';

// import Tabs from 'modules/Tabs';

// import { MousePRLX } from './libs/parallaxMouse'

// import AOS from 'aos'

import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML
 ! (i) необходимо для корректного отображения webp из css
 */
isWebp();

/* Добавление класса touch для HTML если браузер мобильный */
// addTouchClass();

/* Добавление loaded для HTML после полной загрузки страницы */
// addLoadedClass();

/* Модуль для работы с меню (Бургер) */
// new BurgerMenu().init();

/**
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 */
// AOS.init();

/** Параллакс мышей */
// const mousePrlx = new MousePRLX({});

/** Фиксированный header */
// headerFixed();

/**
 *  Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * И на кнопку, которая вызывает окно так же повешай атрибут data-type="<название окна>"

 * На обертку(враппер) окна добавь класс _overlay-bg
 * На кнопку для закрытия окна добавь класс button-close
 */
togglePopupWindows();

// =======================================================================================================
// const tabs = new Tabs('default-tabs', {});

/*Динамический адаптив ===================================================================================
* Что бы перебросить блок в другой блок, повешай на него атрибут:
* data-da="class блока куда нужно перебросить, брекпоинт(ширина экрана), позиция в блоке(цифра либо first,last)"
*/
/*Расскоментировать для использования*/
import { useDynamicAdapt } from './modules/dynamicAdapt.js'
useDynamicAdapt()
// =======================================================================================================

/* Валидация формы =======================================================================================
* В константу записывает нужную форму
* В переменную formNAME передаем форму
* В переменную popupTranks передаем окно благодарности
* Добавить класс _email на input type='mail'
* Добавить каласс _req на input которые нужно проверить
* Добавить класс .popup-thanks для модального окна спасибо
  Раскоментировать для использования
*/ 
import { validForm } from './modules/validFrom.js'
const popupTranks = document.querySelector('.popup-tranks')
const formApplication = document.getElementById('form-application')
const formAbout = document.getElementById('form-about')
const formApplicationTwo = document.getElementById('form-application-two')
const formPopup = document.getElementById('form-popup')


validForm(formApplication, popupTranks)
validForm(formAbout, popupTranks)
validForm(formApplicationTwo, popupTranks)
validForm(formPopup, popupTranks)

// =======================================================================================================


//маска
window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('.tel'), function(input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___-__-__",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
        this.value = new_value;
      }
      if (event.type == "blur" && this.value.length < 5) {
        this.value = "";
      }
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);

  });

});




const calcRangeSumm = document.getElementById('calcRangeSumm')
const numberSumm = document.querySelector('.item-calc__number-summ')
const calcRangeMonth = document.getElementById('calcRangeMonth')
const numbeMonth = document.querySelector('.item-calc__number-month')
calcRangeSumm.addEventListener('input', () => {
  // Обновляем содержимое элемента с классом item-calc__number-summ с текущим значением ползунка
  numberSumm.textContent = numberWithSpaces(calcRangeSumm.value);
});
calcRangeMonth.addEventListener('input', () => {
  // Обновляем содержимое элемента с классом item-calc__number-summ с текущим значением ползунка
  numbeMonth.textContent = numberWithSpaces(calcRangeMonth.value);
});
// Функция для добавления пробелов в числовое значение (для разделения тысяч)
function numberWithSpaces(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
//калькулятор
const numbeConclusion = document.querySelector('.calc-body__number-conclusion')
const buttonCalc = document.querySelector('.calc-body__button')
buttonCalc.addEventListener('click', () => {
  const result = parseInt(calcRangeSumm.value) * parseInt(calcRangeMonth.value) * 2.13
  numbeConclusion.textContent = numberWithSpaces(result)
})


const swiperCertificat = new Swiper('.swiper-certificat', {
  speed: 400,
  spaceBetween: 16,
  slidesPerView: 1,
  modules: [Autoplay, Pagination, Navigation],
  grabCursor: true,
  slideToClickedSlide: true,
  pagination: {
    el: ".certificat__pagination",
    dynamicBullets: true,
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnIteration: false,
  },
  navigation: {
    prevEl: '.certificat__button-back',
    nextEl: '.certificat__button-next',
  },
  loop: true,
  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 25,
      slideToClickedSlide: true,
  },
    901: {
      slidesPerView: 3,
      spaceBetween: 32,
      slideToClickedSlide: true,
  },
  },
});
const swiperVidreviews = new Swiper('.swiper-vidreviews', {
  speed: 400,
  spaceBetween: 16,
  slidesPerView: 1,
  modules: [Autoplay, Pagination, Navigation],
  grabCursor: true,
  slideToClickedSlide: true,
  navigation: {
    prevEl: '.certificat__button-back',
    nextEl: '.certificat__button-next',
  },
  breakpoints: {
    721: {
      slidesPerView: 2,
      spaceBetween: 25,
      slideToClickedSlide: true,
  },
    901: {
      slidesPerView: 3,
      spaceBetween: 32,
      slideToClickedSlide: true,
  },
  },
});

//открытие видео
const popupVideo = document.querySelectorAll('.popup-video')
const buttonOpenVideo = document.querySelectorAll('.slide-vidreviews__button')
const videoFrameAll = document.querySelectorAll('.popup-video__vid iframe');

if (popupVideo.length > 0) {
  for (let index = 0; index < popupVideo.length; index++) {
    buttonOpenVideo[index].addEventListener('click', () => {
      popupVideo[index].classList.add('_is-open')
      // videoFrameAll[index].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');

    })
  }
}

