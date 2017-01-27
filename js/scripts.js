// backend
function Order() {
  this.feeds = 0;
  // this.toppingCount = 0;
  // this.priceTopping = 0;
  this.total = 0;
}


//
// $("input:checkbox[name=top]:checked").each(function() {
//   var toppingType = parseInt($(this).val());
//   toppingCount++;
// });

var pizza = new Order();
//
Order.prototype.priceFeed = function() {
// size
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
//
// Order.prototype.clearPrice = function () {
//   this.feeds = 0;
//   this.priceSize = 0;
// }
//
// Order.prototype.priceTop = function () {
// // toppings
//   if (this.toppingCount <= 2) {
//     priceTopping += 1;
//   } else {
//     priceTopping += 2;
//   }
// };
//
// Order.prototype.priceAll = function () {
//   total += priceSize + priceTopping;
// };

// frontend
$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();

    pizza.feeds = parseInt($("input:radio[name=size]:checked").val());


  $("#sizes").text(pizza.feeds);
  $("#toppings").text(pizza.priceFeed());

  });
});




//
