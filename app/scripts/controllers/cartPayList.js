'use strict';

/**
 * @ngdoc function
 * @name myYoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myYoApp
 */
angular.module('myYoApp')
  .controller('CartPayListCtrl', function ($scope, CartItemOperateService) {

     $scope.cartPayList = Util.localStorage.getStorageItem('cartItems');
     $scope.total = CartItemOperateService.getTotalMoney($scope.cartPayList );
     $scope.totalNumber = CartItemOperateService.getTotalNumber($scope.cartPayList );

  });
