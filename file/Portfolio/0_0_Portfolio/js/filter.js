$(document).ready(function(){
	var $wrap = $('#portfolio'),
		$filter = $('.filter li a');

	$wrap.isotope({
		itemSelector: '.item',
	});

	$filter.on('click', function(e) { 
		e.preventDefault();
		var filterValue = $(this).attr('data-filter');
		$wrap.isotope({ filter: filterValue });
		$filter.removeClass('on');
		$(this).addClass('on');
	});
    var $wrap=$(".works"),
        $filter=$(".filter li a");
    $wrap.isotope({
        itemSelector: '.work',
    });
    $filter.on( 'click', function(e) {
        e.preventDefault();
        var filterValue = $(this).attr('data-filter');
        $wrap.isotope({ filter: filterValue });
        $filter.removeClass('on');
        $(this).addClass('on');
    });
    /* 필터 버튼 클릭 높이 */

    /* 모니터사이즈 1280 */
    $(".filter li a.menu1").click(function(){
        $("#myworks").css('height','6214px');
    });
    $(".filter li a.menu2").click(function(){
        $("#myworks").css('height','3246px');
    });
    $(".filter li a.menu3").click(function(){
        $("#myworks").css('height','1601px');
    });
    $(".filter li a.menu4").click(function(){
        $("#myworks").css('height','710px');
    });
    $(".filter li a.menu5").click(function(){
        $("#myworks").css('height','710px');
    });
    $(".filter li a.menu6").click(function(){
        $("#myworks").css('height','1268px');
    });
    $(".filter li a.menu7").click(function(){
        $("#myworks").css('height','941px');
    });
});