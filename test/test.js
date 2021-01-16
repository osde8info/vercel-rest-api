const assert = require('assert');
const sa = require('superagent');

const url = 'localhost:3000'

describe('true', function () {
  describe('true', function () {
    it('should return true', function () {
      assert.strictEqual(true, true);
    });
  });
});

describe('GET /users', function () {
  // callback
  it('users', function () {
    sa.get(url + '/api/users')
      .send({ name: 'Manny', species: 'cat' }) // sends a JSON post body
      .set('X-API-Key', 'foobar')
      .set('accept', 'json')
      .end((err, res) => {
        // Calling the end function will send the request
        if (err) throw err
        assert.strictEqual(res.body.length, 4)
      })
  })
});


describe('GET /user/1', function () {
  // promise with async/await
  it('should match', async function () {
    const res = await sa
      .get('localhost:3000/api/user/1')
    assert.strictEqual(res.body, { id: 1, name: 'fred1' })
  })
});


describe('GET /user/2', function () {
  // promise with async/await
  it('should match', async function () {
    try {
      const res = await sa
        .get('localhost:3000/api/user/2');
      assert.strictEqual(res.body, { id: 2, name: 'fred2' })
    } catch (err) {
      throw err;
    }
  })
});


describe('POST /user/2', function () {
  // promise with async/await
  it('should return success', async function () {
    try {
      const res = await sa
        .post('localhost:3000/api/user/2?name=asas&tel=111&fax=333')
        .send({ 'name': 'a2', 'tel': '123' });
      assert.strictEqual(res.status, 200)
    } catch (err) {
      throw err;
    }
  });
});

describe('PUT /user/3', function () {
  // promise with async/await
  it('should return success', async function () {
    try {
      const res = await sa
        .put('localhost:3000/api/user/3?name=qwqw')
        .send({ 'name': 'b3', 'tel': '234' });
      assert.strictEqual(res.status, 200)

    } catch (err) {
      throw err;
    }
  })
});

describe('DEL /user/4', function () {
  // promise with async/await
  it('should return success', async function () {
    try {
      const res = await sa
        .delete('localhost:3000/api/user/4');
      assert.strictEqual(res.status, 200)
    } catch (err) {
      throw err;
    }
  })
});

describe('GET /user/99', function () {
  // promise with async/await
  it('should return unknown', async function () {
    assert.strictEqual({ id: 2, name: 'User b' }, { id: 2, name: 'User b' });
  });
});
