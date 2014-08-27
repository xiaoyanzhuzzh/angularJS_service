angular.module('myYoApp')
  .service('addToCartService', function(){

        this.isExistInCart = function(barcode, cartItems){

            var item;
            for (var i = 0; i < cartItems.length; i++){
                if (barcode === cartItems[i].item.barcode){
                    item = cartItems[i];
                }
            }
            return item;
        };


        this.getCartItems = function(barcode, items){

            var item;
            for (var i = 0; i < items.length; i++) {
                if(barcode === items[i].barcode){
                    item = items[i];
                }
            }
            return item;
        };
  });
