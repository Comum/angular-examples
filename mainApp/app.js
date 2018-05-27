var pageList = angular.module('mainPage', []);

pageList.controller('mainCtrl', function ($scope) {
    var i;

    $scope.pages = [];

    console.log($scope)

    for (i = 1 ; i <= 11 ; i++) {
        $scope.pages.push({
            route: '/example' + i,
            name: 'Example ' + i
        });
    }

    function getPagesInView(index) {
        return $scope.pages.slice(index * 5, (index + 1) * 5);
    }

    $scope.pagesInView = getPagesInView(0);

    $scope.updateName = function () {
        if (this.name.length) {
            $scope.pagesInView = $scope.pages;
        } else {
            $scope.pagesInView = getPagesInView(0);
        }
    };
})