import {renderMarkers, clearMarkers} from './map.js';
import {debounce} from './utils/debounce.js';


const mapFiltersForm = document.querySelector('.map__filters');
const housingType = mapFiltersForm.querySelector('#housing-type');
const housingPrice = mapFiltersForm.querySelector('#housing-price');
const housingRooms = mapFiltersForm.querySelector('#housing-rooms');
const housingGuests = mapFiltersForm.querySelector('#housing-guests');
// const housingFeatures = Array.from(mapFiltersForm.querySelectorAll('input[name="features"]:checked'));

const HousingPrice = {
  any: 'any',
  low: 10000,
  middle: 50000,
};

const HousingPriceName = {
  any: 'any',
  low: 'low',
  middle: 'middle',
  high: 'high',
};

// По типу жилья
const selectHousingType = (item) => {
  item.offer.type === housingType.value || housingType.value === 'any';
};

// По цене
const selectHousingPrice = (item) => {
  item.offer.price < HousingPrice.low && housingPrice.value === HousingPriceName.low
  || item.offer.price >= HousingPrice.low && item.offer.price < HousingPrice.middle && housingPrice.value === HousingPriceName.middle
  || item.offer.price > HousingPrice.middle && housingPrice.value === HousingPriceName.high
  || housingPrice.value === HousingPriceName.any;
};

// По количеству комнат
const selectHousingRooms = (item) => {
  item.offer.rooms === +housingRooms.value || housingRooms.value === 'any';
};

// По количеству гостей
const selectHousingGuests = (item) => {
  item.offer.guests === +housingGuests.value || housingGuests.value === 'any';
};

// По удобствам
const selectHousingFeatures = (item) => {
  const housingFeatures = Array.from(mapFiltersForm.querySelectorAll('input[name="features"]:checked'));
  housingFeatures.every((element) => {
    item.offer.features.includes(element.value);
  });
};


export const setMapFilters = (offers) => {
  mapFiltersForm.addEventListener('change', debounce(() => {
    const selectOffers = offers.filter((item) =>
      selectHousingType(item)
      && selectHousingPrice(item)
      && selectHousingRooms(item)
      && selectHousingGuests(item)
      && selectHousingFeatures(item));
    clearMarkers();
    renderMarkers(selectOffers.slice(0, 10));
  }));
};
