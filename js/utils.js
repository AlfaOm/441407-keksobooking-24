
import {returnMapPinStarting} from './map.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

// Функция, возвращающая случайное целое число
export const getRandomInteger = (min, max) => {
  const rand = Math.abs(min + Math.random() * (max + 1 - min));
  return Math.round(rand);
};

// Функция, возвращающая случайное число с плавающей точкой
export const getRandomFloat = (min, max, fraction = 1) => {
  const fractionDegree = 10 ** fraction;
  const result = ((Math.abs(Math.random() * (max - min) + min) * fractionDegree) / fractionDegree);
  return result.toFixed(fraction);
};

export const getRandomArrayElement = function (elements) {
  return elements[_.random(0, elements.length - 1)];
};

export const isEscapeKey = (evt) => evt.key === 'Escape';


// Сообщение об успешном создании объявления

export const showMessageSuccess = () => {
  const successElement = successTemplate.cloneNode(true);
  document.body.append(successElement);
};


// Сообщение об ошибке создания объявления

export const showMessageError = () => {
  const errorElement = errorTemplate.cloneNode(true);
  document.body.append(errorElement);
};


export const closeMessage = (modal) => {
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey) {
      evt.preventDefault();
      modal.remove();
    }
  });

  window.addEventListener('click', () => {
    modal.remove();
  });

  returnMapPinStarting();
};

const closeButton = errorTemplate.querySelector('.error__button');

closeButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeMessage();
});
