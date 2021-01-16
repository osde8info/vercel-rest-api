
const dotenv = require('dotenv')
dotenv.config()

const mysql = require('mysql2/promise');

const dbinfo =
{
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'phonebook',
}

export default async function handler(req, res) {
  const conn = await mysql.createConnection(dbinfo);
  const [rows, fields] = await conn.execute("SELECT * FROM contacts");
  await conn.end();
  res.send(rows)
}
