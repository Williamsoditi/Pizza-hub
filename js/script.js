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