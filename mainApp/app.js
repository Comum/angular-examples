var pageList = angular.module('mainPage', []);
var pageMultiplier = 5;

function generatePagesLinks() {
    var links = [];

    for (i = 1 ; i <= 12 ; i++) {
        links.push({
            route: '/example' + i,
            name: 'Example ' + i
        });
    }

    return links;
}

pageList.controller('mainCtrl', function ($scope) {
    var i;

    $scope.pages = generatePagesLinks();
    $scope.pagesIndex = 0;
    $scope.maxPagesIndex = Math.ceil($scope.pages.length / pageMultiplier) - 1;
    $scope.minPageReached = true;
    $scope.maxPageReached = false;

    function getPagesInView(index) {
        return $scope.pages.slice(index * pageMultiplier, (index + 1) * pageMultiplier);
    }

    function updatePagesInView() {
        $scope.pagesInView = getPagesInView($scope.pagesIndex);
    }

    updatePagesInView();

    $scope.updateName = function () {
        if (this.name.length) {
            $scope.pagesInView = $scope.pages;
        } else {
            updatePagesInView();
        }
    };

    $scope.decreasePage = function () {
        $scope.maxPageReached = false;

        if ($scope.pagesIndex > 0) {
            $scope.pagesIndex = $scope.pagesIndex - 1;
        }

        if ($scope.pagesIndex === 0) {
            $scope.minPageReached = true;
        } else {
            $scope.minPageReached = false;
        }

        updatePagesInView();
    };

    $scope.increasePage = function () {
        $scope.minPageReached = false;

        if ($scope.pagesIndex < $scope.maxPagesIndex) {
            $scope.pagesIndex = $scope.pagesIndex + 1;
        }

        if ($scope.pagesIndex === $scope.maxPagesIndex) {
            $scope.maxPageReached = true;
        } else {
            $scope.maxPageReached = false;
        }

        updatePagesInView();
    };
});