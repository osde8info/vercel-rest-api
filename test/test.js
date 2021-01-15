const assert = require('assert');
const sa = require('superagent');

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.strictEqual([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe('GET /users', function () {
  // callback
  it('users', function () {
    assert.strictEqual(
      sa.get('localhost:3000/api/users')
        .send({ name: 'Manny', species: 'cat' }) // sends a JSON post body
        .set('X-API-Key', 'foobar')
        .set('accept', 'json')
        .end((err, res) => {
          // Calling the end function will send the request
          console.log(res.body);
          return res.body
        }
          , { id: '1', name: '2' })
    )
  })
});

describe('GET /user/1', function () {
  // promise with async/await
  it('user1', function () {
    assert.strictEqual(
      (async () => {
        try {
          const res = await sa.get('localhost:3000/api/user/1');
          console.log(res.body);
          return res.body
        } catch (err) {
          console.error(err);
        }
      })()
      , { id: '1', name: 'User aaa' });
  });
});

describe('GET /user/2', function () {
  // promise with async/await
  it('user2', function () {
    assert.strictEqual(
      (async () => {
        try {
          const res = await sa.get('localhost:3000/api/user/2');
          console.log(res.body);
          return res.body
        } catch (err) {
          console.error(err);
        }
      })()
      , { id: '2', name: 'User b' });
  });
});

describe('GET /user/99', function () {
  // promise with async/await
  it('user99', function () {
    assert.equal(
      { id: '2', name: 'User b' }
      , { id: '2', name: 'User b' });
  });
});
