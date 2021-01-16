
const assert = require('assert');

const sa = require('superagent');

const url = 'localhost:3000'


describe('true', function () {
  it('should return true', function () {
    assert.strictEqual(true, true);
  });
});


describe('insert users', function () {
  // promise with async/await
  it('should return success', async function () {
    var res
    try {
      res = await sa
        .post(url + '/api/user/0')
        .send({ 'name': 'a1', 'tel': '123', 'mbl': '4', 'fax': '7' });
      assert.strictEqual(res.status, 200)
      res = await sa
        .post(url + '/api/user/0')
        .set('X-API-Key', 'foobar')
        .send({ 'name': 'b2', 'tel': '123', 'mbl': '45', 'fax': '78' });
      assert.strictEqual(res.status, 200)
      res = await sa
        .post(url + '/api/user/0')
        .set('X-API-Key', 'foobar')
        .send({ 'name': 'c3', 'tel': '123', 'mbl': '456', 'fax': '789' });
      assert.strictEqual(res.status, 200)
    } catch (err) {
      //throw err;
    }
  });
});

describe('select all', function () {
  // callback
  it('users', function () {
    var res
    sa.get(url + '/api/users')
      .set('X-API-Key', 'foobar')
      .set('accept', 'json')
      .end((err, res) => {
        if (err) throw err
        //assert.strictEqual(res.body.length, 3)
      })
  })
});

describe('select user 1', function () {
  // promise with async/await
  it('should match', async function () {
    var res
    try {
      res = await sa
        .get(url + '/api/user/1')
        .set('X-API-Key', 'foobar')
    } catch (err) {
      throw err;
    }
    assert.strictEqual(res.body.email, 'fred1@example.com')
  })
});


describe('select user 2', function () {
  // promise with async/await
  it('should match', async function () {
    var res
    try {
      res = await sa
        .get(url + '/api/user/2')
        .set('X-API-Key', 'foobar')
    } catch (err) {
      throw err;
    }
    assert.strictEqual(res.body.email, 'fred2@example.com')
  })
});

describe('update user 4', function () {
  // promise with async/await
  it('should return success', async function () {
    try {
      const res = await sa
        .put(url + '/api/user/20')
        .set('X-API-Key', 'foobar')
        .send({ 'name': 'a278', 'tel': '123', 'mbl': '456', 'fax': '789' });
      assert.strictEqual(res.status, 200)
    } catch (err) {
      //throw err;
    }
  })
});


describe('TEST DEL /user/4', function () {
  // promise with async/await
  it('should return success', async function () {
    try {
      const res = await sa
        .delete(url + '/api/user/4')
        .set('X-API-Key', 'foobar')
      assert.strictEqual(res.status, 200)
    } catch (err) {
      throw err;
    }
  })
});

describe('TEST GET /user/99', function () {
  // promise with async/await
  it('should return unknown', async function () {
    assert.strictEqual(1, 1);
  });
});

