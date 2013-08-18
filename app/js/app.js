var eventsApp = {};

(function(){
  'use strict';
  eventsApp = angular.module('eventsApp', ['ngResource'])
    .config(function($routeProvider, $locationProvider){
      $routeProvider.when('/newEvent', {
        templateUrl: 'templates/NewEvent.html',
        controller: 'EditEventController'
      });

      $routeProvider.when('/events', {
        templateUrl: 'templates/EventList.html',
        controller: 'EventListController'
      });

      $routeProvider.when('/editProfile', {
        templateUrl: 'templates/EditProfile.html',
        controller: 'EditProfileController'
      });

      $routeProvider.when('/about', {
        template: '<h1>About Events:</h1>Version: 0.8<br/>&copy; 2013 Mike Hatfield'
      });

      $routeProvider.when('/event/:eventId', {
        templateUrl: 'templates/EventDetails.html',
        controller: 'EventController',
        resolve: {
          event: function($q, $route, eventData) {
            var deferred = $q.defer();
            eventData.getEvent($route.current.pathParams.eventId)
              .then(function(event){ deferred.resolve(event); });
            return deferred.promise;
          }
        }
      });

      $routeProvider.otherwise({
        redirectTo: '/events'
      });

    });
}());
