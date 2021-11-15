
import {getData} from './api.js';
import {showMessageSuccess, showMessageError} from './show-message.js';
import {setFormSubmit} from './form.js';
import {loadAvatar, loadFotoLodging} from './add-avatar-foto.js';


getData();
setFormSubmit(showMessageSuccess, showMessageError);
loadAvatar();
loadFotoLodging();
