$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()>500){
            $('.btn-back-to-top').css("opacity", "1");
        }
        else{
            $('.btn-back-to-top').css("opacity", "0");
        }
        console.log($(this).scrollTop());
    });

    $('.btn-back-to-top').click(function(){
        $('html, body')
            .stop()
            .animate({scrollTop:0},1000,'easeInBack');
    });
        });