angular.module('starter.directives', [])

/*.directive('backnav', function() {
	return {
		restrict: 'E',
		template: '<button class="button title-bar pull-left"><i class="icon ion-arrow-left-a"></i></button>',
		scope: {},
		link: function(scope, element, attrs) {
			element.on('click', function() {
				history.back();
			});
		}
	};
})*/

.directive('heartRating', function () {
    return {
      restrict: 'A',
      template: '<div class="hearts"><span ng-repeat="heart in hearts" ng-class="heart"></span></div>',
      scope: {
        ratingValue: '=',
        max: '='
      },
      link: function (scope, elem, attrs) {
        scope.hearts = [];
        for (var i = 1; i <= scope.ratingValue; i++) {          
          scope.hearts.push({
          	full_heart: i <= scope.ratingValue
          });          
        }
        var half_heart_value = scope.ratingValue % 1
        if(half_heart_value != 0) {
          scope.hearts.push({
            half_heart: Math.round(scope.ratingValue)
          })
          var empty_heart = scope.max - Math.ceil(scope.ratingValue);
          for (var i = 0; i < empty_heart; i++) {
            scope.hearts.push({
              empty_heart: i <= empty_heart
            });
          }
        } else {
          var empty_heart = scope.max - scope.ratingValue
          for (var i = 0; i < empty_heart; i++) {
            scope.hearts.push({
              empty_heart: i <= empty_heart
            });
          }
        }

      }
    }
})
.directive('userHeartRating', function () {
    return {
      restrict: 'A',
      template: '<div class="hearts"><span ng-repeat="heart in hearts" ng-class="heart"></span></div>',
      scope: {
        ratingValue: '=',
        max: '='
      },
      link: function (scope, elem, attrs) {
        scope.hearts = [];
        for (var i = 1; i <= scope.ratingValue; i++) {          
          scope.hearts.push({
            blue_heart: i <= scope.ratingValue
          });          
        }
        var half_heart_value = scope.ratingValue % 1
        if(half_heart_value != 0) {
          scope.hearts.push({
            half_heart: Math.round(scope.ratingValue)
          })
          var empty_heart = scope.max - Math.ceil(scope.ratingValue);
          for (var i = 0; i < empty_heart; i++) {
            scope.hearts.push({
              empty_blue: i <= empty_heart
            });
          }
        } else {
          var empty_heart = scope.max - scope.ratingValue
          for (var i = 0; i < empty_heart; i++) {
            scope.hearts.push({
              empty_blue: i <= empty_heart
            });
          }
        }

      }
    }
})