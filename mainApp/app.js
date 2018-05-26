var pageList = angular.module('mainPage', []);

pageList.controller('mainCtrl', function ($scope) {
    var i;

    $scope.pages = [];
    $scope.fullPageListStyle = 'display-none';
    $scope.filteredPageListStyle = '';

    console.log($scope)

    for (i = 1 ; i <= 11 ; i++) {
        $scope.pages.push({
            route: '/example' + i,
            name: 'Example ' + i
        });
    }

    $scope.pagesInView = $scope.pages.slice(5, 10);

    $scope.updateName = function () {
        // instead of having two elements update the pagesInView value to all of pages

        if (this.name.length) {
            $scope.fullPageListStyle = '';
            $scope.filteredPageListStyle = 'display-none';
        } else {
            $scope.fullPageListStyle = 'display-none';
            $scope.filteredPageListStyle = '';
        }
    };
})