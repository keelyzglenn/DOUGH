// backend
function Order() {
  this.feeds = 0;
  this.toppingCount = 0;
  this.priceSize = 0;
  this.priceTopping = 0;
  this.total = 5;
}


var sizeType = parseInt($("input:radio[name=size]:checked").val());
$("input:checkbox[name=top]:checked").each(function() {
  var toppingType = parseInt($(this).val());
  toppingCount++;
});

var pizza = new Order();

Order.prototype.priceFeed = function() {
// size
  if(this.feeds === 1) {
    this.priceSize += 1;
  } else if (this.feeds === 2) {
    this.priceSize += 2;
  } else if (this.feeds === 3) {
    this.priceSize =+ 3;
  } else if (this.feeds === 4) {
    this.priceSize += 4;
	}
};

Order.prototype.priceTop = function () {
// toppings
  if (this.toppingCount <= 2) {
    this.priceTopping += 1;
  } else {
    this.priceTopping += 2;
  }
};

Order.prototype.priceAll = function () {
  this.total += this.priceSize + this.priceTopping;
};

// frontend
$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();

    pizza.priceFeed();
    pizza.priceTop();
    pizza.priceAll();
    
  $("#sizes").text(pizza.priceSize);
  $("#toppings").append(pizza.priceTopping);
  $("#orderResult").text(pizza.total);
  });
});




//
// // topping option one
//   if(this.topping = 1) {
//     pizzaBasePrice += 1;
//   } else if (this.topping = 2) {
//     pizzaBasePrice += 2;
//   } else if (this.topping = 3) {
//     pizzaBasePrice += 3;
//   } else if (this.topping = 4) {
//     pizzaBasePrice += 4;
