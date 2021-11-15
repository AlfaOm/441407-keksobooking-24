
import {closeMessage} from './show-message.js';
import {createMessageError} from './show-message.js';

import {renderMarkers} from './map.js';
import {setMapFilters} from './map-filters.js';

export const getData = () => {
  fetch('https://24.javascript.pages.academy/keksobooking/data')
    .then((responce) => {
      if (responce.ok) {
        return responce;
      }
      throw new Error(createMessageError());
    })
    .then((response) => response.json())
    .then((notices) => {
      renderMarkers(notices.slice(0, 10));
      setMapFilters(notices);
      // onSuccess(notices);
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
