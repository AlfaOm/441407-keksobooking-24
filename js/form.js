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
// const formFilters = document.querySelector('.map__filters');
// const allFieldset = formNotice.getElementsByTagName('fieldset');
const noticeTitleInput = formNotice.querySelector('#title');
const quantityRoom = formNotice.querySelector('#room_number');
const quantityCapacity = formNotice.querySelector('#capacity');
const typeHabitation = formNotice.querySelector('#type');
const priceInput = formNotice.querySelector('#price');
// const timeIn = formNotice.querySelector('#timein');
// const timeOut = formNotice.querySelector('#timeout');


// Валидация заголовка объявления
// 1 вариант
// noticeTitleInput.addEventListener('invalid', () => {
//   if (noticeTitleInput.validity.tooShort) {
//     noticeTitleInput.setCustomValidity('Заголовок должен состоять минимум из 30-ти символов');
//   } else if (noticeTitleInput.validity.tooLong) {
//     noticeTitleInput.setCustomValidity('Заголовок не должен превышать 100 символов');
//   } else if (noticeTitleInput.validity.valueMissing) {
//     noticeTitleInput.setCustomValidity('Обязательное поле!');
//   } else {
//     noticeTitleInput.setCustomValidity('');
//   }
// });

// 2 вариант
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

// export const getMinPrice = () => {
//   const indexType = typeHabitation.selectedIndex;

//   if (indexType === 0) {
//     priceInput.placeholder = '0';
//   }
//   if (indexType === 1) {
//     priceInput.placeholder = '1000';
//   }
//   if (indexType === 2) {
//     priceInput.placeholder = '3000';
//   }
//   if (indexType === 3) {
//     priceInput.placeholder = '5000';
//   }
//   if (indexType === 4) {
//     priceInput.placeholder = '10000';
//   }
// };
// typeHabitation.addEventListener('change', getMinPrice);


typeHabitation.addEventListener('change', (evt) => {
  const minPrice = MIN_PRICE[evt.target.value];
  priceInput.min = minPrice;
  priceInput.placeholder = minPrice.toString();
});
