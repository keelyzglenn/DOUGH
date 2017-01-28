// backend
function Order() {
  this.feeds = 0;
  this.topping = 0;
  this.total = 6;
  this.priceSize = 0;
  this.priceTopping = 0;
}

var pizza = new Order();


// size
Order.prototype.priceFeed = function() {
  this.priceSize = 0;

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
  this.priceTopping = 0;

  if (this.topping === 1) {
    this.priceTopping += 1;
  };
  if (this.topping === 2) {
    this.priceTopping += 2;
  };
  if (this.topping === 3) {
    this.priceTopping += 3;
  };
  if (this.topping === 4) {
    this.priceTopping += 4;
  };
  if (this.topping === 5) {
    this.priceTopping += 5;
  };
  if (this.topping === 6) {
    this.priceTopping += 6;
  };
  if (this.topping === 7) {
    this.priceTopping += 7;
  };
  if (this.topping === 8) {
    this.priceTopping += 8;
  };


  return this.priceTopping;
};

// total cost
Order.prototype.totalPrice = function () {
  this.total += this.priceSize + this.priceTopping;
};



// frontend
$(document).ready(function() {
  $(".continue").click(function() {
    $(".imageOne").fadeOut(function() {
      $(".imageTwo").fadeIn();
    });
  });
  $(".continueOne").click(function() {
    $(".imageTwo").fadeOut(function() {
      $(".imageThree").fadeIn();
    });
  });
  $(".continueTwo").click(function() {
    $(".imageThree").fadeOut(function() {
      $(".imageOne").fadeIn();
    });
  });


  // online order


  $("#form").submit(function(event) {
    event.preventDefault();
    var inputtedName = $("input#fullName").val();
    var inputtedAddress = $("input#address").val();
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
    $("#userAddress").text(inputtedAddress);
    $("#userTime").text(inputtedTime);
  });

  $("#refresh").click(function() {
    location.reload();
  });
});
