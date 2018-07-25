import { describe, it } from 'mocha';

// import chaiAsPromised from 'chai-as-promised';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import GUID from '../utils/guid';
import { date, time } from '../utils/moment';
import app from '../app';
import entries from '../model/db';

// chai.use(chaiAsPromised)
chai.should();

 chai.use(chaiHttp);

 const databaseLength = entries.length;

 describe('Tests for My Diary API endpoints', () => {
  
  describe('GET api/v1', () => {
    it('should display a welcome page', (done) => {
      chai.request(app)
        .get('/api/v1')
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          res.body.should.be.a('string');
          if (err) return done(err);
          done();
        });
    });
  });

  describe('Handles valid endpoints for entries', () => {
    describe('POST api/v1/entries', () => {
      it('should add an entry', (done) => {
        const newEntry = {
          entryId: GUID,
          title: 'Hello World!',
          entry: 'This is a valid test',
          date,
          time,
        };
        chai.request(app)
          .post('/api/v1/entries')
          .send(newEntry)
          .end((err, res) => {
            expect(res.statusCode).to.equal(201);
            expect(res.body.newEntry).to.include.keys('entryId');
            expect(entries.length).to.equal(databaseLength + 1);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Entry added successfully');
            res.body.should.have.property('newEntry').eql(newEntry);
            if (err) return done(err);
            done();
          });
      });
    });

    describe('PUT api/v1/entries/:entryId', () => {
      it('should modify an entry', (done) => {
        const updatedEntry = {
          entryId: '1',
          title: 'Hello World!',
          entry: 'This is a valid test',
          date,
          time,
        };
        chai.request(app)
          .put('/api/v1/entries/1')
          .send(updatedEntry)
          .end((err, res) => {
            expect(res.statusCode).to.equal(201);
            expect(res.body.updatedEntry).to.include.keys('entryId');
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Entry modified successfully');
            res.body.should.have.property('updatedEntry').eql(updatedEntry);
            if (err) return done(err);
            done();
          });
      });
    });

    describe('GET api/v1/entries/:entryId', () => {
      it('should return an entry', (done) => {
        chai.request(app)
          .get('/api/v1/entries/2')
          .end((err, res) => {
            expect(res.statusCode).to.equal(200);
            expect(res.body.entryFound).to.include.keys('entryId');
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Entry was found');
            res.body.should.have.property('entryFound');
            if (err) return done(err);
            done();
          });
      });
    });

    describe('GET api/v1/entries', () => {
      it('should get all entries', (done) => {
        chai.request(app)
          .get('/api/v1/entries')
          .end((err, res) => {
            expect(res.body).to.include.keys('entries');
            expect(res.statusCode).to.equal(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Entries retrieved successfully');
            res.body.should.have.property('entries');
            if (err) return done(err);
            done();
          });
      });
    });
  });

    describe('PUT api/v1/entries/:entryId', () => {
      it('should return an error message for an entry that does not exist', (done) => {
        const updatedEntry = {
          entryId: '7',
          title: 'Hello World!',
          entry: 'This should not valid test',
          date,
          time,
        };
        chai.request(app)
          .put('/api/v1/entries/7')
          .send(updatedEntry)
          .end((err, res) => {
            expect(res.statusCode).to.equal(404);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Entry does not exist');
            if (err) return done(err);
            done();
          });
      });
    });

    describe('GET api/v1/entries/:entryId', () => {
      it('should return an error message for an entry that does not exist', (done) => {
        chai.request(app)
          .get('/api/v1/rides/1')
          .end((err, res) => {
            expect(res.statusCode).to.equal(404);
            res.body.should.be.a('object');
            if (err) return done(err);
            done();
          });
      });
    });
});
