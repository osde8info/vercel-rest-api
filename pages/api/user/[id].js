export default function userHandler(req, res) {

  const users = [0,'aaa','b','c','d'] // [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
  
  const {
    query: { id, name },
    method,
  } = req

  switch (method) {
    case 'GET':
      // Get data from your database
      res.status(200).json({ id, name: `User ${users[id]}` })
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
