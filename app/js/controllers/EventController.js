(function(){
  'use strict';

  eventsApp.controller('EventController',
    function EventController($scope, $anchorScroll, eventData) {
      $scope.sortOrder = "name";
      $scope.event = eventData.getEvent();
      $scope.event.then(function(event){
        console.log(event);
      }, function(response){
        console.log(response);
      });

      $scope.upVoteSession = function(session){
        session.upVoteCount++;
      };

      $scope.downVoteSession = function(session){
        session.upVoteCount--;
      };

      $scope.scrollToSession = function(){
        $anchorScroll();
      };
    }
  );
}());