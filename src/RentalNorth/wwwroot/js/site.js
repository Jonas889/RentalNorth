/// <reference path="angular.min.js" />

var app = angular.module("rentalNorth", []);

app.controller("homeController", function ($scope) {
    $scope.products = ["Milk", "Bread", "Cheese"];
});