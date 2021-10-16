import {getMockAds} from './mock-data.js';

const dataNotice = document.querySelector('.map');

const blockNotice = dataNotice.querySelector('#map-canvas');
const cardNoticeTemplate = document.querySelector('#card').content.querySelector('.popup');

const cardNotice = getMockAds();

cardNotice.forEach((value) => {
  const noticeElement = cardNoticeTemplate.cloneNode(true);
  if (value === '') {
    noticeElement.querySelector('.popup__'); //попытка выполнить пункт,
    //когда данных для заполнения не хватает
  }
  noticeElement.querySelector('.popup__title').textContent = value.offer.title;
  noticeElement.querySelector('.popup__text--address').textContent = value.offer.address;
  noticeElement.querySelector('.popup__text--price').textContent = `${value.offer.price} ₽/ночь`;
  noticeElement.querySelector('.popup__type').textContent = value.offer.type;
  noticeElement.querySelector('.popup__text--capacity').textContent = `${value.offer.rooms} комнаты для ${value.offer.guests} гостей`;
  noticeElement.querySelector('.popup__text--time').textContent = `Заезд после ${value.offer.checkin}, выезд до ${value.offer.checkout}`;
  noticeElement.querySelector('.popup__feature').classList.add('popup__feature--' + value.offer.features);
  noticeElement.querySelector('.popup__description').textContent = value.offer.description;
  noticeElement.querySelector('.popup__photo').src = value.offer.photos;
  noticeElement.querySelector('.popup__avatar').src = value.author.avatar;
  blockNotice.appendChild(noticeElement);
});
// .textContent = value.offer.features
