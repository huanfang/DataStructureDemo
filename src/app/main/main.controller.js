'use strict';

angular.module('dataStructureDemo')
  .controller('MainCtrl', function ($scope) {
     $scope.contributors = [
      {
        'name': 'Hongbing',
        'link': ''
      },
      {
        'name': 'Shawn',
        'link': ''
      }
    ];
  });
