// backend
function Order() {
  this.feeds = 0;
  this.topping = 0;
  this.total = 5;
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

  if (this.topping === 1 || this.topping === 2) {
    this.priceTopping += 1;
  };
  if (this.topping === 3 || this.topping === 4) {
    this.priceTopping += 2;
  };
  return this.priceTopping;
};

// total cost
Order.prototype.totalPrice = function () {
  this.total += this.priceSize + this.priceTopping;
};



// frontend
$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var inputtedName = $("input#fullName").val();
    var inputtedCity = $("input#city").val();
    var inputtedTime = $("input#time").val();

    pizza.feeds = parseInt($("input:radio[name=size]:checked").val());

    $("input:checkbox[name=top]:checked").each(function() {
     var toppingType = parseInt($(this).val());
     pizza.topping++;
   });

   pizza.priceFeed();
   pizza.priceTop();
   pizza.totalPrice();

   $("#form").toggle();
   $(".result").toggle();

  $("#orderResult").text(pizza.total);
  $("#userName").text(inputtedName);
  $("#userCity").text(inputtedCity);
  $("#userTime").text(inputtedTime);
  });
});
