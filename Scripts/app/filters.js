(function () {
    'use strict';
    angular.module("mySampleApp.filters", [])
        .filter("selectedItemsOnly", selectedItemsOnly);

    function selectedItemsOnly () {
        var isInList = function (myList, currentName) {
            for (var i = 0; i < myList.length; i++) {
                if (myList[i].toLowerCase() === currentName.toLowerCase()) {
                    return true;
                }
            }
            return false;
        };
        return function (items, wantedItemsList) {
            var result = [];
            angular.forEach(items,
                function (item) {
                    if (isInList(wantedItemsList, item)) {
                        result.push(item);
                    }
                });
            return result;
        }
    }
})();


