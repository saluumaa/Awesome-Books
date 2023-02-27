import SavelocalItems from './localstorage.js';
import Books from './booksclass.js';

const bookList = document.querySelector('#book-list');
const bookInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const buttonAdd = document.querySelector('#add');

export default class ListBooks {
  static displaybooks() {
    const booksInserted = SavelocalItems.getBook();
    booksInserted.forEach((book) => ListBooks.addBook(book));
  }

  static addBook(book) {
    const div = document.createElement('div');
    div.className = 'trHolder';
    const bookHolder = document.createElement('tr');
    bookHolder.innerHTML = `
        <td>''${book.title}'' by ${book.author}</td>
        <td><button class="remove" data-id="${book.id}">Remove</button></td>
        <hr>
      `;
    div.appendChild(bookHolder);
    bookList.appendChild(div);
  }

  static deleteBook(id) {
    const bookRow = document.querySelector(`[data-id="${id}"]`).closest('tr');
    if (bookRow) {
      bookRow.remove();
      SavelocalItems.removeBook(id);
    }
  }
}
ListBooks.displaybooks();

buttonAdd.addEventListener('click', (e) => {
  e.preventDefault();
  const title = bookInput.value;
  const author = authorInput.value;
  const book = new Books(title, author);
  try {
    SavelocalItems.saveItem(book);
    ListBooks.addBook(book);
    bookInput.value = '';
    authorInput.value = '';
  } catch (error) {
    document.querySelector('.error-message').innerHTML = error.message;
  }
});

bookList.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove')) {
    const id = parseInt(e.target.dataset.id, 10);
    ListBooks.deleteBook(id);
  }
});