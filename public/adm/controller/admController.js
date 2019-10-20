// request from /count Users route
app.controller('countUsersController',function($scope,$http){
    $http.get('/countUsers').then(function(response){
        $scope.countUsers = response.data;
        console.log($scope.countUsers);
    });
});
// request from /count Restaurants route
app.controller('countRestaurantsController',function($scope,$http){
    $http.get('/countRestaurants').then(function(response){
        $scope.countRestaurants = response.data;
        console.log($scope.countRestaurants);
    });
});
// request from /count Delivery route
app.controller('countDeliveryController',function($scope,$http){
    $http.get('/countDelivery').then(function(response){
        $scope.countDelivery = response.data;
        console.log($scope.countDelivery);
    });
});
// request from /count Views route