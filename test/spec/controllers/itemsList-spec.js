'use strict';

describe('Controller: ItemsListCtrl', function () {

  // load the controller's module
  beforeEach(module('myYoApp'));

  var ItemsListCtrl,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ItemsListCtrl = $controller('ItemsListCtrl', {
      $scope: scope
    });
  }));

  it('should show informations of items', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });

    it('ensure invalid email addresses are caught', function() {});
    it('ensure valid email addresses pass validation', function() {});
    it('ensure submitting form changes path', function() { });

    // nice-to-haves
    it('ensure client-side helper shown for empty fields', function() { });
    it('ensure hitting enter on password field submits form', function() { });
});
