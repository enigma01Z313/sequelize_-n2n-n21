module.exports = {
  development: {
    username: "root",
    password: "",
    database: "triple_join",
    host: "localhost",
    dialect: "mysql",
    operatorsAliases: "0",
    logging: true,
  },
  test: {
    username: "root",
    password: "",
    database: "triple_join",
    host: "localhost",
    dialect: "mysql",
    operatorsAliases: "0",
    logging: false,
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: "0",
  },
};
