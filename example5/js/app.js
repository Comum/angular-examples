angular.module('myApp', [])
    .controller('MyController', function ($scope) {
        $scope.counter = 0;
        $scope.add = function (amount) { $scope.counter += amount; };
        $scope.subtract = function (amount) {
            if ($scope.counter > 0) {
                $scope.counter -= amount;
            }
        };
    });