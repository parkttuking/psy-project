/*$(function(){
	$(".gnb>li").on("mouseenter",function(){
		$(".sub_gnb").hide();
		$(".sub_bg").show();
		$(this).children(".depth2").show();
	});
	
	$(".sub_bg").on("mouseleave",function(){
		$(".sub_gnb").hide();
		$(this).hide();
	});
});*/

$(document).ready(function(){
	/* 원래쓰던거에서 줄임말 */
	var gnbTargat=$(".gnb>li");
	
	gnbTargat.on("mouseenter",function(){
		$(this).children(".sub_gnb").stop().fadeIn();
	});
	
	gnbTargat.on("mouseleave",function(){
		$(this).children(".sub_gnb").stop().fadeOut();
	});
});