'use strict';

const expect = require('chai').expect;
const request = require('superagent');
const Note = require('../model/note.js');
const url = 'http://localhost:8000';

require('../server.js');

const exampleNote = {
  name: 'example name',
  content: 'example content'
};

describe('Note Routes', function() {

  describe('GET: /api/note', function() {
    describe('with a valid id', function() {
      before( done => {
        Note.createNote(exampleNote)
        .then(note => {
          this.tempNote = note;
          done();
        })
        .catch( err => done(err));
      });

      after( done => {
        Note.deleteNote(this.tempNote.id)
        .then( ()=> done())
        .catch( err => done(err));
      });

      it('should return a note', done => {
        request.get(`${url}/api/note/${this.tempNote.id}`)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.status).to.equal(200);
          expect(res.body.id).to.equal(this.tempNote.id);
          expect(res.body.name).to.equal(this.tempNote.name);
          expect(res.body.content).to.equal(this.tempNote.content);
          done();
        });
      });

      describe('with an invalid id', function() {
        it('should respond with a 404 status code', done => {
          request.get(`${url}/api/note/123456789`)
          .end((err, res) => {
            expect(res.status).to.equal(404);
            done();
          });
        });
      });
    });
  });

  describe('POST: /api/note', function() {
    describe('with a valid body', function() {
      after( done => {
        if (this.tempNote) {
          Note.deleteNote(this.tempNote.id)
          .then( ()=> done())
          .catch( err => done(err));
        }
      });

      it('should return a note', done => {
        request.post(`${url}/api/note`)
        .send(exampleNote)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.status).to.equal(200);
          expect(res.body.name).to.equal(exampleNote.name);
          expect(res.body.content).to.equal(exampleNote.content);
          this.tempNote = res.body;
          done();
        });
      });
    });
  });

  describe('PUT: /api/note', function() {
    describe('with a valid id and body', function() {
      before( done => {
        Note.createNote(exampleNote)
        .then( note => {
          this.tempNote = note;
          done();
        })
        .catch( err => done(err));
      });

      after( done => {
        if (this.tempNote) {
          Note.deleteNote(this.tempNote.id)
          .then( ()=> done())
          .catch(done);
        }
      });

      it('should return a note', done => {
        let updateNote = { name: 'new name', content: 'new content' };
        request.put(`${url}/api/note?id=${this.tempNote.id}`)
        .send(updateNote)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.status).to.equal(200);
          expect(res.body.id).to.equal(this.tempNote.id);
          for (var prop in updateNote) {
            expect(res.body[prop]).to.equal(updateNote[prop])
          }
          done();
        });
      });
    });
  });
});
