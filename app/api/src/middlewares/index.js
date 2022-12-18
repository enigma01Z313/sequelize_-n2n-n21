const fs = require("fs");
const path = require("path");

const basename = path.basename(__filename);
const middlewares = {};

fs.readdirSync(__dirname)
  .filter((file) => {
    return file !== basename && file[0] !== "_";
  })
  .forEach((file) => {
    const middleware = require(path.join(__dirname, file));
    middlewares[file.slice(0, -3)] = middleware;
  });

module.exports = middlewares;
