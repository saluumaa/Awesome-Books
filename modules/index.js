import getDateTime from './datetime.js';
import SavelocalItems from './localstorage.js';
import ListBooks from './booklist.js';
import navigation from './navigation.js';

SavelocalItems();
ListBooks();
navigation();
window.addEventListener('load', getDateTime);
