'use strict';

const expect = require('chai').expect;
const request = require('superagent');
const List = require('../model/list.js');
const Note = require('../model/note.js');

const PORT = process.env.PORT || 3000;

require('../server.js');

const url = `http://localhost:${PORT}`;

const exampleNote = {
  name: 'test note',
  content: 'test note content'
};

const exampleList = {
  name: 'example list',
  timestamp: new Date()
};

describe('Note Routes', function() {
  describe('POST: /api/list/:listID/note', function() {
    describe('with a valid list id and note body', () => {
      before( done => {
        new List(exampleList).save()
        .then( list => {
          this.tempList = list;
          done();
        })
        .catch(done);
      });

      after( done => {
        Promise.all([
          List.remove({}),
          Note.remove({})
        ])
        .then(() => done())
        .catch(done);
      });

      it('should return a note', done => {
        request.post(`${url}/api/list/${this.tempList.id}/note`)
        .send(exampleNote)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body.name).to.equal(exampleNote.name);
          expect(res.body.listID).to.equal(this.tempList._id.toString());
          done();
        });
      });
    });
  });
});
