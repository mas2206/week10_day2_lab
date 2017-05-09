var assert = require('assert');
var Item = require('../item.js');

describe("item", function() {

  beforeEach(function() {
    this.item = new Item("eggs", 2, true);
  });

  it("item has name", function() {
    assert.equal("eggs", this.item.name);
  });

  it("item has price and bogof", function() {
    assert.equal(2, this.item.price);
    assert.equal(true, this.item.bogof);
  });
  
});