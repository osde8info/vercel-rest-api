
const dotenv = require('dotenv')
dotenv.config()

const bcrypt = require('bcrypt')

const mysql = require('mysql2/promise');

const dbinfo =
{
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'phonebook',
}

export default async function handler(req, res) {
  // process user
  const {
    method,
    query: { name, password },
  } = req

  try {
    //Hash password
    const salt = await bcrypt.genSalt(10);
    const token = await bcrypt.hash(name+password, salt);
    res.send({token:token})
  }
  catch (err) {
    console.error(err)
    await conn.end();
    res.status(404).send({})
  }
}
