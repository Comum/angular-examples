angular.module('myApp', [])
    .directive('myDirective', function () {
        return {
            restrict: 'A',
            replace: true,
            template: '<a href="http://www.google.com">Click me to go to google</a>'
        };
    });