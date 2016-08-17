(function () {
    'use strict';
    angular.module("mySampleApp.ctrl", ["mySampleApp.svc", "mySampleApp.appSetting", "mySampleApp.filters","ngMaterial"])
    .controller("baseController", fnBaseCtrl)
    .controller("homeController", fnHomeCtrl);

    fnBaseCtrl.$inject = ['appConfig', '$mdSidenav','$scope','$rootScope'];
    function fnBaseCtrl(appConfig, $mdSidenav,$scope,$rootScope) {
      

        //init
          $scope.baseSharedObj = {
            appVersion: appConfig.appVersion,
            isLoading: false
        };
        $rootScope.$on("isProcessingData",
               function (event, args) {
                   $scope.baseSharedObj.isLoading = args;
               }
        );
       
       $scope.toggleLeft = function (navId) {
            $mdSidenav(navId)
                .toggle()
                .then(function () {
                    //console.log("toggle " + navId + " is done");
                });
        };

    }
    fnHomeCtrl.$inject = ['appConfig','$scope'];
    function fnHomeCtrl(appConfig,$scope) {
        var vm = this;

        //modify the parent shared variable
        //example: $scope.baseSharedObj.appVersion='new value';
    }
})();

