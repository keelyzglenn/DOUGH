// backend
function Order() {
  this.feeds = 0;
  this.topping = 0;
  this.total = 0;
}

var pizza = new Order();


// size
Order.prototype.priceFeed = function() {
  var priceSize = 1;

  if(this.feeds === 1) {
    priceSize += 1;
  };
  if (this.feeds === 2) {
    priceSize += 2;
  };

  if (this.feeds === 3) {
    priceSize += 3;
  };

  if (this.feeds === 4) {
    priceSize += 4;
  };

  return priceSize;
};


// toppings
Order.prototype.priceTop = function () {
  var priceTopping = 1;
  if (this.topping <= 2) {
    priceTopping += 1;
  };
  if (this.topping >= 3) {
    priceTopping += 2;
  };
  return priceTopping;
};

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
     var toppingType = $(this).val();
     pizza.topping++;
   });

  $("#sizes").text(pizza.priceFeed());
  $("#toppings").text(pizza.priceTop());
  });
});

//
