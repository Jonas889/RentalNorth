/// <reference path="angular.min.js" />

var app = angular.module("rentalNorth", ['ngRoute']);

app.controller("homeController", function ($scope) {
    $scope.products = ["Milk", "Bread", "Cheese"];
});

rentalNorth.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: '/Index.cshtml',
            controller: 'homeController'
        })
        .when('/about', {
            templateUrl: '/about.html',
            controller: 'homeController'
        })
        .when('/contact', {
            templateUrl: '/contact.html',
            controller: 'homeController'
        })
        .when('/renter', {
            templateUrl: '/renter.html',
            controller: 'homeController'
        })
        .when('/rent', {
            templateUrl: '/rent.html',
            controller: 'homeController'
        })
        .otherwise({
            redirectTo: '/home'
        });
});

rentalNorth.controller('homeController', function ($scope) {
    $scope.students = [
        { name: 'Mark Waugh', city: 'New York' },
        { name: 'Steve Jonathan', city: 'London' },
        { name: 'John Marcus', city: 'Paris' }
    ];

    $scope.message = "Click on the hyper link to view the students list.";
});