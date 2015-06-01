'use strict';

/**
 * @ngdoc function
 * @name dataStructureDemoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dataStructureDemoApp
 */
angular.module('dataStructureDemoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
