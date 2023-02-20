export default class SavelocalItems {
  static getBook() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static saveItem(book) {
    const books = SavelocalItems.getBook();
    const existingBook = books.find((b) => b.title.toLowerCase() === book.title.toLowerCase());
    if (existingBook) {
      throw new Error(`A book with the title "${book.title}" already exists.`);
    }
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(id) {
    const books = SavelocalItems.getBook();
    const updatedBooks = books.filter((book) => book.id !== id);
    localStorage.setItem('books', JSON.stringify(updatedBooks));
  }
}