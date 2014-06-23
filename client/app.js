(function (angular) {
  "use strict";
  angular.module('app', [
    'fx.animations',
    'ngAnimate',
    'ngTouch',
    'ui.router'
 ,'app.main'])
  .config(function ($stateProvider) {
    $stateProvider
      .state('app', {
        abstract: true,
        template: '<ui-view></ui-view>'
      });
  })
  .run(function ($state) {
    $state.transitionTo('app.main');
  });
}(angular));



