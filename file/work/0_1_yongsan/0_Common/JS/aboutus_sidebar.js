$(document).ready(function(){
    $("#sidebar li a").click(function(){
        $("#sidebar li a").removeClass("on");
        $(this).addClass("on");
    });
});