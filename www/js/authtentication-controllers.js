hippocratusApp.controller('SignupCtrl', function($scope, $http, Page, $location, ngDialog, Alert) {
		$scope.user = { }
		$scope.user.isTermsChecked = false;
		$scope.submitSignupForm = function(isValid) {
			$scope.IsNotMatch = false;
			if ($scope.user.password != $scope.user.confirm_password && ($scope.user.confirm_password != "" || $scope.user.confirm_password == ""))
				$scope.IsNotMatch = true;
			if (isValid) {

			} else {
				ngDialog.open({ template: 'authErrorTemplate', scope: $scope });
				if ($scope.IsNotMatch) {
					$scope.user.password = "";
					$scope.user.confirm_password = "";
				}
			}
		};
		$scope.navigateToLogin = function() {
			ngDialog.close();
			$location.path("/login");
		}
		$scope.saveState = function() {
			StateService.setState("state_0");
			$location.path("/home");
		}
	})

