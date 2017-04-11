'use strict';

describe('Gallery Item Component', function(){
  beforeEach(() => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $componentController, $httpBackend, authService) => {
      this.$rootScope = $rootScope;
      this.$componentController = $componentController;
      this.$httpBackend = $httpBackend;
      this.authService = authService;
    })
  });

  describe('galleryItemCtrl.deleteDone()', () => {
    it('should call deleteDone', () => {
      let mockBindings = {
        gallery: {
          _id: '12345',
          name: 'test name',
          desc: 'test description',
          pics: [],
        },
        deleteDone: function(data){
          expect(data.galleryData._id).toEqual('12345');
        }
      };

      let galleryItemCtrl = this.$componentController('galleryItem', null, mockBindings);
      galleryItemCtrl.deleteDone({galleryData: galleryItemCtrl.gallery});

      this.$rootScope.$apply();
    });
  });

  it('should call deleteDone with gallery after galleryDelete', () => {
    let url = `${__API_URL__}/api/gallery/12345`;
    let headers = {
      Authorization: 'Bearer test token',
      Accept: 'application/json, text/plain, */*'
    };

    let mockBindings = {
      gallery: {
        _id: '12345',
        name: 'test name',
        desc: 'test description',
        pics: []
      },
      deleteDone: function(data){
        expect(data.galleryData._id).toEqual(mockBindings.gallery._id);
      }
    };

    this.$httpBackend.expectDELETE(url, headers).respond(204);

    let galleryItemCtrl = this.$componentController('galleryItem', null, mockBindings);
    galleryItemCtrl.deleteGallery();

    this.$httpBackend.flush();
    this.$rootScope.$apply();
  });
})
