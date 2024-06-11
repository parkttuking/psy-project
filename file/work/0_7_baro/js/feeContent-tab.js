$(document).ready(function(){
    $(".feeContent-tabList li").click(function(){
        var idx=$(this).index();
        
        $(".area-feeContent>div")
            .eq(idx)
            .css("display","block")
            .siblings()
            .css("display","none");
        
        $(".feeContent-tabList li").removeClass("on");
        $(this).addClass("on");
    });
    
    
});