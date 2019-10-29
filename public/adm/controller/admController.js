
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
// request http from modal registration restaurant
app.controller('registrationRestaurantController',function($scope){
    //vars
    let categories = '';
    // registration categories from options restaurants
    $scope.data = {
        model: null,
        // name from categories 
        availableOptions : [
            {name :'bistro restaurant' },
            {name : 'fast food'}, 
            {name :'food truck'},
            {name :'buffet'},
            {name :'pizzeria'},
            {name :'steak house'},
            {name :'Japanese food'}
        ]
    };
    // function from catch option selected
    $scope.catchRestaurantType = function(item){
        categories = item;
        console.log(categories);
        // return option selected
        return categories;
        
    };
    
    
});