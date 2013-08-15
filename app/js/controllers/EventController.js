(function(){
  'use strict';

  eventsApp.controller('EventController',
    function EventController($scope, $routeParams, eventData, $route) {
      $scope.sortOrder = "name";
      $scope.event = eventData.getEvent($routeParams.eventId);
      console.log($route.current.params.eventId);

      $scope.upVoteSession = function(session){
        session.upVoteCount++;
      };

      $scope.downVoteSession = function(session){
        session.upVoteCount--;
      };

      $scope.reload = function(){
        $route.reload();
      };
    }
  );
}());