var app = angular.module('restaurantModule',[]);
//recently opened controller
app.controller('recentlyOpenedController',($scope,$http)=>{
    $http.get('/RecentlyOpened').then(function(response){
        $scope.recentlyOpened = response.data;
    });
});
app.run(($http,$rootScope)=>{
    $http.get('/restaurant_info').then(function(response){
        $rootScope.test = response.data;
        console.log($rootScope.test);
    });
});