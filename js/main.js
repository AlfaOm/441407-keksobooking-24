// Функция, возвращающая случайное целое число
// из переданного диапазона включительно (от min до max + 1)

/*
const getRandomInteger = function (min, max) {
  const rand = Math.abs(min + Math.random() * (max + 1 - min));
  return Math.round(rand);
};
getRandomInteger(0, 15);
*/

// Функция, возвращающая случайное число с плавающей точкой
// из переданного диапазона включительно
/*
const getRandomFloat = function (min, max, fraction = 0) {
  const fractionDegree = 10 ** fraction;
  return (
    (Math.abs(Math.random() * (max - min) + min) * fractionDegree) /
    fractionDegree
  );
};
getRandomFloat(0, 100, 12);
*/


// дз 4.9

const AVATAR = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
];
const TITLE = [
  'Аренда квартиры', 'Аренда дома', 'Аренда комнаты',
];
const ADDRESS = [
  '{{location.lat}}', '{{location.lng}}',
];
const PRICE = [
  100, 15000,
];
const TYPE = [
  'palace', 'flat', 'house', 'bungalow', 'hotel',
];
const ROOMS = [
  1, 5,
];
const GUESTS = [
  1, 5,
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
const LAT = [
  35.65000, 35.70000,
];
const LNG = [
  139.70000, 139.80000,
];


// author
const getRandomArrayAuthor = function(elements) {
  return elements[_.random(0, elements.length - 1)];
};

const createAuthor = function() {
  return {
    avatar: `img/avatars/user${getRandomArrayAuthor(AVATAR)}.png`,
  };
};

const similarAnnouncementAuthor = Array.from({length: 10}, createAuthor);
similarAnnouncementAuthor(); //во избежание ошибок
// console.log(similarAnnouncementAuthor);


// offer
const getRandomArrayOffer = function(elements) {
  return elements[_.random(0, elements.length - 1)];
};

// price
const getRandomPrice = function (min, max) {
  const rand = Math.abs(min + Math.random() * (max + 1 - min));
  return Math.round(rand);
};
getRandomPrice();

const createOffer = function() {
  return {
    title: getRandomArrayOffer(TITLE),
    address: getRandomArrayOffer(ADDRESS),
    price: getRandomArrayOffer(getRandomPrice(PRICE)),
    type: getRandomArrayOffer(TYPE),
    rooms: getRandomArrayOffer(getRandomPrice(ROOMS)),
    guests: getRandomArrayOffer(getRandomPrice(GUESTS)),
    checkin: getRandomArrayOffer(CHECKIN),
    checkout: getRandomArrayOffer(CHECKOUT),
    features: getRandomArrayOffer(FEATURES),
    description: getRandomArrayOffer(DESCRIPTION),
    photos: getRandomArrayOffer(PHOTOS),
  };
};

const similarAnnouncementOffer = Array.from({ length: 10 }, createOffer);
similarAnnouncementOffer(); //во избежание ошибок
// console.log(similarAnnouncementOffer);


// location
const getRandomArrayLocation = function(elements) {
  return elements[_.random(0, elements.length - 1)];
};

const getRandomLocation = function() {
  return {
    lat: getRandomArrayLocation(LAT),
    lng: getRandomArrayLocation(LNG),
  };
};

const similarAnnouncementLocation = Array.from({ length: 10 }, getRandomLocation);
similarAnnouncementLocation(); //во избежание ошибок
// console.log(similarAnnouncementLocation);
