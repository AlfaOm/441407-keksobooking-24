import {getRandomInteger, getRandomFloat, getRandomArrayElement} from './random-function.js';

const TITLE = [
  'Аренда квартиры', 'Аренда дома', 'Аренда комнаты',
];
const TYPE = [
  'palace', 'flat', 'house', 'bungalow', 'hotel',
];
const CHECKIN = [
  '12:00', '13:00', '14:00',
];
const CHECKOUT = [
  '12:00', '13:00', '14:00',
];
const FEATURES = [
  'wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner',
];
const DESCRIPTION = [
  'В стиле модерн, с видом на океан', 'Большой балкон с бассейном',
];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];


const createAuthor = function (index) {
  if (index < 10) {
    return {
      avatar: `img/avatars/user0${index}.png`,
    };
  }
  return {
    avatar: `img/avatars/user${index}.png`,
  };
};


// const createAuthor = function (index) {
//   const avatarNumber = index < 10 ? ${0}index : index;
//   return {
//     avatar: `img/avatars/user${avatarNumber}.png`,
//   };
// };


const getRandomLocation = function () {
  return {
    lat: getRandomFloat(35.65000, 35.70000, 5),
    lng: getRandomFloat(139.70000, 139.80000, 5),
  };
};


const createOffer = function () {
  return {
    title: getRandomArrayElement(TITLE),
    address: getRandomLocation(),
    price: getRandomInteger(100, 1500),
    type: getRandomArrayElement(TYPE),
    rooms: getRandomInteger(1, 5),
    guests: getRandomInteger(1, 5),
    checkin: getRandomArrayElement(CHECKIN),
    checkout: getRandomArrayElement(CHECKOUT),
    features: getRandomArrayElement(FEATURES),
    description: getRandomArrayElement(DESCRIPTION),
    photos: getRandomArrayElement(PHOTOS),
  };
};


export {TITLE, TYPE, CHECKIN, CHECKOUT, FEATURES, DESCRIPTION, PHOTOS, createAuthor, getRandomLocation, createOffer};
