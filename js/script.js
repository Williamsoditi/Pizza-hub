function wantDelivery() {
    var locality = prompt("Please enter target destination!");
    alert("Dear customer, the delivery fee is present on the receipt");
    alert("Our services will be at" + " " + locality + " " + "at any time from now!" );
}
$(document).ready(function () {
    $(".delivery").click(function () {
        $(".delivery-img").fadeToggle(1000);
        $("#delivery").fadeToggle(1000);
    });
    $(".payment").click(function () {
        $(".payment-img").fadeToggle(1000);
        $("#payment").fadeToggle(1000);
    });
    $(".offers").click(function () {
        $(".offers-img").fadeToggle(1000);
        $("#offers").fadeToggle(1000);
    });
    $(".hotels").click(function () {
        $(".trial").fadeToggle(1000);
        $("#hotels").fadeToggle(1000);
    });
    $("#backToOrder").click(function () {
        $("#make-order").show();
        $("#myOrder").hide();
    });
})

// ADDING CURRENT YEAR OF THE FOOTER //
let date = new Date().getFullYear();
let dateTag = document.getElementById("year");
dateTag.innerHTML = "Copyright(C)" + " " + date;


//  CONSTRUCTOR  //
class Pizza{
    constructor(pizzaSize, pizzaTopping, crustType, pizzaQuantity) {
        // this.customerName = customerName;
        this.pizzaSize = pizzaSize;
        this.pizzaTopping = pizzaTopping;
        this.crustType = crustType;
        this.pizzaQuantity = pizzaQuantity;
    };
    sizePrices() {
        if (this.pizzaSize === "Small") {
            return 200;
        };
        if (this.pizzaSize === "Medium") {
            return 400;
        };
        if (this.pizzaSize === "Large") {
            return 800;
        }
        }

    crustPrice() {
        if (this.crustType === "Thick-crust") {
            return 300;
        };
        if (this.crustType === "Thin-crust") {
            return 250;
        };
        if (this.crustType === "Stuffed") {
            return 200;
        };
        if (this.crustType === "Crispy") {
            return 50;
        };
        if (this.crustType === "Gluten-free") {
            return 100;
        };
    }

    toppingsPrice() {
        if (this.pizzaTopping === "Pineapple") {
            return 100;
        };
        if (this.pizzaTopping === "BBQ") {
            return 300;
        };
        if (this.pizzaTopping === "Extra-cheese") {
            return 150;
        };
        if (this.pizzaTopping === "Chicken") {
            return 100;
        };
        if (this.pizzaTopping === "Buffallo-sauce") {
            return 100;
        };
        if (this.pizzaTopping === "Vegetable") {
            return 50;
        };
        if (this.pizzaTopping === "Greens") {
            return 80;
        };
        if (this.pizzaTopping === "Chocolate-shavings") {
            return 150;
        };
    };

        totalPrice() {
            return (
                (this.sizePrices() + 
                this.crustPrice() + 
                this.toppingsPrice()) * this.pizzaQuantity
            );
        };
};

let submitButton = document.getElementById("makeOrder");
submitButton.addEventListener("click", function () {

    const pizza = new Pizza();
    // pizza.name = document.getElementById("customerName").value;
    pizza.pizzaSize = document.getElementById("pizzaSize").value;
    pizza.crustType = document.getElementById("crustType").value;
    pizza.pizzaTopping = document.getElementById("pizzaTopping").value;
    pizza.pizzaQuantity = parseInt(document.getElementById("pizzaQuantity")).value;

    let total = pizza.totalPrice();
    let check = checkIfEmpty(pizza);
    if (check) {
        // document.getElementById("customerName").innerHTML = pizza.name;
        document.getElementById("myPizzaSize").innerHTML = pizza.pizzaSize;
        document.getElementById("pizzaSizePrice").innerHTML = pizza.sizePrices();
        document.getElementById("myPizzaTopping").innerHTML = pizza.pizzaTopping;
        document.getElementById("pizzaToppingPrice").innerHTML = pizza.toppingsPrice();
        document.getElementById("myPizzaCrust").innerHTML = pizza.crustType;
        document.getElementById("pizzaCrustPrice").innerHTML = pizza.crustPrice;
        document.getElementById("myPizzaQuantity").innerHTML = pizza.pizzaQuantity;
        document.getElementById("total").innerHTML = total;
        $("#make-order").hide();
        $("#myOrder").show();
    } else
    document.getElementById("placeOrder").reset();
})
    

function checkIfEmpty(object) {
    if (isNaN(object.pizzaQuantity)) {
        alert("Please select number of pizzas needed!");
        return true;
    } else {
        return false;
    };
};