var app = angular.module('simpleApp', []);

app.controller('mainCtrl', function ($scope) {
    var updateClock = function () {
        $scope.clock = new Date().toTimeString();
    };

    setInterval(function() {
        $scope.$apply(updateClock);
    }, 1000);
});