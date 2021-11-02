import {removeBlockForm} from './form.js';
import {drawNotices} from './popup.js';

const address = document.querySelector('#address');

// Создание карты. Центр и масштаб карты
const map = L.map('map-canvas')
  .on('load', () => {
    removeBlockForm(); // Активация форм при инициализации карты
  })
  .setView({
    lat: 35.68950,
    lng: 139.69171,
  }, 10);


// Отображение карты
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
  },
).addTo(map);

// Отображение основной метки
const mainPinIcon = L.icon ({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

// Добавление метки на карту
// Исходное состояние метки и возможность её перемещения
const mainPinMarker = L.marker(
  {
    lat: 35.68950,
    lng: 139.69171,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);
mainPinMarker.addTo(map);


// Обработчик событий метки. Возвращает новые координаты
mainPinMarker.on('moveend', (evt) => {
  address.value = evt.target.getLatLng();
});


// Возвращает метку и карту к исходному состоянию
window.addEventListener('click', () => {
  // mainPinMarker.setLatLng({
  //   lat: 35.68950,
  //   lng: 139.69171,
  // });

  map.setView({
    lat: 35.68950,
    lng: 139.69171,
  }, 10);
});

// Временно
const location = [
  {
    title: 'Хонсю',
    lat: 35.63950,
    lng: 139.60160,
  },
  {
    title: 'Хокайдо',
    lat: 35.71893,
    lng: 139.85150,
  },
  {
    title: 'Фудзияма',
    lat: 35.81893,
    lng: 139.55150,
  },
];

// Отображение меток объявлений
// Их расположение на карте по полученным данным
// Показ балуна
location.forEach(({lat, lng, title}) => {
  const icon = L.icon ({
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const offerPinMarker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon,
    },
  );

  offerPinMarker
    .addTo(map)
    .bindPopup(title);
});


const renderMarkers = (data) => {
  data.forEach((ad, lat, lng) => {
    // const lat = advertisements[i].location.lat;
    // const lng = advertisements[i].location.lng;
    const icon = L.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });
    const marker = L.marker(
      {
        lat,
        lng,
      },
      {
        icon,
      },
    );
    marker
      .addTo(map)
      .bindPopup(drawNotices(ad));
  });
};

export {renderMarkers};
