/// <reference path="angular.min.js" />

var myApp = angular.module('myApp', ['ngRoute']);


myApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            redirectTo: '/home'
        })
        .when('/home', {
            templateUrl: '/angular/Index.html',
            controller: 'homeController'
        })
        .when('/about', {
            templateUrl: '/angular/about.html',
            controller: 'aboutController'
        })
        .when('/contact', {
            templateUrl: '/angular/contact.html',
            controller: 'contactController'
        })
        .when('/renter', {
            templateUrl: '/angular/renter.html',
            controller: 'renterController'
        })
        .when('/rent', {
            templateUrl: '/angular/rent.html',
            controller: 'rentController'
        });
    //.otherwise({
    //    redirectTo: '/home'
    //});

    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('!');

}]);

//app.controller('myCtrl', function ($scope, $http) {
//    $http.get("welcome.htm")
//    .then(function (response) {
//        $scope.myWelcome = response.data;
//    });
//});


myApp.controller('homeController', ['$scope', '$http', function ($scope, $http) {

    $http.get("../../api/allcabins")
        .then(function (response) {
            $scope.cabins = response.data.cabin
           

            var mapOptions = {
                zoom: 6,
                center: new google.maps.LatLng(63.0000, 15.0000),
                mapTypeId: google.maps.MapTypeId.TERRAIN
            }

            $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);


            $scope.markers = [];

            var infoWindow = new google.maps.InfoWindow();

            var createMarker = function (cabin) {

                var marker = new google.maps.Marker({
                    map: $scope.map,
                    position: new google.maps.LatLng(cabin.Lat, cabin.Lng),
                    title: cabin.Title
                });
                console.log(marker);
                marker.content = '<div class="infoWindowContent">' + cabin.InfoWindow + '</div>';

                google.maps.event.addListener(marker, 'click', function () {
                    infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                    infoWindow.open($scope.map, marker);
                });

                $scope.markers.push(marker);
                console.log($scope.markers);

            }

            for (i = 0; i < $scope.cabins.length; i++) {
                createMarker($scope.cabins[i]);
            }

            $scope.openInfoWindow = function (e, selectedMarker) {
                e.preventDefault();
                google.maps.event.trigger(selectedMarker, 'click');
            }
        });
}]);
myApp.controller('aboutController', ['$scope', function ($scope) {
    $scope.greeting = 'Hola!';
}]);
myApp.controller('contactController', ['$scope', function ($scope) {
    $scope.greeting = 'Hola!';
}]);
myApp.controller('renterController', ['$scope', function ($scope) {
    $scope.greeting = 'Hola!';
}]);
myApp.controller('rentController', ['$scope', function ($scope) {
    $scope.greeting = 'Hola!';
}]);

function clearRenderBody() {
    $("#renderBody").html('');
}

