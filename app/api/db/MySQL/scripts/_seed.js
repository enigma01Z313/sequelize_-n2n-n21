"use strict";

const { v4: uuidv4 } = require("uuid");
const { Book, Author, AuthorType, BookAuthor } = require("../models");

(async function () {
  // Books
  const book1 = await Book.create({
    uuid: uuidv4(),
    name: "Book 1",
  });

  const book2 = await Book.create({
    uuid: uuidv4(),
    name: "Book 2",
  });
  console.log("Book seed has been finished");

  ///Authors
  const author1 = await Author.create({
    uuid: uuidv4(),
    name: "Author 1",
  });

  const author2 = await Author.create({
    uuid: uuidv4(),
    name: "Author 2",
  });
  console.log("Author seed has been finished");

  ///Author Types
  const authorType1 = await AuthorType.create({
    uuid: uuidv4(),
    name: "Type 1",
  });

  const authorType2 = await AuthorType.create({
    uuid: uuidv4(),
    name: "Author 2",
  });
  console.log("Author seed has been finished");

  await BookAuthor.create({
    book_id: book1.id,
    author_id: author1.id,
    author_type_id: authorType1.id,
  });
  await BookAuthor.create({
    book_id: book1.id,
    author_id: author2.id,
    author_type_id: authorType2.id,
  });

  await BookAuthor.create({
    book_id: book2.id,
    author_id: author2.id,
    author_type_id: authorType1.id,
  });
  await BookAuthor.create({
    book_id: book2.id,
    author_id: author1.id,
    author_type_id: authorType2.id,
  });
  console.log("BookAuthor seed has been finished");

  process.exit();
})();
