import { describe, it, expect, beforeEach } from "@jest/globals";
import Book from "../book.js";

describe("Book", () => {
  let myBook;

  beforeEach(() => {
    myBook = new Book("Cuentos de la Selva", "Horacio Quiroga", 350);
  });

  it("return the correct title", () => {
    expect(myBook.getTitle()).toBe("Cuentos de la Selva");
  });

  it("return the correct author", () => {
    expect(myBook.getAuthor()).toBe("Horacio Quiroga");
  });

  it("return the correct number of pages", () => {
    expect(myBook.getPages()).toBe(350);
  });

  it("return the correct number of words", () => {
    const bookTitle = "Test";
    const bookAuthor = "Autor";
    const bookPages = 15;
    const bookWords = 1500;
    const bookWithWords = new Book(bookTitle, bookAuthor, bookPages);
    bookWithWords.setWords(bookWords);
    expect(bookWithWords.getWords()).toBe(bookWords);
  });

  it("throws when trying to get the number of words without setting them", () => {
    const bookTitle = "Test";
    const bookAuthor = "Autor";
    const bookPages = 15;
    const bookWithWords = new Book(bookTitle, bookAuthor, bookPages);
    expect(() => bookWithWords.getWords()).toThrow();
  });

  it("check title is a string", () => {
    expect(() => (myBook = new Book(451, 1, 350))).toThrow();
  });

  it("check title is not empty", () => {
    expect(() => (myBook = new Book("", "Horacio Quiroga", 350))).toThrow();
  });

  it("check author is a string", () => {
    expect(typeof myBook.getAuthor() === "string");
  });

  it("check it does not allow non-string values as author", () => {
    expect(() => new Book("Test Title", undefined, 1)).toThrow();
  });

  it('check it sets author as "Anonimo" if string length is 0', () => {
    const book = new Book("Test Title", "", 1);
    expect(book.getAuthor()).toEqual("Anónimo");
  });

  it("check page param is a number", () => {
    expect(() => new Book("Test Title", "Test Author", "NotANumber")).toThrow();

    const correctBook = new Book("Test Title", "Test Author", 1);

    expect(typeof correctBook.getPages()).toEqual("number");
  });

  it("check pages not < 1", () => {
    expect(() => new Book("Test Title", "Test Author", -1)).toThrow();
    expect(() => new Book("Test Title", "Test Author", -5)).toThrow();
    expect(() => new Book("Test Title", "Test Author", -100)).toThrow();
  });

  it("toString() without words", () => {
    const bookTitle = "Test";
    const bookAuthor = "Autor";
    const bookPages = 15;
    const bookWithoutWords = new Book(bookTitle, bookAuthor, bookPages);

    expect(bookWithoutWords.toString()).toEqual(
      `Título: ${bookTitle} Autor: ${bookAuthor} Páginas: ${bookPages}`
    );
  });

  it("toString() with words", () => {
    const bookTitle = "Test";
    const bookAuthor = "Autor";
    const bookPages = 15;
    const bookWords = 1500;

    const bookWithWords = new Book(bookTitle, bookAuthor, bookPages);
    bookWithWords.setWords(bookWords);

    expect(bookWithWords.toString()).toEqual(
      `Título: ${bookTitle} Autor: ${bookAuthor} Páginas: ${bookPages} Numero de palabras: ${bookWords}`
    );
  });

  it("check setWords only accepts numbers", () => {
    expect(() => myBook.setWords("NaN")).toThrow();
  });

  it("check wordsPerPage throws if words is not defined", () => {
    const bookTitle = "Test";
    const bookAuthor = "Autor";
    const bookPages = 15;

    const book = new Book(bookTitle, bookAuthor, bookPages);

    expect(() => book.wordsPerPage()).toThrow();
  });

  it("check wordsPerPage returns the average of words per page", () => {
    const bookTitle = "Test";
    const bookAuthor = "Autor";
    const bookPages = 15;
    const bookWords = 1500;

    const book = new Book(bookTitle, bookAuthor, bookPages);
    book.setWords(bookWords);

    expect(book.wordsPerPage()).toEqual(100);
  });
});
