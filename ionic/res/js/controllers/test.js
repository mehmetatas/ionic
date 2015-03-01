﻿angular.module('app')
    .controller('NavCtrl', function($scope, $ionicSideMenuDelegate) {
        $scope.showMenu = function() {
            $ionicSideMenuDelegate.toggleLeft();
        };
        $scope.showRightMenu = function() {
            $ionicSideMenuDelegate.toggleRight();
        };
    })
    .controller('HomeTabCtrl', function($scope) {
    });