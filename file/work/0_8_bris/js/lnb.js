$(document).ready(function(){
    /*$('.lnb>ul>li>ul:not(:first)').hide();*/
    
    $('.lnb>ul>li>ul').hide();
    $('.lnb>ul>li>ul').first().show();

    $('.lnb>ul>li>a').click(function(){
        $('.lnb>ul>li>ul').stop().slideUp();
        $(this).next('ul').stop().slideDown();
        
        $('.lnb>ul>li>a').removeClass('on');
        $(this).addClass('on');
        $(this).next('ul').children('li:first').addClass('on');
    });
});