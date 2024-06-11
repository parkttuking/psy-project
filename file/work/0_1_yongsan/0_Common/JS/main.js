$(document).ready(function(){
	var $bg_gnb=$("#gnb_inner>.nav_bg");
	var $ul_gnb=$("#gnb_inner>nav>ul>li>ul");

	$("#gnb_inner>nav>ul>li").mouseenter(function(){
		$bg_gnb.stop().slideDown(500);
		$ul_gnb.stop().delay(200).fadeIn(300);
	});

	$("#gnb_inner>nav>ul>li").mouseleave(function(){
		$bg_gnb.stop().slideUp(500);
		$ul_gnb.stop().fadeOut(300);
	});

});