(function (angular) {
  "use strict";
  angular.module('app.main', ['ui.router', 'app.main.note'])
  .config(function ($stateProvider) {
    $stateProvider
      .state('app.main', {
        url: '/main',
        templateUrl: 'main/main.tpl.html',
        controller: 'MainController'
      });
  })
  .controller('MainController', function ($state) {
    $state.transitionTo('app.main.note');
  });
}(angular));
