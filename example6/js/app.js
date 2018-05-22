var app = angular.module('myApp', []);

app.controller('ParentController', function ($scope) {
    $scope.person = {
        greet: false
    };
});

app.controller('ChildController', function ($scope) {
    $scope.sayHello = function () {
        $scope.person.name = 'Miguel Ribeiro';
        $scope.person.greet = true;
    }
});