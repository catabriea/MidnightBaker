var myApp = angular.module('midnightbakerApp', ['ngRoute', 'appControllers']);
var appControllers = angular.module('appControllers', []);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/home', {
            templateUrl: "/assets/views/routes/home.html",
            controller: "HomeController"
        }). //these are method chains
        when('/about', {
            templateUrl: "/assets/views/routes/about.html",
            controller: "HomeController"
        }).
        when('/recipes', {
            templateUrl: "/assets/views/routes/recipes.html",
            controller: "BakerController"
        }).
        when('/health', {
            templateUrl: "/assets/views/routes/health.html",
            controller: "BakerController"
        }).
        when('/contact', {
            templateUrl: "/assets/views/routes/contact.html",
            controller: "BakerController"
        }).
        otherwise({
            redirectTo: "/home"
        })
}]);