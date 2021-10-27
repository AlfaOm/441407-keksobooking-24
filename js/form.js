const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

const MIN_PRICE = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};


const formNotice = document.querySelector('.ad-form');
const formFilters = document.querySelector('.map__filters');
const allFieldset = formNotice.getElementsByTagName('fieldset');
const noticeTitleInput = formNotice.querySelector('#title');
const quantityRoom = formNotice.querySelector('#room_number');
const quantityCapacity = formNotice.querySelector('#capacity');
const typeHabitation = formNotice.querySelector('#type');
const priceInput = formNotice.querySelector('#price');
const timeIn = formNotice.querySelector('#timein');
const timeOut = formNotice.querySelector('#timeout');


// Неактивное состояние форм
const addBlockForm = () => {
  formNotice.classList.add('ad-form--disabled');
  formFilters.classList.add('ad-form--disabled');
  allFieldset.forEach((element) => {
    element.disabled = true;
  });
};
addBlockForm();

// Активация форм
const removeBlockForm = () => {
  formNotice.classList.remove('ad-form--disabled');
  formFilters.classList.remove('ad-form--disabled');
  allFieldset.forEach((element) => {
    element.disabled = false;
  });
};
removeBlockForm();

// Неактивное состояние форм
// const addBlockForm = () => {
//   formNotice.classList.add('ad-form--disabled');
//   formFilters.classList.add('ad-form--disabled');
//   for (let i = 0; i < allFieldset.length; i++) {
//     allFieldset[i].disabled = true;
//   }
// };
// addBlockForm();

// // Активация форм
// const removeBlockForm = () => {
//   formNotice.classList.remove('ad-form--disabled');
//   formFilters.classList.remove('ad-form--disabled');
//   for (let i = 0; i < allFieldset.length; i++) {
//     allFieldset[i].disabled = false;
//   }
// };
// removeBlockForm();


// Валидация заголовка объявления
noticeTitleInput.addEventListener('input', () => {
  const valueLength = noticeTitleInput.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    noticeTitleInput.setCustomValidity(`Ещё ${ MIN_TITLE_LENGTH - valueLength } симв.`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    noticeTitleInput.setCustomValidity(`Удалите лишние ${ valueLength - MAX_TITLE_LENGTH } симв.`);
  } else {
    noticeTitleInput.setCustomValidity('');
  }

  noticeTitleInput.reportValidity();
});


// Валидация кол-ва комнат и кол-ва гостей
quantityRoom.addEventListener('change', (evt) => {
  const choosenValue = (evt.target.value === '100') ? '0' : evt.target.value;
  for (let i = 0; i < quantityCapacity.length; i++) {
    quantityCapacity[i].disabled = true;
    if (quantityCapacity[i].value === choosenValue) {
      quantityCapacity[i].disabled = false;
    }
    if (quantityCapacity[i].value <= choosenValue && quantityCapacity[i].value > 0) {
      quantityCapacity[i].disabled = false;
    }
  }
});


// Валидация цены за ночь по типу жилья

typeHabitation.addEventListener('change', (evt) => {
  const minPrice = MIN_PRICE[evt.target.value];
  priceInput.min = minPrice;
  priceInput.placeholder = minPrice.toString();
});


// Синхронизация времени заезда и выезда
timeIn.addEventListener('change', (evt) => {
  timeOut.value = evt.target.value;
});

timeOut.addEventListener('change', (evt) => {
  timeIn.value = evt.target.value;
});
