
import {showMessageSuccess, showMessageError} from './show-message.js';
import {setFormSubmit} from './form.js';
import {loadAvatar, loadFotoLodging} from './add-avatar-foto.js';


setFormSubmit(showMessageSuccess, showMessageError);
loadAvatar();
loadFotoLodging();
