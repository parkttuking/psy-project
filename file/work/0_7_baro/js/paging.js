$(function(){
    $('.paging-item').click(function(e){
        e.preventDefault();
        
        $('.paging-item').removeClass("active")
        $(this).addClass("active");
    });
    
    /* 아코디언 */
    
    $(".tr-show").hide();
    $(".tr-title").click(function(){
        $(this)
            .next(".tr-show")
            .slideToggle()
            .siblings("tr.tr-show:visible")
            .slideUp();
    });
});