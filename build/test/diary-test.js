'use strict';

var _mocha = require('mocha');

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _guid = require('../utils/guid');

var _guid2 = _interopRequireDefault(_guid);

var _moment = require('../utils/moment');

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// chai.use(chaiAsPromised)
_chai2.default.should();

// import chaiAsPromised from 'chai-as-promised';


_chai2.default.use(_chaiHttp2.default);

(0, _mocha.describe)('Tests for My Diary API endpoints', () => {
  (0, _mocha.describe)('GET api/v1', () => {
    (0, _mocha.it)('should display a welcome page', done => {
      _chai2.default.request(_app2.default).get('/api/v1').end((err, res) => {
        (0, _chai.expect)(res.statusCode).to.equal(200);
        res.body.should.be.a('string');
        if (err) return done(err);
        done();
      });
    });
  });

  (0, _mocha.describe)('Handles valid endpoints for entries', () => {
    (0, _mocha.describe)('POST api/v1/entries', () => {
      (0, _mocha.it)('should add an entry', done => {
        const newEntry = {
          entryId: _guid2.default,
          title: 'Hello World!',
          entry: 'This is a valid test',
          date: _moment.date,
          time: _moment.time
        };
        _chai2.default.request(_app2.default).post('/api/v1/entries').send(newEntry).end((err, res) => {
          (0, _chai.expect)(res.statusCode).to.equal(201);
          (0, _chai.expect)(res.body.newEntry).to.include.keys('entryId');
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('Entry added successfully');
          res.body.should.have.property('newEntry').eql(newEntry);
          if (err) return done(err);
          done();
        });
      });
    });

    (0, _mocha.describe)('PUT api/v1/entries/:entryId', () => {
      (0, _mocha.it)('should modify an entry', done => {
        const updatedEntry = {
          entryId: '1',
          title: 'Hello World!',
          entry: 'This is a valid test',
          date: _moment.date,
          time: _moment.time
        };
        _chai2.default.request(_app2.default).put('/api/v1/entries/1').send(updatedEntry).end((err, res) => {
          (0, _chai.expect)(res.statusCode).to.equal(201);
          (0, _chai.expect)(res.body.updatedEntry).to.include.keys('entryId');
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('Entry modified successfully');
          res.body.should.have.property('updatedEntry').eql(updatedEntry);
          if (err) return done(err);
          done();
        });
      });
    });

    (0, _mocha.describe)('GET api/v1/entries/:entryId', () => {
      (0, _mocha.it)('should return an entry', done => {
        _chai2.default.request(_app2.default).get('/api/v1/entries/2').end((err, res) => {
          (0, _chai.expect)(res.statusCode).to.equal(200);
          (0, _chai.expect)(res.body.entryFound).to.include.keys('entryId');
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('Entry was found');
          res.body.should.have.property('entryFound');
          if (err) return done(err);
          done();
        });
      });
    });

    (0, _mocha.describe)('GET api/v1/entries', () => {
      (0, _mocha.it)('should get all entries', done => {
        _chai2.default.request(_app2.default).get('/api/v1/entries').end((err, res) => {
          (0, _chai.expect)(res.body).to.include.keys('entries');
          (0, _chai.expect)(res.statusCode).to.equal(200);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('Entries retrieved successfully');
          res.body.should.have.property('entries');
          if (err) return done(err);
          done();
        });
      });
    });

    (0, _mocha.describe)('DELETE api/v1/entries/:entryId', () => {
      (0, _mocha.it)('should delete selected ride offer option', done => {
        _chai2.default.request(_app2.default).delete('/api/v1/entries/3').end((err, res) => {
          (0, _chai.expect)(res.statusCode).to.equal(204);
          if (err) return done(err);
          done();
        });
      });
    });
  });

  (0, _mocha.describe)('Handles invalid endpoints for entries', () => {
    //describe('POST api/v1/entries', () => {
    // it('should return an error message to check entry input', (done) => {
    //   const newEntry = {
    //     id: GUID,
    //     entry: 'This is an invalid test',
    //     date,
    //     time,
    //   };
    //   chai.request(app)
    //     .post('/api/v1/entries')
    //     .send(newEntry)
    //     .end((err, res) => {
    //       expect(res.statusCode).to.equal(400);
    //       res.body.should.be.a('object');
    //       res.body.should.have.property('message').eql('Valid title and entry data is required');
    //       if (err) return done(err);
    //       done();
    //     });
    // });

    // it('should return an error message to check input fields', (done) => {
    //   const newEntry = {
    //     id: GUID,
    //     title: 'Invalid endpoint',
    //     date,
    //     time,
    //   };
    //   chai.request(app)
    //     .post('/api/v1/entries')
    //     .send(newEntry)
    //     .end((err, res) => {
    //       expect(res.statusCode).to.equal(400);
    //       res.body.should.be.a('object');
    //       res.body.should.have.property('message').eql('Valid title and entry data is required');
    //       if (err) return done(err);
    //       done();
    //     });
    // });
    //});

    (0, _mocha.describe)('PUT api/v1/entries/:entryId', () => {
      // it('should return an error message to check entry input', (done) => {
      //   const updatedEntry = {
      //     id: '1',
      //     entry: 'This is an invalid test',
      //     date,
      //     time,
      //   };
      //   chai.request(app)
      //     .put('/api/v1/entries/2')
      //     .send(updatedEntry)
      //     .end((err, res) => {
      //       expect(res.statusCode).to.equal(400);
      //       res.body.should.be.a('object');
      //       res.body.should.have.property('message').eql('Valid title and entry data is required');
      //       if (err) return done(err);
      //       done();
      //     });
      // });

      // it('should return an error message to check input fields', (done) => {
      //   const updatedEntry = {
      //     id: '1',
      //     title: 'Invalid endpoint',
      //     date,
      //     time,
      //   };
      //   chai.request(app)
      //     .put('/api/v1/entries/1')
      //     .send(updatedEntry)
      //     .end((err, res) => {
      //       expect(res.statusCode).to.equal(400);
      //       res.body.should.be.a('object');
      //       res.body.should.have.property('message').eql('Valid title and entry data is required');
      //       if (err) return done(err);
      //       done();
      //     });
      // });

      (0, _mocha.it)('should return an error message for an entry that does not exist', done => {
        const updatedEntry = {
          entryId: '3',
          title: 'Hello World!',
          entry: 'This should not valid test',
          date: _moment.date,
          time: _moment.time
        };
        _chai2.default.request(_app2.default).put('/api/v1/entries/3').send(updatedEntry).end((err, res) => {
          (0, _chai.expect)(res.statusCode).to.equal(404);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('Entry does not exist');
          if (err) return done(err);
          done();
        });
      });
    });

    (0, _mocha.describe)('GET api/v1/entries/:entryId', () => {
      (0, _mocha.it)('should return an error message for an entry that does not exist', done => {
        _chai2.default.request(_app2.default).get('/api/v1/rides/1').end((err, res) => {
          (0, _chai.expect)(res.statusCode).to.equal(404);
          res.body.should.be.a('object');
          if (err) return done(err);
          done();
        });
      });
    });

    (0, _mocha.describe)('DELETE api/v1/entries/:entryId', () => {
      (0, _mocha.it)('should return error if selected entry id does not exist', done => {
        _chai2.default.request(_app2.default).delete('/api/v1/entries/8').end((err, res) => {
          (0, _chai.expect)(res.statusCode).to.equal(404);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('Entry not found');
          if (err) return done(err);
          done();
        });
      });
    });
  });
});
//# sourceMappingURL=diary-test.js.map