import { parseBody } from 'next/dist/next-server/server/api-utils';

const dotenv = require('dotenv')

dotenv.config()

const mysql = require('mysql');

export default function userHandler(req, res) {
  // process user
  const {
    method,
    query: { id, name, tel, mbl, fax },
    body,
  } = req

  // Get data from your database
  const conn = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'phonebook',
  });

  conn.connect((err) => {
    if (err) throw err;
  });

  switch (method) {
    case 'GET':
      // Get data from your database
      let sql = "SELECT * FROM contacts where id=" + id
      let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results[0])
        const id = results[0].id
        const name = results[0].name
        res.json({ id: id, name: name })
      });
      break

    case 'POST':
      // Update or create data in your database
      res.status(200)
      break

    case 'PUT':
      // Update or create data in your database
      res.status(200)
      break

    case 'DELETE':
      // Update or create data in your database
      res.status(200)
      break

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
