import { configDotenv } from "dotenv";
import mysql, { ConnectionOptions } from "mysql2/promise";

configDotenv();

const mysqlCredentials = {
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  db_name: process.env.MYSQL_DBNAME,
};

// const uri = `mysql://${mysqlCredentials.user}:${mysqlCredentials.password}@${mysqlCredentials.host}:${mysqlCredentials.port}/${mysqlCredentials.db_name}`;

const params: ConnectionOptions = {
  user: mysqlCredentials.user,
  password: mysqlCredentials.password,
  database: mysqlCredentials.db_name,
  port: parseInt(mysqlCredentials.port as string),
  host: mysqlCredentials.host,
  namedPlaceholders: true,
};

async function testDB() {
  const connection = await mysql.createConnection(params);
  //   const connection = await mysql.createConnection(params);
  console.log("Connected");
  //   const [result] = await connection.query("SELECT * FROM users");
  //   const [insert] = await connection.execute(
  //     "INSERT INTO users VALUES(default, 'Andrés', 21, true);"
  //   );
  //   const deleted = await connection.execute("DELETE FROM users WHERE id = 5;");
  //   const idReq = 1;
  //   const [select] = await connection.execute(
  //     `SELECT * FROM users WHERE id = :numeroId`,
  //     {
  //       numeroId: idReq,
  //     }
  //   );
  //   const queryOpts: QueryOptions = {
  //     sql: `SELECT * FROM users WHERE id = ? and name = ?`,
  //     values: {
  //       id: idReq,
  //       name: nameReq,
  //     },
  //   };
  //   const [select2] = await connection.execute(queryOpts);
  //   console.log(select);
  //   const result = await connection.execute("SELECT * FROM users");
  //   const result = await connection.execute(
  //     "CREATE TABLE users2 (id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY, name2 VARCHAR(40) NOT NULL);"
  //   );
  connection.destroy();
}

// Funcción anónima que se ejecuta sola
(async () => {
  testDB();
})();
