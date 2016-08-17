(function() {
    'use strict';
    angular.module("mySampleApp.routes", ["ui.router","mySampleApp.appSetting"])
        .config(config);
    config.$inject = ["$locationProvider", "$stateProvider", "$urlRouterProvider", "$urlMatcherFactoryProvider","appConfig"];
   
    function config($locationProvider, $stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider,appConfig) {

        $locationProvider.html5Mode(true);
        var redirect = function () {

        };
        var getInitData = [
          'dataServices', 'sharedServices',
          function (dataServices, sharedServices) {
              sharedServices.setIsProcessing(true);
              var result = null;
              //example
             // result=dataServices.getLandingPageContents();
              return result;

          }
        ];

        $urlMatcherFactoryProvider.caseInsensitive(true);
        $urlMatcherFactoryProvider.strictMode(false);
        $urlRouterProvider.otherwise("/home/");

        $stateProvider
            .state("home",
            {
                url: "/:lang/home",
                params: {
                    lang: {
                        value: null,
                        squash: true
                    }
                },
                resolve: {
                    initData: getInitData
                },
                templateUrl: "Content/views/home.html?v=" + appConfig.appVersion,
                controller: "homeController",
                controllerAs: "home"

            });


    };
})();
