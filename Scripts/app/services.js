(function () {
    'use strict';
    angular.module("mySampleApp.svc", [])
        .factory("dataServices", dataServices)
        .factory("sharedServices", sharedServices)
        .factory("businessLogicServices", businessLogicServices);
    
    //data services
    dataServices().$inject = ["$http"];
    function dataServices($http) {
        var dataFactory = {
            getSampleData: getSampleData
        };
        return dataFactory;

        //get data from api
        function getSampleData() {
            //return $http.get("api/sample", { cache: false });
            return $http.get("/Scripts/app/testData.json");
        };
    };

    //shared services
    sharedServices.$inject = ["$http", "$window", "$rootScope"];
    function sharedServices($http, $window, $rootScope) {
        var shareScope = $rootScope.$new(true);

        shareScope.setIsProcessing = function (processingP) {
            $rootScope.$broadcast('isProcessingData', processingP);
        };

        shareScope.displayErrorModal = function (errorMessageP) {
            $rootScope.$broadcast('displayErrorModal', errorMessageP);
        };

        return shareScope;
    };

    //business logic services
    function businessLogicServices() {
        var myFactory = {};

        myFactory.applyDirectorBusinessLogic = function () {
            angular.element(document)
                .ready(function () {
                    //do your jquery dom manipulation here
                });
        };
        return myFactory;
    };
})();

