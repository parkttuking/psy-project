$(function(){
	$('.sliderBanner li').eq(0).css({zIndex:'2'});
	$('.slideBtn li button').on('click',function(){
		var idx=$(this).parent().index();
		$('.sliderBanner li')
			.eq(idx)
			.animate({opacity:'1',zIndex:'2'})
			.siblings()
			.animate({opacity:'0',zIndex:'1'});
		$(this)
			.parent()
			.addClass('selected')
			.siblings()
			.removeClass('selected');
		
	});
	setInterval(auto_slide2, 4000);
	var t=0;
		function auto_slide2(){
			t++;
			$('.sliderBanner li')
			.eq(t%3)
			.animate({opacity:'1',zIndex:'2'})
			.siblings()
			.animate({opacity:'0',zIndex:'1'});
			
			$('.slideBtn li button')
				.parent()
				.eq(t%3)
				.addClass('selected')
				.siblings()
				.removeClass('selected');
		}
});



