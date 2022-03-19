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
})
// ADDING CURRENT YEAR
let date = new Date().getFullYear();
let dateTag = document.getElementById("year");
dateTag.innerHTML = "Copyright(C)" + " " + date;


//  CONSTRUCTOR  //
class Pizza{
    constructor(pizzaSize, pizzaTopping, crustType, pizzaQuantity) {
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
                return 100;
            };
            if (this.pizzaTopping === "Extra-cheese") {
                return 100;
            };
            if (this.pizzaTopping === "Chicken") {
                return 100;
            };
            if (this.pizzaTopping === "Buffallo-sauce") {
                return 100;
            };
            if (this.pizzaTopping === "Vegetable") {
                return 100;
            };
            if (this.pizzaTopping === "Greens") {
                return 100;
            };
            if (this.pizzaTopping === "Chocolate-shavings") {
                return 100;
            };
        };

        totalPrice() {
            return (
                (this.sizePrices() + this.crustPrice() + this.toppingsPrice()) * this.pizzaQuantity
            );
        };
};
    

// function orderValidation(object) {
//     if (isNaN(object.pizzaQuantity)) {
//         alert("Please select pieces of pizzas needed!");
//         return false;
//     } else {
//         return true;
//     }
// }