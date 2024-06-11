$(function(){
    
    $(".subGnb").css({display:"none"});
    $(".gnb>li>ul").css({display:"none"});
    
    $(".gnb>li").on("mouseenter", function(){
        $(".subGnb").show();
        $(".gnb>li>ul").show();
        
        idx=$(this).index();
        
        $(".area-gnbImage>div")
            .eq(idx)
            .css("display","block")
            .siblings()
            .css("display","none");
    });

    $(".gnb>li").on("mouseleave", function(){
        $(".subGnb").hide();
        $(".gnb>li>ul").hide();
        $(".area-gnbImage>div").css("display","none");
    });
    
	/* 메뉴 바 */
	
	$(".gnb>li>a").on("mouseenter", function(){
        $(".gnb>li>a").children("span").animate({width:"0"},500);
        $(this).children("span").animate({width:"100%"},300);
	});
});






















