$(document).ready(function(){
    
    $(".sub-lnb:not(:first)").css("display","none");
    
    $(".lnb>li>a").click(function(){
        if($(this).next(".sub-lnb").css("display","none")){
            $(".sub-lnb").stop().slideUp();
            $(this).next(".sub-lnb").stop().slideDown();
        }
        $(".lnb>li").removeClass("on");
        $(this).parent("li").addClass("on");
        
        $(".lnb>li>a").removeClass("on");
        $(this).addClass("on");  
        
    });
});