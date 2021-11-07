import {returnMapPinStarting} from './map.js';
import {isEscapeKey} from './utils.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const ALERT_SHOW_TIME = 5000;

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


// Неудачная загрузка данных с сервера

export const createMessageError = (message) => {
  const messageContainer = document.createElement('p');
  messageContainer.style.zIndex = 100;
  messageContainer.style.position = 'absolute';
  messageContainer.style.top = '700px';
  messageContainer.style.left = '25%';
  messageContainer.style.right = 0;
  messageContainer.style.width = '1000px';
  messageContainer.style.padding = '70px 10px';
  messageContainer.style.fontSize = '50px';
  messageContainer.style.fontWeight = 600;
  messageContainer.style.fontFamily = 'Arial';
  messageContainer.style.textAlign = 'center';
  messageContainer.style.backgroundColor = '#ff0303';
  messageContainer.style.color = '#ffffff';
  messageContainer.style.opacity = '0.6';
  messageContainer.style.borderRadius = '20px';

  messageContainer.textContent = message;

  document.body.append(messageContainer);

  setTimeout(() => {
    messageContainer.remove();
  }, ALERT_SHOW_TIME);
};
