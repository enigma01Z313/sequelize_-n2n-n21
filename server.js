"use strict";
const http = require("http");
const mysql = require("mysql2");
const app = require("./app/app");
const server = http.createServer(app);
const port = 30040;

const mysqldb = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
});

mysqldb.connect((err) => {
  if (err) throw err;
  console.log("mysql connected");
});

server.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
