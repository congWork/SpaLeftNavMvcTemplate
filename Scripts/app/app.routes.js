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
             
              //example
              return dataServices.getSampleData()
                  .then(function(d) {
                      sharedServices.setIsProcessing(false);
                          return d;
                      },
                      function(d) {
                          sharedServices.setIsProcessing(false);
                          return d;
                      });
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
