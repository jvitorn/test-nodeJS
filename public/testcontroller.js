app.controller('testController',function($scope,$http){
    $http.get('/user_info').then(function(response){
        $scope.delivery = response.data;
        console.log($scope.delivery);
      
    });
    
});