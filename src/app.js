/// <reference path="../libs/types/angularjs/angular.d.ts" />
'use strict';
// Create and register modules
var modules = ['app.controllers', 'app.directives', 'app.filters', 'app.services'];
modules.forEach(function (module) { return angular.module(module, []); });
angular.module('app', modules);
// Url routing
angular.module('app').config(['$routeProvider',
    function routes($routeProvider) {
        $routeProvider
            .when('/', {
            templateUrl: 'views/MyView.html',
            controller: 'app.controllers.MyController'
        })
            .otherwise({
            redirectTo: '/'
        });
    }
]);
var app;
(function (app) {
    /**
     * Register new controller.
     *
     * @param className
     * @param services
     */
    function registerController(className, services) {
        if (services === void 0) { services = []; }
        var controller = 'app.controllers.' + className;
        services.push(app.controllers[className]);
        angular.module('app.controllers').controller(controller, services);
    }
    app.registerController = registerController;
    /**
     * Register new filter.
     *
     * @param className
     * @param services
     */
    function registerFilter(className, services) {
        if (services === void 0) { services = []; }
        var filter = className.toLowerCase();
        services.push(function () { return (new app.filters[className]()).filter; });
        angular.module('app.filters').filter(filter, services);
    }
    app.registerFilter = registerFilter;
    /**
     * Register new directive.
     *
     * @param className
     * @param services
     */
    function registerDirective(className, services) {
        if (services === void 0) { services = []; }
        var directive = className[0].toLowerCase() + className.slice(1);
        services.push(function () { return new app.directives[className](); });
        angular.module('app.directives').directive(directive, services);
    }
    app.registerDirective = registerDirective;
    /**
     * Register new service.
     *
     * @param className
     * @param services
     */
    function registerService(className, services) {
        if (services === void 0) { services = []; }
        var service = className[0].toLowerCase() + className.slice(1);
        services.push(function () { return new app.services[className](); });
        angular.module('app.services').factory(service, services);
    }
    app.registerService = registerService;
})(app || (app = {}));
