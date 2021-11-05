
import {closeMessage} from './show-message.js';
import {createMessageError} from './show-message.js';


export const getData = (onSuccess) => {
  fetch('https://24.javascript.pages.academy/keksobooking/data')
    .then((responce) => {
      if (responce.ok) {
        return responce;
      }
      throw new Error(createMessageError('Не удалось загрузить данные с сервера!!!'));
    })
    .then((response) => response.json())
    .then((notices) => {
      onSuccess(notices);
    });
};

export const sendData = (onSuccess, onError, body) => {

  fetch('https://24.javascript.pages.academy/keksobooking', {
    method: 'POST',
    body,
  })
    .then((responce) => {
      if (responce.ok) {
        onSuccess();
        closeMessage(document.querySelector('.success'));
      } else {
        onError();
        closeMessage(document.querySelector('.error'));
      }
    })
    .catch(() => {
      onError();
      closeMessage(document.querySelector('.error'));
    });
};
