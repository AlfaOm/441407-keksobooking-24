// import {getMockAds} from './mock-data.js';

const dataNotice = document.querySelector('.map');

const blockNotice = dataNotice.querySelector('#map-canvas');
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
// const photosContainer = cardTemplate.querySelector('.popup__photos');
// const photosFragment = document.createDocumentFragment();


const TYPE_NAME = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

// const featureFragment = document.createDocumentFragment();

// offer.features.forEach((offerFeatures) => {
//   const featureListItem = featureContainer.querySelector(`.popup__feature--${offerFeatures}`);

//   if (featureListItem) {
//     featureFragment.append(featureListItem);
//   }
// });

// featureContainer.innerHTML = '';
// featureContainer.append(featureFragment);

// const createFeatureFragment = function (value) {
//   value.offer.features.forEach((offerFeature) => {
//     const featureListItem = document.createElement('li');

//     featureListItem.classList.add('popup__feature');
//     featureListItem.classList.add(`popup__feature--${offerFeature}`);

//     featureFragment.appendChild(featureListItem);
//   });
//   return featureFragment;
// };

// const getPhotos = (offerPhoto, offer) => {
//   offer.photos.forEach((userPhotos) => {
//     const photoElement = document.createElement('img');
//     photoElement.classList.add('popup__photo');
//     photoElement.src = userPhotos;
//     photoElement.width = 45;
//     photoElement.height = 40;
//     photoElement.alt = 'Фотография жилья';
//     offerPhoto.querySelector('.popup__photos').appendChild(photoElement);
//   });
// };


const fillNoticeElement = ({offer, author}) => {
  const noticeElement = cardTemplate.cloneNode(true);

  noticeElement.querySelector('.popup__title').textContent = offer.title;
  noticeElement.querySelector('.popup__text--address').textContent = offer.address;
  noticeElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  noticeElement.querySelector('.popup__type').textContent = TYPE_NAME[offer.type];
  noticeElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  noticeElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  noticeElement.querySelector('.popup__features').innerHTML = '';
  noticeElement.querySelector('.popup__features').innerHTML = offer.features.map((feature) => (
    `<li class="popup__feature popup__feature--${feature}"></li>`
  )).join('');
  noticeElement.querySelector('.popup__description').textContent = offer.description;
  noticeElement.querySelector('.popup__photos').innerHTML = '';
  noticeElement.querySelector('.popup__photos').innerHTML = offer.photos.map((photo) => (
    `<img src="${photo}" class="popup__photo" width="45" height="40" alt="Фотография жилья"></img>`
  )).join('');
  noticeElement.querySelector('.popup__avatar').src = author.avatar;

  return noticeElement;
};


export const drawNotices = (data) => {
  data.forEach((item) => {
    blockNotice.appendChild(fillNoticeElement(item));
  });
};
