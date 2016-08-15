(function () {
    'use strict';
    angular.module("mySampleApp", ["mySampleApp.ctrl"]);
    angular.module("mySampleApp.appSetting", [])
    .constant("appConfig",
        {
            appVersion: 'v1.0.0a'
        });
})();