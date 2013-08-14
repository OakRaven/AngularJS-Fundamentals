var eventsApp = {};

(function(){
  'use strict';
  eventsApp = angular.module('eventsApp', ['ngResource', 'ngCookies'])
    .factory('myCache', function($cacheFactory){
      return $cacheFactory('myCache', { capacity: 3 });
    });
}());
