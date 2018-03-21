var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
	$scope.data;
    $http.get("https://jsonplaceholder.typicode.com/posts")
    .then(function(response) {
        $scope.data = response.data;
        console.log($scope.data);
    });
});