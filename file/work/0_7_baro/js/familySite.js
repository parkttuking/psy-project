$(function(){
    
    $("#siteChange").click(function(){
		var familySite=$("#familySite").val();
		if(familySite=="0"){
			alert("이동할 사이트를 선택해주시기 바랍니다.");
		}
		else{
			window.open(familySite);
		}
	});
	
	$("#siteMove").click(function(){
		var relationSite=$("#relationSite").val();
		if(relationSite=="0"){
			alert("관련 사이트를 선택해주시기 바랍니다.");
		}
		else{
			window.open(relationSite);
		}
	});
    
});