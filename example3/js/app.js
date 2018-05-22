function mainCtrl($scope) {
    var updateClock;

    $scope.clock = {
        now: new Date().toTimeString()
    };
    updateClock = function () {
        $scope.clock.now = new Date().toTimeString();
    };
    setInterval(function () {
        $scope.$apply(updateClock);
    }, 1000);
    updateClock();
}