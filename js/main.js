
import {drawNotices} from './popup.js';
import './map.js';
import {renderMarkers} from './map.js';
import {showMessageSuccess} from './utils.js';
import {getData} from './api.js';
import {setFormSubmit} from './form.js';

const NOTICE_COUNT = 10;
getData((notices) => {
  drawNotices(notices.slice(0, NOTICE_COUNT));
});

renderMarkers(drawNotices());
setFormSubmit(showMessageSuccess);
