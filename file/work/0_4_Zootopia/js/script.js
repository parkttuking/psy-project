$(function(){
	
	$("nav>button").on("mouseenter",function(){
		$("nav>.nav_box").stop().fadeIn(500);
	});
	$("nav").on("mouseleave",function(){
		$("nav>.nav_box").stop().fadeOut(500);
	});
	
	$(".btnSet>li").eq(0).on("click",function(){
		hideMain();
		showCon1();
	});
	
	$(".btnSet>li").eq(1).on("click",function(){
		hideMain();
		showCon2();
	});
	
	/* 닫기 버튼 */
	$(".btn_close").on("click",function(){
		hideLine();
		showMain();
	});
	
	
	/* 호출 명령어 */
	function hideMain(){
		$(".txt").stop().animate({
			top:"50px",
			opacity:"0"
		},500,"swing");
		
		$(".btnSet").stop().delay(200).animate({
			bottom:"10px",
			opacity:"0"
		},1000,"swing");
		
		$(".prodct").stop().delay(400).animate({
			right:"0%"
		},800,"easeInOutBack");
	}/* hideMain 끝*/
	
	function showMain(){
		$(".txt").stop().delay(1000).animate({
			top:"30%",
			opacity:"1"
		},500,"swing");
		
		$(".btnSet").stop().delay(1000).animate({
			bottom:"32%",
			opacity:"1"
		},1000,"swing");
		
		$(".prodct").stop().delay(1000).animate({
			right:"12%"
		},800,"easeInOutBack");
	}/* showMain 끝*/
	
	function showCon1(){
		var speed=600;
		$(".con1").delay(1000).fadeIn();
		$(".top").stop().delay(200).animate({width:"100%"},speed,"swing",function(){
			$(".right").stop().animate({height:"100%"},speed,"swing",function(){
				$(".bottom").stop().animate({width:"100%"},speed,"swing",function(){
					$(".left").stop().animate({height:"100%"},speed,"swing",function(){
						$(".content").stop().fadeIn(1000);
					});
				});
			});
		});
	}/* showCon1 끝*/
	
	function showCon2(){
		var speed=600;
		$(".con2").stop().delay(1000).fadeIn(1000);
        $(".content2").fadeIn();
	}/* showCon2 끝*/
	
	
	function hideLine(){
		var speed=1000;
		$(".content").stop().fadeOut(300,function(){
			$(".top").stop().animate({width:"0%"},speed,"swing");
			$(".right").stop().animate({height:"0%"},speed,"swing");
			$(".bottom").stop().animate({width:"0%"},speed,"swing");
			$(".left").stop().animate({height:"0%"},speed,"swing",function(){
				$(".con1").stop().fadeOut(1000);
			});
		});
		$(".content2").stop().fadeOut(300,function(){
			$(".con2").stop().fadeOut(1000);
		});
	}
	
	
	
});































