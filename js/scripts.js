// backend
function Order() {
  this.feeds = 0;
  this.topping = 0;
  this.total = 0;
  this.priceSize = 0;
  this.priceTopping = 0;
}

var pizza = new Order();


// size
Order.prototype.priceFeed = function() {
  this.priceSize = 1;

  if(this.feeds === 1) {
    this.priceSize += 1;
  };
  if (this.feeds === 2) {
    this.priceSize += 2;
  };

  if (this.feeds === 3) {
    this.priceSize += 3;
  };

  if (this.feeds === 4) {
    this.priceSize += 4;
  };

  return this.priceSize;
};


// toppings
Order.prototype.priceTop = function () {
  this.priceTopping = 1;
  if (this.topping <= 2) {
    this.priceTopping += 1;
  };
  if (this.topping >= 3) {
    this.priceTopping += 2;
  };
  return this.priceTopping;
};

// total cost
// Order.prototype.totalPrice = function () {
//   this.total = priceSize + priceTopping;
// }

//
// Order.prototype.priceAll = function () {
//   total += priceSize + priceTopping;
// };
//
// Order.prototype.clearPrice = function () {
//   this.feeds = 0;
//   this.priceSize = 0;
// }
//
// frontend
$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();

    pizza.feeds = parseInt($("input:radio[name=size]:checked").val());

    $("input:checkbox[name=top]:checked").each(function() {
     var toppingType = parseInt($(this).val());
     pizza.topping++;
   });

   pizza.priceFeed()
   pizza.priceTop();

  $("#sizes").text(pizza.priceSize);
  $("#toppings").text(pizza.priceTopping);
  // $("#total").text(pizza.totalPrice());
  });
});

//
