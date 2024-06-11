$(document).ready(function(){
			$("#faq .answer").hide();
			$("#faq .q").click(function(){
				$(this)
					.next(".answer")
					.slideToggle()
					.siblings("div.answer:visible")
					.slideUp();
				
				$(this).toggleClass("acitve").siblings("h3.q").removeClass("acitve");
			});
		});