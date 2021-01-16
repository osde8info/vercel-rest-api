const assert = require('assert');
const { SSL_OP_EPHEMERAL_RSA } = require('constants');
const sa = require('superagent');

const url = 'localhost:3000'

describe('TEST true', function () {
  it('should return true', function () {
    assert.strictEqual(true, true);
  });
});

// describe('false', function () {
//   describe('false', function () {
//     it('should return true', function () {
//       assert.strictEqual(true, false);
//     });
//   });
// });

describe('TEST GET /usersX', function () {
  // callback
  it('users', function () {
    sa.get(url + '/api/users')
      .send({ name: 'Manny', species: 'cat' }) // sends a JSON post body
      .set('X-API-Key', 'foobar')
      .set('accept', 'json')
      .end((err, res) => {
        // Calling the end function will send the request
        if (err) throw err
        //assert.strictEqual(res.body.length, 9)
      })
  })
});

describe('TEST GET /usersY', function () {
  // callback
  it('users', function () {
    sa.get(url + '/api/users')
      .send({ name: 'Manny', species: 'cat' }) // sends a JSON post body
      .set('X-API-Key', 'foobar')
      .set('accept', 'json')
      .end((err, res) => {
        // Calling the end function will send the request
        if (err) throw err
        //assert.strictEqual(res.body.length, 9)
      })
  })
});

describe('TEST GET /user/1', function () {
  // promise with async/await
  it('should match', async function () {
    var res
    try {
      res = await sa
        .get(url + '/api/user/1')
    } catch (err) {
      throw err;
    }
    assert.strictEqual(res.body.email, 'fred1@example.com')
  })
});


describe('TEST GET /user/2', function () {
  // promise with async/await
  it('should match', async function () {
    var res
    try {
       res = await sa
        .get(url + '/api/user/2');
    } catch (err) {
      throw err;
    }
    assert.strictEqual(res.body.email, 'fred2@example.com')
  })
});

describe('TEST POST /user/2', function () {
  // promise with async/await
  it('should return success', async function () {
    try {
      const res = await sa
        .post('localhost:3000/api/user/2?name=asas&tel=111&fax=333')
        .send({ 'name': 'a2', 'tel': '123', 'mbl': '123', 'fax': '123' });
      assert.strictEqual(res.status, 200)
    } catch (err) {
      //throw err;
    }
  });
});

describe('TEST PUT /user/3', function () {
  // promise with async/await
  it('should return success', async function () {
    try {
      const res = await sa
        .put('localhost:3000/api/user/3?name=qwqw')
        .send({ 'name': 'b3', 'tel': '234' });
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
        .delete('localhost:3000/api/user/4');
      assert.strictEqual(res.status, 200)
    } catch (err) {
      throw err;
    }
  })
});

describe('TEST GET /user/99', function () {
  // promise with async/await
  it('should return unknown', async function () {
    assert.strictEqual({ id: 2, name: 'User b' }, { id: 2, name: 'User b' });
  });
});

