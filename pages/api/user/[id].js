import { parseBody } from 'next/dist/next-server/server/api-utils';

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

export default async function userHandler(req, res) {
  // process user
  const {
    method,
    query: { id, name, tel, mbl, fax },
    body,
  } = req

  const conn = await mysql.createConnection(dbinfo);

  switch (method) {
    case 'GET':
      try {
        var [rows, fields] = await conn.execute('SELECT * FROM contacts where id=?', [id]);
        await conn.end();
        res.send(rows[0])
      }
      catch (err) {
        console.error(err)
        await conn.end();
        res.status(404).send({})
      }
      break

    case 'POST':
      // create contact
      try {
        var rsh = await conn
          .execute(
            'insert into contacts(name,tel,mbl,fax) values (?,?,?,?)',
            [body.name, body.tel, body.mbl, body.fax]);
        await conn.end();
        res.status(200).send({})
      }
      catch (err) {
        console.error(err)
        await conn.end();
        res.status(404).send({})
      }
      break

    case 'PUT':
      // update contact
      try {
        var rsh = await conn
          .execute(
            'update contacts set name=?,tel=?,mbl=?,fax=? where id = ?',
            [body.name, body.tel, body.mbl, body.fax, id]);
        await conn.end()
        res.status(200).send({})
      }
      catch (err) {
        console.error(err)
        await conn.end();
        res.status(404).send({})
      }
      break

    case 'DELETE':
      // delete contact
      try {
        var rsh = await conn
          .execute('delete from contacts where id = ?', [id]);
        await conn.end();
        res.status(200).send({})
      }
      catch (err) {
        console.error(err)
        await conn.end();
        res.status(404).send({})
      }
      break

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
