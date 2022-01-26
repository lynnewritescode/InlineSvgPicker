function inlineSvgPickerOverlayController($scope, $http, $element) {
	var svgLink = $scope.model.svgLink;

	$scope.getSvgLink = function (symbol) {
		return svgLink + "#" + symbol;
	};

	$http.get(svgLink).then(function (response) {
		var svg = angular.element(response.data);

		$scope.icons = [];

		angular.forEach(svg.find("symbol"), function (symbol) {
			$scope.icons.push(angular.element(symbol).attr("id"));
		});
	});

	$scope.selectIcon = function (icon) {
		$scope.model.icon = icon;
		$scope.model.submit($scope.model);
	};

	$scope.close = function () {
		if ($scope.model.close) {
			$scope.model.close();
		}
	};
}
angular.module("umbraco").controller("inlineSvgPickerOverlayController", inlineSvgPickerOverlayController);
