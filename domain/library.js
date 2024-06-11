import Book from './book.js';

class Library {
  #name;
  #inventory = [];
  //#totalWords;
  //#wordCount;

  constructor(name) {
    this.setName(name);
  }

  setName(name) {
    if (typeof name !== 'string') {
      throw new Error();
    }
    name = name.trim();
    if (name.length === 0) {
      throw new Error();
    }
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  addBook(title, author, pages) {
    const newBook = new Book(title, author, pages);
    this.#inventory.push(newBook);
  }

  addBookToLibrary(book) {
    if (!(book instanceof Book)) {
      throw new Error(
        'Se le paso un input invalido a addBookToLibrary, el input debe ser una instancia de la clase Book'
      );
    }

    this.#inventory.push(book);
  }

  getInventory() {
    return this.#inventory;
  }

  totalBooks() {
    return this.#inventory.length;
  }

  totalWords() {
    return this.#inventory.reduce((acc, curr) => acc + curr.getWords(), 0);
  }
}

export default Library;
