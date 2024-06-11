import { describe, it, expect, beforeEach } from '@jest/globals';
import Library from '../library.js';
import Book from '../book.js';

describe('Library', () => {
  let myLibrary;

  beforeEach(() => {
    myLibrary = new Library('Biblioteca');
  });

  it('add a book to the library', () => {
    myLibrary.addBook('Cuentos de la Selva', 'Horacio Quiroga', 120);
    const aBook = myLibrary.getInventory()[myLibrary.getInventory().length - 1];
    expect(aBook).toBeInstanceOf(Book);
    expect(aBook.getTitle()).toBe('Cuentos de la Selva');
  });

  it('return the total number of books', () => {
    myLibrary.addBook('Cuentos de la Selva', 'Horacio Quiroga', 120);
    myLibrary.addBook('El Hombre que Calculaba', 'Malba Tahan', 286);
    expect(myLibrary.totalBooks()).toBe(2);
  });

  it('set the name of the library', () => {
    myLibrary.setName('Montevideo');
    expect(myLibrary.getName()).toBe('Montevideo');
  });

  it('throw an error when setting an invalid name', () => {
    expect(() => myLibrary.setName(123)).toThrow();
  });
  it('throw an error when setting an empty name', () => {
    expect(() => myLibrary.setName('')).toThrow();
  });

  it('throw an error when calling totalWords with a book in the inventory that does not have words set', () => {
    const bookWithoutWords = new Book('Test', 'Test', 10);
    const bookWithWords = new Book('Test', 'Test', 10);
    bookWithWords.setWords(10);

    myLibrary.addBookToLibrary(bookWithoutWords);
    myLibrary.addBookToLibrary(bookWithWords);

    expect(() => myLibrary.totalWords()).toThrow();
  });

  it('wordsPerPage returns as expected', () => {
    const bookWithWords = new Book('Test', 'Test', 10);
    const bookWithWords2 = new Book('Test', 'Test', 10);
    const amountOfWords1 = 10;
    const amountOfWords2 = 40;
    bookWithWords.setWords(amountOfWords1);
    bookWithWords2.setWords(amountOfWords2);

    myLibrary.addBookToLibrary(bookWithWords);
    myLibrary.addBookToLibrary(bookWithWords2);

    expect(myLibrary.totalWords()).toEqual(amountOfWords1 + amountOfWords2);
  });

  it('throws when addBookToLibrary is called with a non instance of Book', () => {
    const nonBook = {};

    expect(() => myLibrary.addBookToLibrary(nonBook)).toThrow();
  });
});
