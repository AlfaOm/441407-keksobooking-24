
import './map.js';
import {renderMarkers} from './map.js';
import {getData} from './api.js';

const NOTICE_COUNT = 10;
getData((notices) => {
  renderMarkers(notices.slice(0, NOTICE_COUNT));
});

