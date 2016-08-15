(function () {
    'use strict';
    angular.module("mySampleApp.ctrl", ["mySampleApp.svc", "mySampleApp.appSetting", "mySampleApp.filters","ngMaterial"])
    .controller("baseController", fnBaseCtrl)
    .controller("homeController", fnHomeCtrl);

    fnBaseCtrl.$inject = ['appConfig', '$mdSidenav','$scope'];
    function fnBaseCtrl(appConfig, $mdSidenav,$scope) {
      

        //init
        $scope.baseSharedObj = {
            appVersion : appConfig.appVersion
        };
       
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

