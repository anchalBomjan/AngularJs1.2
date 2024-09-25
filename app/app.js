var  myNinjaApp=angular.module('myNinjaApp',[]);

//To protect the variable from manification we do like this  ways

myNinjaApp.controller('NinjaController',['$scope',function($scope){
$scope.message="hey y all";
$scope.fav="test"

// $scope.ninjas=['yoshi','crystal','ryu','shaun'];
$scope.ninjas=[
    {
        name:'Yoshi',
        belt:'Green',
        rate:50
    },
    {
        name:'Crystal',
        belt:'yellow',
        rate:30
    },
    {
        name:'Ryu',
        belt:'Orange',
        rate:10

    },
    {
        name:'Shaun',
        belt:'black',
        rate:1000
    }
]
}]);
