$(document).ready(function(){
    $('#bxslider').bxSlider({
        mode: 'fade',
        pager:false,
        auto: true,
        autoControls: true,
    });
    
    $('#slider2').bxSlider({
        slideWidth: 131,
        minSlides: 2,
        maxSlides: 7,
        moveSlides: 1,
        slideMargin: 24,
        pager:false,
        auto:true,
        autoControls:true
    });
});