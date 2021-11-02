
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

// =====По шаблону=====
export const showMessageSuccessTemp = () => {
  const showMessageFragment = document.createDocumentFragment();

  const successElement = successTemplate.cloneNode(true);
  showMessageFragment.appendChild(successElement);
  document.body.append(showMessageFragment);

};


export const showMessageSuccess = () => {
  const messageContainer = document.createElement('div');
  messageContainer.classList.add('success');
  messageContainer.innerHTML = '<p class="success__message">Ваше объявление<br>успешно размещено!</p>';
  document.body.append(messageContainer);

  window.addEventListener('click', () => {
    messageContainer.classList.add('hidden');
  });
  // if (isEscapeKey) {
  //   messageContainer.classList.add('hidden');
  // }

};


// Сообщение об ошибке создания объявления

export const showMessageError = () => {
  const showMessageFragment = document.createDocumentFragment();

  const errorElement = errorTemplate.cloneNode(true);
  showMessageFragment.appendChild(errorElement);
  document.body.append(showMessageFragment);
};

// Закрыть сообщение об ошибке
const closeMessageError = errorTemplate.querySelector('.error__button');

closeMessageError.addEventListener('click', () => {
  document.body.append('');
});
