(function(){
  'use strict';

  eventsApp.controller('EventController',
    function EventController($scope, $routeParams, eventData) {
      $scope.sortOrder = "name";
      $scope.event = eventData.getEvent($routeParams.eventId);

      $scope.upVoteSession = function(session){
        session.upVoteCount++;
      };

      $scope.downVoteSession = function(session){
        session.upVoteCount--;
      };
    }
  );
}());