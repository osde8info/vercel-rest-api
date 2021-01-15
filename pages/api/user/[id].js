
const dotenv = require('dotenv')

dotenv.config()

const mysql = require('mysql');

export default function userHandler(req, res) {
  // process user
  const {
    query: { id, name },
    method,
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
    console.log('Mysql Connected...');
  });

  switch (method) {
    case 'GET':
      // Get data from your database
      let sql = "SELECT * FROM contacts where id=" + id
      let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results)
      });
      break
    case 'POST':
      // Update or create data in your database
      res.status(200).json({ id, name: name || `User ${id}` })
      break
    case 'PUT':
      // Update or create data in your database
      res.status(200).json({ id, name: name || `User ${id}` })
      break
    case 'DELETE':
      // Update or create data in your database
      res.status(200).json({ id, name: name || `User ${id}` })
      break
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
