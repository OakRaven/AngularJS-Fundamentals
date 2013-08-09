(function(){
  'use strict';

  eventsApp.controller('CacheSampleController',
    function CacheSampleController($scope, myCache){
      $scope.addToCache = function(key, value){
        myCache.put(key, value);
      };

      $scope.readFromCache = function(key){
        return myCache.get(key);
      };

      $scope.getCacheState = function(){
        return myCache.info();
      };
    });
})();