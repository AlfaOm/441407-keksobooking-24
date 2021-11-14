import {renderMarkers, clearMarkers} from './map.js';
import {debounce} from './utils/debounce.js';
import {mapFiltersForm} from './form.js';


const housingType = mapFiltersForm.querySelector('#housing-type');
const housingPrice = mapFiltersForm.querySelector('#housing-price');
const housingRooms = mapFiltersForm.querySelector('#housing-rooms');
const housingGuests = mapFiltersForm.querySelector('#housing-guests');
// const housingFeatures = Array.from(mapFiltersForm.querySelectorAll('input[name="features"]:checked'));
// const housingFeatures = mapFiltersForm.querySelectorAll('.map__checkbox:checked');

const HousingPrice = {
  low: 10000,
  middle: 50000,
};

const HousingPriceName = {
  low: 'low',
  middle: 'middle',
  high: 'high',
};

// По типу жилья
const selectHousingType = (item) => item.offer.type === housingType.value || housingType.value === 'any';

const selectHousingPrice = (item) => housingPrice.value === 'any'
  || item.offer.price < HousingPrice.low && housingPrice.value === HousingPriceName.low
  || item.offer.price >= HousingPrice.low && item.offer.price < HousingPriceName.high && housingPrice.value === HousingPriceName.middle
  || item.offer.price >=  HousingPrice.high && housingPrice.value === HousingPriceName.high;

// По количеству комнат
const selectHousingRooms = (item) => item.offer.rooms === +housingRooms.value || housingRooms.value === 'any';

// По количеству гостей
const selectHousingGuests = (item) => item.offer.guests === +housingGuests.value || housingGuests.value === 'any';

// По удобствам
const selectHousingFeatures = (item) => {
  const housingFeatures = Array.from(mapFiltersForm.querySelectorAll('.map__checkbox:checked'));
  const featuresValue = housingFeatures.map((it) => it.value);
  if (!item.offer.features) {
    return false;
  }
  return featuresValue.every((value) => item.offer.features.includes(value));
};


export const setMapFilters = (offer) => {
  mapFiltersForm.addEventListener('change', debounce(() => {
    const selectOffers = offer.filter((item) =>
      selectHousingType(item)
      && selectHousingPrice(item)
      && selectHousingRooms(item)
      && selectHousingGuests(item)
      && selectHousingFeatures(item));
    clearMarkers();
    renderMarkers(selectOffers.slice(0, 10));
  },
  ));
};


export const resetMapFilterForm = () => {
  mapFiltersForm.reset();
};
