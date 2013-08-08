(function(){
  'use strict';

  eventsApp.controller('EditEventController',
    function EditEventController($scope, eventData){
      $scope.saveEvent = function(event, newEventForm){
        if(newEventForm.$valid) {
          eventData.save(event)
            .then(
              function(response) { console.log('Success', response); },
              function(response) { console.log('Failure', response); }
            );
       }
      };

      $scope.cancelEdit = function(){
        window.location = "EventDetails.html";
      };
    }
  );
})();