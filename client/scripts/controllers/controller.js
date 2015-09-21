
myApp.controller('HomeController', ['$scope', function($scope){
    $scope.thing="Midnight Baker - Your one stop medical marijuana baking shop";
    console.log("Home Controller Working!");
}]);

myApp.controller('BakerController', ['$scope', function($scope){
    $scope.thing="Get baked!";
    console.log("Baker Controller");
}]);
