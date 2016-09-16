(function () {
    'use strict';
    angular.module("mySampleApp.ctrl",
        ["mySampleApp.svc", "mySampleApp.appSetting", "mySampleApp.filters", "ngMaterial"])
        .controller("baseController", fnBaseCtrl)
        .controller("homeController", fnHomeCtrl);
  
    fnBaseCtrl.$inject = ['appConfig', '$mdSidenav', '$scope', '$rootScope', '$mdDialog','$anchorScroll'];
    function fnBaseCtrl(appConfig, $mdSidenav, $scope, $rootScope, $mdDialog,$anchorScroll) {
      
        //init
          $scope.baseSharedObj = {
            appVersion: appConfig.appVersion,
            isLoading: false,
            displayErrorModal: displayErrorModal
          };

        $rootScope.$on("isProcessingData",
               function (event, args) {
                   $scope.baseSharedObj.isLoading = args;
                   console.log("set is processing: " + args);
               }
        );

        //global error modal
        $rootScope.$on("displayErrorModal",
              function (event, args) {
                  $scope.baseSharedObj.displayErrorModal(args);
              }
       );
       
        //side nav
       $scope.toggleLeft = function (navId) {
            $mdSidenav(navId)
                .toggle()
                .then(function () {
                    //console.log("toggle " + navId + " is done");
                });
       };

       $scope.scrollToTop = function () {
           $anchorScroll();
           return false;
       };
        //functions
       function displayErrorModal(errorMsgP) {
               $mdDialog.show(
                {
                   parent: angular.element(document.body),
                   clickOutsideToClose:true,
                   escapeToClose: true,
                   template:
          '<md-dialog>' +
          '  <md-dialog-content style="padding:24px"><h2 class="md-title text-danger"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> {{title}}</h2><hr><div class="md-dialog-content-body text-danger">{{errorMessage}}</div></md-dialog-content>' +
          '  <md-dialog-actions>' +
          '    <md-button ng-click="closeDialog()" class="text-danger">' +
          '      Got It' +
          '    </md-button>' +
          '  </md-dialog-actions>' +
          '</md-dialog>',
                   controller: function($scope, $mdDialog) {
                       $scope.errorMessage = errorMsgP;
                       $scope.title = "Errors:";
                       $scope.closeDialog = function () {
                           $mdDialog.hide();
                       }
                   }
                  }
               );
       };
    }
    fnHomeCtrl.$inject = ['appConfig','$scope','initData'];
    function fnHomeCtrl(appConfig,$scope,initData) {
        var vm = this;

        //modify the parent shared variable
        //example: $scope.baseSharedObj.appVersion='new value';
        console.log(initData.data);
        if (initData) {
            $scope.baseSharedObj.isLoading = true;
           
            $scope.baseSharedObj.displayErrorModal("sample test error");
        }
        
    }
})();

