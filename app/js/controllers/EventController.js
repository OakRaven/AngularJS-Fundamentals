(function(){
  'use strict';

  eventsApp.controller('EventController',
    function EventController($scope, eventData) {
      $scope.sortOrder = "name";
      $scope.event = eventData.getEvent();

      $scope.upVoteSession = function(session){
        session.upVoteCount++;
      };

      $scope.downVoteSession = function(session){
        session.upVoteCount--;
      };
    }
  );
}());