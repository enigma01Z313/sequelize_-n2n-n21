const {
  Book,
  Author,
  BookAuthor,
  AuthorType,
} = require("../../../db/MySQL/models");

module.exports = async (req, res, next) => {
  // const books = await Book.findAll({
  //   include: {
  //     model: BookAuthor,
  //     include: [Author, AuthorType],
  //   },
  // });

  // return res.json(books);

  //return refined authors for test
  const authors = await Author.findAll({
    include: {
      model: BookAuthor,
      include: [Book],
    },
  });

  const refinedAuthors = authors.map(({ uuid: id, name, bookAuthors }) => {
    const books = bookAuthors.map(({ book: { uuid: id, name } }) => {
      return { id, name };
    });

    return { id, name, books };
  });

  return res.json(refinedAuthors);
};
