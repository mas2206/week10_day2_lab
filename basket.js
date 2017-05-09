var Basket = function(loyalty) {
  this.loyalty = loyalty;
  this.contents = [];
}

Basket.prototype = {

  add: function(item) {
    this.contents.push(item);
  },

  remove: function(item) {
    this.contents.shift(item);
  },

  totalCost: function() {
    var totalCost = 0;
    for (var item of this.contents) {
      totalCost += item.price;
    }
    if (totalCost >= 20) {
      onePercent = (totalCost / 100);
      tenPercent = (onePercent * 10);
      totalCost -= tenPercent; 
    }
    if (this.loyalty) {
      onePercent = (totalCost / 100);
      fivePercent = (onePercent * 5);
      totalCost -= fivePercent;
    }
    return totalCost;
  }
}

module.exports = Basket;