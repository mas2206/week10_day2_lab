var assert = require('assert');
var Basket = require('../basket.js');
var Item = require('../item.js');

describe("basket", function() {

  beforeEach(function() {
    this.basket = new Basket(true);
    this.item1 = new Item("bread", 5, true);
    this.item2 = new Item("eggs", 5, false);
    this.item3 = new Item("milk", 5, true);
    this.item4 = new Item("cheese", 5, false);
  });

  it("should have a loyalty card", function() {
    assert.equal(true, this.basket.loyalty);
  });

  it("can add item to basket", function() {
    this.basket.add(this.item1);
    assert.equal(1, this.basket.contents.length);
  });

  it("can remove item from basket", function() {
    this.basket.add(this.item1);
    this.basket.add(this.item2);
    this.basket.remove(this.item1);
    assert.equal(1, this.basket.contents.length);
  });

  it("can calculate total cost of basket", function() {
    this.basket = new Basket(false);
    this.basket.add(this.item1);
    this.basket.add(this.item2);
    assert.equal(10, this.basket.totalCost());
  });

  it("can discount 10% from total cost on orders over £20", function() {
    this.basket = new Basket(false);
    this.basket.add(this.item1);
    this.basket.add(this.item2);
    this.basket.add(this.item3);
    this.basket.add(this.item4);
    assert.equal(18, this.basket.totalCost());
  });

  it("can discount 5% from total cost if loyalty card is true", function() {
    this.basket = new Basket(true);
    this.basket.add(this.item1);
    this.basket.add(this.item2);
    this.basket.add(this.item3);
    this.basket.add(this.item4);
    assert.strictEqual(17.1, this.basket.totalCost());
  });

  it("can bogof if bogof is true", function() {

  });

});