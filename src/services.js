/// <reference path="app.ts" />
'use strict';
var app;
(function (app) {
    var services;
    (function (services) {
        var MyService = (function () {
            function MyService() {
                this.meaningOfLife = 42;
            }
            MyService.prototype.someMethod = function () {
                return 'Meaning of life is ' + this.meaningOfLife;
            };
            return MyService;
        })();
        services.MyService = MyService;
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
app.registerService('MyService', []);
