var app = angular.module('trafficApp', ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "views/homePage.html",
        controller: "homePage.js"
    })
    .when("/users", {
        templateUrl: "views/userPages/usersHome.html",
        controller: "usersHome.js"
    })
    .when("/users/Geoffrotism", {
        templateUrl: "views/userPages/Geoffrotism.html",
        controller: "Geoffrotism.js"
    })
});