(function(){
  'use strict';

  eventsApp.directive('collapsible', function(){
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      template: '<div><h4 class="well-title" ng-click="toggleVisibility()">{{title}}</h4><div ng-transclude ng-show="visible"></div></div>',
      controller: function($scope) {
        $scope.visible = true;
        $scope.toggleVisibility = function(){
          $scope.visible = !$scope.visible;
        };
      },
      scope: {
        title: '@'
      }
    };

  });

})();