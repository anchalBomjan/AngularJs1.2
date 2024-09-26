var  myNinjaApp=angular.module('myNinjaApp',['ngRoute']);
myNinjaApp.config(['$routeProvider',function($routerProvider){
    $routerProvider
    .when('/home',{
        templateUrl:'../views/home.html',
        controller:'NinjaController'
    })
    .when('/directory',{
        templateUrl:'../views/directory.html',
        controller:'NinjaController'
    })
    .otherwise({
        redirectTo:'/home'
    });


}
]);
//To protect the variable from manification we do like this  ways

myNinjaApp.controller('NinjaController',['$scope',function($scope){

$scope.removeNinja=function(ninja)
{
    var removedNinja=$scope.ninjas.indexOf(ninja);
    $scope.ninjas.splice(removedNinja,1);
};
$scope.addNinja=function(){

    $scope.ninjas.push({
        name:$scope.newninja.name,
        belt:$scope.newninja.belt,
        rate:parseInt($scope.newninja.rate),
        available:true

    });


    $scope.newninja.name="";
    $scope.newninja.belt="";
    $scope.newninja.rate="";
};

$scope.ninjas=[
    {
        name:'Yoshi',
        belt:'Green',
        rate:50,
        available:true,
        thumb:"../content/img/Yoshi.jpg"
    },
    {
        name:'Crystal',
        belt:'yellow',
        rate:30,
        available:true,
         thumb:"../content/img/Crystal.jpg"
    },
    {
        name:'Ryu',
        belt:'Green',
        rate:10,
        available:true,
        thumb:"../content/img/Ryu.jpg"

    },
    {
        name:'Shaun',
        belt:'black',
        rate:1000,
        available:true,
        thumb:"../content/img/shaun.jpg"
    }
]
}]);
