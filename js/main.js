
import {getMockAds} from './mock-data.js';
// import './popup.js';

const data = getMockAds(10);
window.console.log(data);

import {drawNotices} from './popup.js';
drawNotices(getMockAds(1));

import './form.js';
