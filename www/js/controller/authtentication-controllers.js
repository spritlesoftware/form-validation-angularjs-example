hippocratusApp.controller('SignupCtrl', function($scope, $http, Page, $location, ngDialog, Alert) {
		Page.setTitle('My Account');
		$scope.user = { }
		$scope.user.isTermsChecked = false;
		$scope.submitSignupForm = function(isValid) {
			$scope.IsNotMatch = false;
			if ($scope.user.password != $scope.user.confirm_password && ($scope.user.confirm_password != "" || $scope.user.confirm_password == ""))
				$scope.IsNotMatch = true;
			if (isValid) {
				var url = base_url + "users/signup"
				var encodedPassword = Base64.encode($scope.user.password);
				$http.post(url, { user: { email: $scope.user.email, password: encodedPassword, mobile_number: $scope.mobile_number } }).success(function(data, status, headers) {
					ngDialog.open({
						template: 'signUpRedirect',
						controller: 'SignupCtrl',
						className: 'ngdialog-theme-default',
						data: { foo: data["message"] + " Activation email has been sent to the email address that you used to register with Hippocratus. " }
					});
				}).error(function(data, status, headers) {
					Alert.openPlainAlertBox(data["message"]);
				});
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
	})

