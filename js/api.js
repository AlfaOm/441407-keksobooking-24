import {showMessageError} from './utils.js';
import {showMessageSuccess} from './utils.js';
import {returnMapPinStarting} from './map.js';
import {closeMessage} from './utils.js';
import {formNotice} from './form.js';


const getData = (onSuccess) => {
  fetch('https://24.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((notices) => {
      onSuccess(notices);
    });
};


const sendData = () => {
  formNotice.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);
    fetch(
      'https://24.javascript.pages.academy/keksobooking',
      {
        method: 'POST',
        body: formData,
      },
    )
      .then((responce) => {
        if (responce.ok) {
          showMessageSuccess();
          returnMapPinStarting();
          evt.target.reset(),
          closeMessage(document.querySelector('.success'));
        } else {
          showMessageError();
          closeMessage(document.querySelector('.error'));
        }
      })
      .catch(() => {
        showMessageError();
        closeMessage(document.querySelector('.error'));
      });
  });
};

getData();
sendData();

export {getData, sendData};
