const authorType = require("./models/authorType");

module.exports = (db) => {
  const { Author, Book, BookAuthor, AuthorType } = db;

  //111111111
  // Author.belongsToMany(Book, {
  //   through: BookAuthor,
  //   as: "books",
  //   foreignKey: "author_id",
  // });

  // Book.belongsToMany(Author, {
  //   through: BookAuthor,
  //   as: "authors",
  //   foreignKey: "book_id",
  // });

  //222222222222222222
  // Author.hasMany(BookAuthor, { foreignKey: "author_id" });
  // BookAuthor.belongsTo(Author, { foreignKey: "author_id" });

  // Book.hasMany(BookAuthor, { foreignKey: "book_id" });
  // BookAuthor.belongsTo(Book, { foreignKey: "book_id" });

  //3333333333333333333333
  Author.belongsToMany(Book, {
    through: BookAuthor,
    as: "books",
    foreignKey: "author_id",
  });

  Book.belongsToMany(Author, {
    through: BookAuthor,
    as: "authors",
    foreignKey: "book_id",
  });

  Author.hasMany(BookAuthor, { foreignKey: "author_id" });
  BookAuthor.belongsTo(Author, { foreignKey: "author_id" });

  Book.hasMany(BookAuthor, { foreignKey: "book_id" });
  BookAuthor.belongsTo(Book, { foreignKey: "book_id" });

  ////////////////////////////////////////
  ////////////////////////////////////////
  ////////////////////////////////////////
  AuthorType.hasMany(BookAuthor, { foreignKey: "author_type_id" });
  BookAuthor.belongsTo(AuthorType, { foreignKey: "author_type_id" });
  return db;
};
