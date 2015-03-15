var myModule = angular.module('starter.services', []).factory('Page', function() {
		var title = 'default';
		return {
			title: function() {
				return title;
			},
			setTitle: function(newTitle) {
				title = newTitle;
			},
			smallTitle: function() {
				return title;
			},
			setSmallTitle: function(newTitle) {
				title = newTitle;
			},
		};
	}).factory('Alert', function(ngDialog, $location) {
		var alert_box_content = '';
		return {
			openPlainAlertBox: function(alert_box_content) {
				var alert_box = ngDialog.open({
					template: '<p class="text-center" style="padding: 10px; border-bottom: 1px solid #000;">' + alert_box_content + '</p><div class="ngdialog-buttons"><button type="button" class="alert_ok_button" ng-click="closeThisDialog(0)">OK</button></div>',
					plain: true
				});
				return alert_box;
			},

			openAlertwithNavigation: function(alert_box_content) {
				var alert_box = ngDialog.open({
					template: '<p class="text-center">' + alert_box_content + '</p><div class="ngdialog-buttons"><button type="button" class="alert_ok_button" ng-click="this.navigateToHome()">OK</button></div>',
					plain: true
				});
				return alert_box;
			},
			navigateToHome: function() {
				ngDialog.close();
				$location.path("/home");
			}
		}

	})
