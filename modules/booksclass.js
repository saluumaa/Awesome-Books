export default class Books {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.id = Math.floor(Math.random() * 1000000);
  }
}