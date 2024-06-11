$(document).ready(function(){
	var tab=$(".sub_top_menu_wrap ul li a");
	
	tab.click(function(){
		tab.removeClass("on");
		$(this).addClass("on");
	});
	
});