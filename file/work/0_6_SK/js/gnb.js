
$(document).ready(function(){
	$(".about_us .submenu").css("display","none");
	
	$(".box>ul>li").on("mouseenter",function(){
		 $(this).children(".submenu").stop().slideDown();
	});
	
	$(".box>ul>li").on("mouseleave",function(){
		 $(this).children(".submenu").stop().slideUp();
	});
	
	$(".btn_menu").on("click",function(){
		 $(".box").stop().animate({"right":"0"},300);
		 $(".submenu").fadeIn();
	});
	$(".btn_close").on("click",function(){
		 $(".box").stop().animate({"right":"-80%"},300);
		 $(".submenu").hide();
	});
	
	$(".family .inner ul").css("display","none");
    
    $(".family .inner a").click(function(e){
        e.preventDefault();
        $(this).siblings("ul").stop().slideDown();
	});
    $(".family .inner ul").on("mouseleave",function(){
        $(this).stop().slideUp();
	});
　});