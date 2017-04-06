'use strict';

module.exports = function() {
  return {
    restrict: 'EAC',
    template: require('./social-icons.html'),
    controller: ['$log', SocialIconsController],
    bindToController: true,
    controllerAs: 'socialIconsCtrl',
    scope: {
      tester: '@'
    }
  };
};

function SocialIconsController() {
  this.icons = ['fb', 'twitter', 'instagram'];
};
