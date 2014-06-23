angular.module('app.main.note', ['ui.router'])

.config(function ($stateProvider) {

  $stateProvider
    .state('app.main.note', {
      url: '/notes',
      templateUrl: 'note/note.tpl.html',
      controller: 'NoteController'
    });
})
.controller('NoteController', function ($scope) {
  $scope.notes = [];
});