import { configDotenv } from "dotenv";
import mysql from "mysql2";

configDotenv();

const mysqlCredentials = {
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  db_name: process.env.MYSQL_DBNAME,
};

const uri = `mysql://${mysqlCredentials.user}:${mysqlCredentials.password}@${mysqlCredentials.host}:${mysqlCredentials.port}/${mysqlCredentials.db_name}`;

const connection = mysql.createConnection(uri);

const id = "1 or true";

connection.connect((err) => {
  if (err) console.log(err);
  connection.query(
    "SELECT * FROM users WHERE id = ?;",
    [id],
    (err, result, fields) => {
      if (err) console.log(err);
      console.log(result);
    }
  );
  connection.end((err) => {
    console.log(err);
    console.log("Se cerró la conexión");
  });
});
