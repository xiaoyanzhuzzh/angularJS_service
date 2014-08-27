'use strict';


angular.module('myYoApp')
    .controller('ItemsListCtrl', function ($scope, itemsService) {

        $scope.items = itemsService.getItems;

        $scope.addToCart = function(item) {

             $scope.$parent.addCartCount();

             var cartItems = Util.localStorage.getStorageItem('cartItems');

                  if (!cartItems) {
                      cartItems = [];
                  }

                  var cartItem = isExistInCart(item.barcode, cartItems);
                  if (cartItem) {
                      cartItem.number += 1;
                  }
                  else{
                      cartItems.push(new  CartItem(getCartItems(item.barcode, $scope.items),1));
                  }

                 Util.localStorage.setStorageItem('cartItems', cartItems);

             };

    });

    function getCartItems(id, items){
        var item;
        // var items = itemsService.getItems;
        for (var i = 0; i < items.length; i++) {
            if(id === items[i].barcode){
                item = items[i];
            }
        }
        return item;
    }

    function isExistInCart(barcode, cartItems){
        var item;
        for (var i = 0; i < cartItems.length; i++){

            if (barcode === cartItems[i].item.barcode){
                item = cartItems[i];
            }
        }
        return item;
    }
