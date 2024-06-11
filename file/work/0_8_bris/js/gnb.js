
$(document).ready(function(){
    
    $(".bg_gnb").css("display","none");
    $(".gnb>li>ul").css("display","none");
    
    $(".gnb>li").mouseenter(function(){
        $(".bg_gnb").stop().slideDown();
        $(".gnb>li>ul").stop().slideDown();
    });
    $(".gnb>li").mouseleave(function(){
        $(".gnb>li>ul").stop().slideUp();
        $(".bg_gnb").stop().slideUp();
    });
    
});


