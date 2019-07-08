$(document).ready(function () {
 //hambi menü
    
    $("#hamburger").click(function(){
        $(this).toggleClass("hambi-open");
        $('#hambi-menu').slideToggle();
        
    });


    //orvosok accordion

    $('#dokino').click(function () {
        $('#woman').slideToggle();
        $('#dokino').toggleClass("active");
    });

    $('#doki').click(function () {
        $('#man').slideToggle();
        $('#doki').toggleClass("active");

    });

    //gyik accordion
    $('.questions ul li').click(function () {
        $(this).addClass("open");
        $(".open + p").slideToggle();
        $(this).removeClass("open");

    });
    
    //button-ra katt-nál alert
    $('button').click(function () {
       alert("Köszönjük szépen a jelentkezést, rögzítettük az adatait. Amennyiben változás történik értesíteni fogjuk. Sok szeretettel várjuk!");
    });
    
    
    $('body').append('<div id="go-to-top"></div>'); //gomb beillesztése

    $('#go-to-top').click(function () {

        $("html, body").animate({
            scrollTop: 0
        }, 800); //sebesség
        return false;
    });

});
