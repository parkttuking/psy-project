$(document).ready(function(){
    $(".searchBtn").click(function(){
        $(".quick-search").show();
    });
    
    $(".btn-close").click(function(){
        $(".quick-search").hide();
    });
    
    $(".search-tab-list li").click(function(){
        var idx=$(this).index();
        
        $(".search-list-content>div")
            .eq(idx)
            .css("display","block")
            .siblings()
            .css("display","none");
        
        $(".search-tab-list li").removeClass("selected");
        $(this).addClass("selected");
    });
});