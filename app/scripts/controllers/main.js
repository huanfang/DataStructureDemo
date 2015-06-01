'use strict';

/**
 * @ngdoc function
 * @name dataStructureDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dataStructureDemoApp
 */
angular.module('dataStructureDemoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
