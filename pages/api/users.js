// Fake users data
const users = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]

var fs = require("fs")

export default function handler(req, res) {
  // Get data from your database
  res.json(users)
  // fs.readFile("users.json", 'utf8', function (err, data) {
  //   console.log(__dirname);
  //   console.log(__filename);
  //   console.log(err);
  //   console.log(data);
  //   res.end(data);
  // })
}
