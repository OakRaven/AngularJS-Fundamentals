(function(){
  'use strict';

  eventsApp.directive('repeatX', function () {
    return {
      compile: function(element, attrs){
        for (var i = 0; i < Number(attrs.repeatX) - 1; i++) {
          element.after(element.clone().attr('repeat-x', 0));
        }

        return function(scope, element, attrs, controller){
          attrs.$observe('text', function(newValue){
            if(newValue === 'Hello world'){
              element.css('color', 'red');
            }
          });
        };
      }
    };
});

})();