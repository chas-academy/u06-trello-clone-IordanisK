$(document).ready(function(){
    //funktionalitet för arrow-right, next img 
    $('.next').on('click', function(){
        var currentImg = $('.active');
        var nextImg = currentImg.next();

        if(nextImg.length) {
            currentImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active').css('z-index', 10);
        }
    });

    //funktionalitet för arrow-left, previous img 
    $('.prev').on('click', function(){
        var currentImg = $('.active');
        var prevImg = currentImg.prev();

        if(prevImg.length) {
            currentImg.removeClass('active').css('z-index', -10);
            prevImg.addClass('active').css('z-index', 10);
        }
    });
});