$(document).ready(function () {

    // felső slider animáció

    $('#slider').append('<div id="slider-nav"></div>');
    $('#slider li.slide').each(function () { //gombócok elhelyezése
        $('#slider-nav').append('<div></div>');
    });

    $('.slide:first-of-type').addClass('active-slide');
    $('#slider-nav div:first-of-type').addClass('slider-nav-active');

    var slideNumber = $('.slide').length - 1;
    var active = $('.active-slide').index();



    $('#slider-nav div').click(function () {
        active++;

        if (active > slideNumber) {
            active = 0;
        }

        $('.slide').removeClass('active-slide');
        $('.slide').eq(active).addClass('active-slide');

        $('#slider-nav div').removeClass('slider-nav-active');
        $('#slider-nav div').eq(active).addClass('slider-nav-active');

    });

    // pictures animáció

    $('#pictures').append('<div id="prev"></div><div id="next"></div>');
    $('#pictures ul:first-of-type').addClass('active-pictures');

    var picturesNumber = $('.picture-slide').length - 1;
    var active_pics = $('.active-pictures').index();

    $("#next").click(function () {
        active_pics++;

        if (active_pics > picturesNumber) {
            active_pics = 0;
        }



        $('.picture-slide').removeClass('active-pictures');
        $('.picture-slide').eq(active_pics).addClass('active-pictures');

    });

    $("#prev").click(function () {
        active_pics++;

        if (active_pics > picturesNumber) {
            active_pics = 0;
        }

        $('.picture-slide').removeClass('active-pictures');
        $('.picture-slide').eq(active_pics).addClass('active-pictures');

    });



});
