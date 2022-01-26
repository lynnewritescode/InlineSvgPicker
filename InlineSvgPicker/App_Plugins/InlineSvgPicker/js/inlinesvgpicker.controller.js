function inlineSvgPickerController($scope, editorService) {
	if ($scope.model.value === undefined || $scope.model.value === null) {
		$scope.model.value = "";
	}

	var svgLink = $scope.model.config.svgPath + "?r=" + new Date().getTime();
	var customEditorTitle = $scope.model.config.editorTitle != null ? $scope.model.config.editorTitle : "Choose an icon";

	$scope.getSvgLink = function (symbol) {
		return svgLink + "#" + symbol;
	};

	$scope.addSvg = function () {
		var inlineSvgOverlay = {
			view: "/App_Plugins/InlineSvgPicker/views/inlinesvgpicker.overlay.html",
			size: "small",
			title: customEditorTitle,
			svgLink: svgLink,
			selected: $scope.model.value,
			submit: function (model) {
				if (model.icon) {
					$scope.model.value = model.icon;
				}
				editorService.close();
			},
			close: function () {
				editorService.close();
			}
		};
		editorService.open(inlineSvgOverlay);
	};

	$scope.removeSvg = function () {
		$scope.model.value = "";
	};
}
angular.module("umbraco").controller("inlineSvgPickerController", inlineSvgPickerController);
