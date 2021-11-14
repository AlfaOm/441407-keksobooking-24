
// import {renderMarkers} from './map.js';
import {getData} from './api.js';
import {showMessageSuccess, showMessageError} from './show-message.js';
import {setFormSubmit} from './form.js';
// import {setMapFilters} from './map-filters.js';
import {loadAvatar, loadFotoLodging} from './add-avatar-foto.js';


// const NOTICE_COUNT = 10;
// getData((notices) => {
//   renderMarkers(notices.slice(0, NOTICE_COUNT));
//   setMapFilters(notices);
// });

getData();
setFormSubmit(showMessageSuccess, showMessageError);
loadAvatar();
loadFotoLodging();
