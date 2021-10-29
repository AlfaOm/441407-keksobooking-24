
import {getMockAds} from './mock-data.js';
import {drawNotices} from './popup.js';
import './form.js';
import './map.js';

const data = getMockAds(10);
window.console.log(data);

drawNotices(getMockAds(1));
