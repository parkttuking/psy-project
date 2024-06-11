$(document).ready(function(){
   
   var s=5;
   
   setInterval(auto_slide,4000);
   
   function auto_slide() {
      s++; 
      $(".content-quick")
         .parent()
         .eq(s%3)
         .addClass('current')
         .siblings()
         .removeClass('current')
         .find('.content-hide')
         .animate({left:270},1000);
      
      $('.content-quick')
         .parent()
         .eq(s%3)
         .animate({width:640},1000)
         .siblings()
         .animate({width:270},1000);
      
      $('.content-quick')
         .parent()
         .eq(s%3)
         .find('.content-hide')
         .animate({left:0},1000)
   }

});