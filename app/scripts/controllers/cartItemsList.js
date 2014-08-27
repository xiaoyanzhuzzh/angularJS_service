'use strict';

/**
 * @ngdoc function
 * @name myYoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myYoApp
 */
angular.module('myYoApp')
  .controller('CartItemsListCtrl', function ($scope, CartItemOperateService) {

       $scope.cartItems = Util.localStorage.getStorageItem('cartItems');

       $scope.total = CartItemOperateService.getTotalMoney($scope.cartItems);

       $scope.totalNumber = CartItemOperateService.getTotalNumber($scope.cartItems);

       $scope.changeCartItemcart = function(cartItem){

          CartItemOperateService.changeCurrentCartItemNumber(cartItem, $scope.cartItems);
          $scope.total = CartItemOperateService.getTotalMoney($scope.cartItems);
          $scope.totalNumber = CartItemOperateService.getTotalNumber($scope.cartItems);
          $scope.$parent.cartCount = CartItemOperateService.getTotalNumber($scope.cartItems);
       };

       $scope.addCartItemNumber = function(cartItem){

           CartItemOperateService.addCartItemNumber(cartItem, $scope.cartItems);
           $scope.total = CartItemOperateService.getTotalMoney($scope.cartItems);
           $scope.totalNumber = CartItemOperateService.getTotalNumber($scope.cartItems);
           $scope.$parent.cartCount = CartItemOperateService.getTotalNumber($scope.cartItems);

       };

       $scope.reduceCartItemNumber = function(cartItem){

           CartItemOperateService.reduceCartItemNumber(cartItem, $scope.cartItems);
           $scope.total = CartItemOperateService.getTotalMoney($scope.cartItems);
           $scope.totalNumber = CartItemOperateService.getTotalNumber($scope.cartItems);
           $scope.$parent.cartCount = CartItemOperateService.getTotalNumber($scope.cartItems);

       };

       $scope.deleteCartItem = function(cartItem){

          $scope.cartItems = CartItemOperateService.deleteCartItem(cartItem, $scope.cartItems);
          $scope.total = CartItemOperateService.getTotalMoney($scope.cartItems);
          $scope.totalNumber = CartItemOperateService.getTotalNumber($scope.cartItems);
          $scope.$parent.cartCount = CartItemOperateService.getTotalNumber($scope.cartItems);
       };

  });
