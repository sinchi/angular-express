var appModuleName = "app";
var appModule = angular.module(app, ['app.annonce', 'ui.router']);
angular.element(document).ready(function(){
	angular.bootstrap(document, [appModuleName]);
});