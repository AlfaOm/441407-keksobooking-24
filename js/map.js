
import {removeBlockForm} from './form.js';
import {createCardNotice} from './popup.js';


const DEFAULT_LAT_LOCATION = 35.68770;
const DEFAULT_LNG_LOCATION = 139.75433;
const ZOOM_MAP = 12;

const address = document.querySelector('#address');

// Создание карты. Центр и масштаб карты
const map = L.map('map-canvas')
  .on('load', () => {
    removeBlockForm(); // Активация форм при инициализации карты
    address.value = `${DEFAULT_LAT_LOCATION}, ${DEFAULT_LNG_LOCATION}`;
  })
  .setView({
    lat: DEFAULT_LAT_LOCATION,
    lng: DEFAULT_LNG_LOCATION,
  }, ZOOM_MAP);


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
    lat: DEFAULT_LAT_LOCATION,
    lng: DEFAULT_LNG_LOCATION,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);
mainPinMarker.addTo(map);


// Обработчик событий метки. Возвращает новые координаты
mainPinMarker.on('moveend', (evt) => {
  const mainPinLocation = evt.target.getLatLng();
  address.value = `${mainPinLocation.lat.toFixed(5)}, ${mainPinLocation.lng.toFixed(5)}`;
});


// Возвращает метку и карту к исходному состоянию
export const returnMapPinStarting = () => {
  mainPinMarker.setLatLng({
    lat: DEFAULT_LAT_LOCATION,
    lng: DEFAULT_LNG_LOCATION,
  });

  map.setView({
    lat: DEFAULT_LAT_LOCATION,
    lng: DEFAULT_LNG_LOCATION,
  }, ZOOM_MAP);

  address.value = `${DEFAULT_LAT_LOCATION}, ${DEFAULT_LNG_LOCATION}`;

};

const markerGroup = L.layerGroup().addTo(map);


// Отображение меток объявлений
// Их расположение на карте по полученным данным
// Показ балуна

export const renderMarkers = (data) => {
  data.forEach((offer) => {
    const lat = offer.location.lat;
    const lng = offer.location.lng;
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
      .addTo(markerGroup)
      .bindPopup(createCardNotice(offer));
  });
};

export const clearMarkers = () => markerGroup.clearLayers();
