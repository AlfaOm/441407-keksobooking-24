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

// Функция, возвращающая случайное целое число
const getRandomInteger = function (min, max) {
  const rand = Math.abs(min + Math.random() * (max + 1 - min));
  return Math.round(rand);
};

// Функция, возвращающая случайное число с плавающей точкой
const getRandomFloat = function (min, max, fraction = 1) {
  const fractionDegree = 10 ** fraction;
  const result = ((Math.abs(Math.random() * (max - min) + min) * fractionDegree) / fractionDegree);
  return result.toFixed(fraction);
};

const getRandomArrayElement = function (elements) {
  return elements[_.random(0, elements.length - 1)];
};


// const createAuthor = function (index) {
//   if (index < 10) {
//     return {
//       avatar: `img/avatars/user0${index}.png`,
//     };
//   } else {
//     return {
//       avatar: `img/avatars/user${index}.png`,
//     };
//   }
// };

const createAuthor = function (index) {
  const avatarNumber = index < 10 ? `img/avatars/user0${index}.png` : `img/avatars/user${index}.png`;
    return {
      avatar: avatarNumber,
    };
  };



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


const createAd = function (index) {
  return {
    author: createAuthor(index + 1),
    offer: createOffer(),
    location: getRandomLocation(),
  };
};


const mockData = new Array(10).fill('').map((__, index) => createAd(index));

mockData;
console.log(mockData);
