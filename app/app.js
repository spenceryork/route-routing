"use strict";

angular.module("RouteApp", ["ngRoute"])
.config( ($routeProvider) => {
    $routeProvider
   .when('/blueridgeparkway', {
       templateUrl: "app/partials/blueRidge.html",
       controller: "BlueRidgeCtrl"
   })
   .when('/route66', {
       templateUrl: "app/partials/route66.html",
       controller: "Route66Ctrl"
   });
});