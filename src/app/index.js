'use strict';

angular.module('dataStructureDemo', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute', 'ui.bootstrap'])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'app/main/about.html',
        controller: 'aboutCtrl'
      })
      .when('/algorithm', {
        templateUrl: 'app/main/algorithm.html',
        controller: 'algoCtrl'
      })
      .when('/datastructure', {
        templateUrl: 'app/main/datastructure.html',
        controller: 'dataCtrl'
      })
      .when('/contact', {
        templateUrl: 'app/main/contact.html',
        controller: 'contactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode(true);
  })
;
