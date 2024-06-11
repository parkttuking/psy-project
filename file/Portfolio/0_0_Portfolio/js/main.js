$(document).ready(function(){
  
  // fullpage customization
  $('#fullpage').fullpage({
    sectionSelector: '.section',
    navigation: true,
    slidesNavigation: true,
    css3: true,
    controlArrows: false    
  }); 
  
/*버튼 위로 */
    $(window).scroll(function(){
        if($(this).scrollTop()>500){
            $('.btn-back-to-top').css("opacity", "1");
        }
        else{
            $('.btn-back-to-top').css("opacity", "0");
        }
        console.log($(this).scrollTop());
    });

    $('.btn-back-to-top').click(function(){
        $('html, body')
            .stop()
            .animate({scrollTop:0},1000,'easeInBack');
    });

});