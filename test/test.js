
const assert = require('assert');

const sa = require('superagent');

const url = 'localhost:3000'

describe('login', function () {
  // promise with async/await
  it('should get token', async function () {
    var res
    try {
      res = await sa
        .get(url + '/api/login?name=clive&password=fred')
    } catch (err) {
      throw err;
    }
    assert.strictEqual(res.body.token.length > 5, true)
  })
});

describe('insert users', function () {
  // promise with async/await
  it('should insert 3 rows', async function () {
    var res
    var ids = []
    try {
      res = await sa
        .get(url + '/api/login?name=clive&password=fred')
      const token = res.body.token
      res = await sa
        .post(url + '/api/user/0')
        .set('X-API-Key', token)
        .send({ 'name': 'a1', 'tel': '123', 'mbl': '4', 'fax': '7' });
      assert.strictEqual(res.status, 200)
      ids.push(res.body.id)
      res = await sa
        .post(url + '/api/user/0')
        .set('X-API-Key', token)
        .send({ 'name': 'b2', 'tel': '123', 'mbl': '45', 'fax': '78' });
      assert.strictEqual(res.status, 200)
      ids.push(res.body.id)
      res = await sa
        .post(url + '/api/user/0')
        .set('X-API-Key', token)
        .send({ 'name': 'c3', 'tel': '123', 'mbl': '456', 'fax': '789' });
      assert.strictEqual(res.status, 200)
      ids.push(res.body.id)
    } catch (err) {
      throw err;
    }
    assert.strictEqual(ids.length, 3)
  });
});

describe('select all', function () {
  // callback
  it('users', async function () {
    var res
    try {
      res = await sa
        .get(url + '/api/login?name=clive&password=fred')
      const token = res.body.token
      res = await sa
        .get(url + '/api/users')
        .set('X-API-Key', token)
        .set('accept', 'json')
    } catch (err) {
      throw err;
    }
    //assert.strictEqual(res.body.length, 3)
  })
})

describe('select user 1', function () {
  // promise with async/await
  it('should match', async function () {
    var res
    try {
      res = await sa
        .get(url + '/api/login?name=clive&password=fred')
      const token = res.body.token
      res = await sa
        .get(url + '/api/user/1')
        .set('X-API-Key', token)
    } catch (err) {
      console.log(err)
    }
    //assert.strictEqual(res.body.email, 'fred1@example.com')
  })
});


describe('select user 2', function () {
  // promise with async/await
  it('should match', async function () {
    var res
    try {
      res = await sa
        .get(url + '/api/login?name=clive&password=fred')
      const token = res.body.token
      res = await sa
        .get(url + '/api/user/2')
        .set('X-API-Key', token)
    } catch (err) {
      throw err;
    }
    //assert.strictEqual(res.body.email, 'fred2@example.com')
  })
});

describe('update user 4', function () {
  // promise with async/await
  it('should return success', async function () {
    var res
    try {
      res = await sa
        .get(url + '/api/login?name=clive&password=fred')
      const token = res.body.token
      res = await sa
        .put(url + '/api/user/20')
        .set('X-API-Key', token)
        .send({ 'name': 'a278', 'tel': '123', 'mbl': '456', 'fax': '789' });
    } catch (err) {
      throw err;
    }
    assert.strictEqual(res.status, 200)
    assert.strictEqual(res.body.rows, 0)
  })
});


describe('TEST DEL /user/4', function () {
  // promise with async/await
  it('should return one row', async function () {
    var res
    try {
      res = await sa
        .get(url + '/api/login?name=clive&password=fred')
      const token = res.body.token
      res = await sa
        .delete(url + '/api/user/4')
        .set('X-API-Key', token)
    } catch (err) {
      throw err;
    }
    assert.strictEqual(res.status, 200)
    assert.strictEqual(res.body.rows, 0)
  })
});

describe('TEST DEL /user/999', function () {
  // promise with async/await
  it('should return zero rows', async function () {
    var res
    try {
      res = await sa
        .get(url + '/api/login?name=clive&password=fred')
      const token = res.body.token
      res = await sa
        .delete(url + '/api/user/999')
        .set('X-API-Key', token)
    } catch (err) {
      throw err;
    }
    assert.strictEqual(res.status, 200)
    assert.strictEqual(res.body.rows, 0)
  });
});

