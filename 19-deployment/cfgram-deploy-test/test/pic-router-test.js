'use strict';

// test

require('./lib/test-env.js');

const expect = require('chai').expect;
const request = require('superagent');
const debug = require('debug')('cfgram:pic-router-test');
const awsMocks = require('./lib/aws-mocks.js');

const Pic = require('../model/pic.js');
const User = require('../model/user.js');
const Gallery = require('../model/gallery.js');

const serverToggle = require('./lib/server-toggle.js');
const server = require('../server.js');

const url = `http://localhost:${process.env.PORT}`;

const exampleUser = {
  username: 'exampleuser',
  password: '1234',
  email: 'exampleuser@test.com'
};

const exampleGallery = {
  name: 'test gallery',
  desc: 'test gallery description'
};

const examplePic = {
  name: 'example pic',
  desc: 'example pic description',
  image: `${__dirname}/data/tester.png`
};

const examplePicModel = {
  name: 'example pic model',
  desc: 'example pic model description',
  imageURI: awsMocks.uploadMock.Location,
  filename: awsMocks.uploadMock.Key,
  created: new Date()
};

describe('Pic Routes', function() {
  before( done => {
    serverToggle.serverOn(server, done);
  });

  after( done => {
    serverToggle.serverOff(server, done);
  });

  afterEach( done => {
    Promise.all([
      Pic.remove({}),
      User.remove({}),
      Gallery.remove({})
    ])
    .then( () => done())
    .catch(done);
  });

  describe('POST: /api/gallery/:id/pic', function() {
    describe('with a valid token and valid data', function() {
      before( done => {
        new User(exampleUser)
        .generatePasswordHash(exampleUser.password)
        .then( user => user.save())
        .then( user => {
          this.tempUser = user;
          return user.generateToken();
        })
        .then( token => {
          this.tempToken = token;
          done();
        })
        .catch(done);
      });

      before( done => {
        exampleGallery.userID = this.tempUser._id.toString();
        new Gallery(exampleGallery).save()
        .then( gallery => {
          this.tempGallery = gallery;
          done();
        })
        .catch(done);
      });

      after( done => {
        delete exampleGallery.userID;
        done();
      });

      it('should return a pic', done => {
        request.post(`${url}/api/gallery/${this.tempGallery._id}/pic`)
        .set({
          Authorization: `Bearer ${this.tempToken}`
        })
        .field('name', examplePic.name)
        .field('desc', examplePic.desc)
        .attach('image', examplePic.image)
        .end((err, res) => {
          if (err) return done(err);

          console.log('location', awsMocks.uploadMock.Location);
          console.log('++++++++', res.body.imageURI);
          expect(res.body.name).to.equal(examplePic.name);
          expect(res.body.desc).to.equal(examplePic.desc);
          expect(res.body.galleryID).to.equal(this.tempGallery._id.toString());
          expect(res.body.imageURI).to.equal(awsMocks.uploadMock.Location);
          done();
        });
      });
    });
  });
});
