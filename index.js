import getDateTime from './modules/datetime.js';
import SavelocalItems from './modules/localstorage.js';
import ListBooks from './modules/booklist.js';
import navigation from './modules/navigation.js';

SavelocalItems();
ListBooks();
navigation();
window.addEventListener('load', getDateTime);

/* eslint-disable  max-classes-per-file */
export default class Books {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.id = Math.floor(Math.random() * 1000000);
  }
}
