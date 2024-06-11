$(document).ready(function(){
    /* 메인 헤더 햄버거 X 버튼 */
    $(".btn").click(function(){
        $(this).toggleClass("on");

        if($(".btn").hasClass("on")){$(".sidebar").stop().animate({left:"0px"});}
        else{$(".sidebar").stop().animate({left:"-200px"});}   

    });
});