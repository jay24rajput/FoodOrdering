
/*$(document).ready(function () {
    $("nav").on({
        mouseover: function () {
            $(this).css("background-image","url(../images/PizzaHut.jpg)");
        }
    });

});*/
    $(document).ready(function () {
        $("#pizzahut_nav").click(function () {
            $("#pizzahut_name").text("Welcome to Pizza Hut");
        });

        $("#keventers_nav").click(function () {
            $("#keventers_name").text("Take a Juicy Juice");
        });

        $("#kfc_nav").click(function () {
            $("#kfc_name").text("Grab the hottest chicken");
        });

        $("#dominoes_nav").click(function () {
            $("#dominoes_name").text("Fun in every bite");
        });

        $("#burgerking_nav").click(function () {
            $("#burgerking_name").text("King of burgers in here");
        });

        $("#starbucks_nav").click(function () {
            $("#starbucks_name").text("The best place for the best coffee");
        });

        $("#pizzahut").click(function () {
            window.location.href = "https://online.pizzahut.co.in/home";
        });
        
        $("#keventers").click(function () {
            window.location.href = "https://www.keventers.com/";
        });


        $("#KFC").click(function () {
            window.location.href = "https://online.kfc.co.in/";
        });


        $("#dominoes").click(function () {
            window.location.href = "https://www.dominos.co.in/";
        });


        $("#burgerking").click(function () {
            window.location.href = "http://www.burgerkingindia.in/";
        });


        $("#starbucks").click(function () {
            window.location.href = "http://www.starbucks.in/";
        });


    });