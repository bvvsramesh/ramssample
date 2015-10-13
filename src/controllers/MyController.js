/// <reference path="../app.ts" />
var app;
(function (app) {
    var controllers;
    (function (controllers) {
        var MyController = (function () {
            function MyController($scope, myService) {
                this.$scope = $scope;
                this.myService = myService;
                $scope.message = myService.someMethod();
            }
            return MyController;
        })();
        controllers.MyController = MyController;
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
// Remember to pass all the services used by the constructor of the Controller.
app.registerController('MyController', ['$scope', 'myService']);
