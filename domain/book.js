class Book {
  #title;
  #author;
  #pages;
  #words;

  constructor(title, author, pages) {
    this.setTitle(title);
    this.setAuthor(author);
    this.setPages(pages);
  }

  getTitle() {
    return this.#title;
  }

  getAuthor() {
    return this.#author;
  }

  getPages() {
    return this.#pages;
  }

  getWords() {
    if (typeof this.#words !== 'number' || isNaN(this.#words)) {
      throw new Error(
        'No se puede llamar a getWords sin antes definir una valor para la propiedad (setWords)'
      );
    }
    return this.#words;
  }

  setTitle(title) {
    if (typeof title !== 'string') {
      throw new Error();
    }
    title = title.trim();
    if (title.length === 0) {
      throw new Error();
    }
    this.#title = title;
  }

  setAuthor(author) {
    if (typeof author !== 'string') {
      throw new Error();
    }
    author = author.trim();
    if (author.length === 0) {
      author = 'Anónimo';
    }
    this.#author = author;
  }

  setPages(pages) {
    if (typeof pages !== 'number' || isNaN(pages)) {
      throw new Error();
    }
    if (pages < 1) {
      throw new Error();
    }
    pages = Math.trunc(pages);
    this.#pages = pages;
  }

  setWords(words) {
    if (typeof words !== 'number' || isNaN(words)) {
      throw new Error('setWords solo acepta números');
    }

    this.#words = words;
  }

  wordsPerPage() {
    if (typeof this.#words !== 'number' || isNaN(this.#words)) {
      throw new Error(
        'No se puede llamar a wordsPerPage sin antes haber provisto la cantidad de palabras del libro (setWords)'
      );
    }

    return Math.round(this.#words / this.#pages);
  }

  toString() {
    return `Título: ${this.#title} Autor: ${this.#author} Páginas: ${this.#pages}${
      this.#words ? ` Numero de palabras: ${this.#words}` : ''
    }`;
  }
}

export default Book;
