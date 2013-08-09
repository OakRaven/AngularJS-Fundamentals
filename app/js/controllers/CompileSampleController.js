(function(){
  'use strict';

  eventsApp.controller('CompileSampleController',
    function CompileSampleController($scope, $compile, $parse){
      var fn = $parse('1 + 2');
      console.log(fn());

      var getter = $parse('event.name');

      var context1 = {event: {name: 'AngularJS Boot Camp'}};
      var context2 = {event: {name: 'Code Camp'}};

      console.log(getter(context1));
      console.log(getter(context2));

      $scope.appendDivToElement = function(markup){
        return $compile(markup) ($scope).appendTo(angular.element("#appendHere"));
      };
    }
  );
})();