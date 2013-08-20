(function(){
  'use strict';

  eventsApp.controller('EventController',
    function EventController($scope, $routeParams, $route) {
      $scope.sortOrder = "name";
      $scope.event = $route.current.locals.event;

      $scope.upVoteSession = function(session){
        session.upVoteCount++;
      };

      $scope.downVoteSession = function(session){
        if(session.upVoteCount > 0){
          session.upVoteCount--;
        }
      };
    }
  );
}());