
import {isEscapeKey} from './utils.js';
import {removeAvatarFoto} from './add-avatar-foto.js';
import {resetMapFilterForm} from './map-filters.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const closeButton = errorTemplate.querySelector('.error__button');
const errorLoadServerTemplate = document.querySelector('#error-load-server').content.querySelector('.error-load-server');

const ALERT_SHOW_TIME = 5000;


export const showMessageSuccess = () => {
  const successElement = successTemplate.cloneNode(true);
  document.body.append(successElement);
};


export const showMessageError = () => {
  const errorElement = errorTemplate.cloneNode(true);
  document.body.append(errorElement);
};


export const closeMessage = (modal) => {
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      modal.remove();
      removeAvatarFoto();
      resetMapFilterForm();
    }
  });

  modal.addEventListener('click', () => {
    removeAvatarFoto();
    resetMapFilterForm();
    modal.remove();
  });
};


closeButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeMessage();
});


export const createMessageError = () => {
  const messageContainer = errorLoadServerTemplate.cloneNode(true);
  document.body.append(messageContainer);

  setTimeout(() => {
    messageContainer.remove();
  }, ALERT_SHOW_TIME);
};
