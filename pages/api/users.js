
const dotenv = require('dotenv')

dotenv.config()

const mysql = require('mysql');

export default function handler(req, res) {
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

  let sql = "SELECT * FROM contacts"
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results)
    //res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
  });

  
}
