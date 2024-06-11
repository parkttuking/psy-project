function initialize() {

    /*
        http://openapi.map.naver.com/api/geocode.php?key=f32441ebcd3cc9de474f8081df1e54e3&encoding=euc-kr&coord=LatLng&query=서울특별시 강남구 강남대로 456
        위의 링크에서 뒤에 주소를 적으면 x,y 값을 구할수 있습니다.
    */
    
    var Y_point			= 37.506614;		// Y 좌표
    var X_point			= 127.059420;		// X 좌표

    var zoomLevel		= 18;						// 지도의 확대 레벨 : 숫자가 클수록 확대정도가 큼

    var markerTitle		= "한국문화의집 ";				// 현재 위치 마커에 마우스를 오버을때 나타나는 정보
    var markerMaxWidth	= 300;						// 마커를 클릭했을때 나타나는 말풍선의 최대 크기

    // 말풍선 내용
    var contentString	= '<div>' +
    '<h2>한국문화의집</h2>'+
    '<p>한국문화의집는 000 분야에서 00년 이상의 풍부한 경험을 보유한<br />' +
    '전문 인력으로 구성된 0000전문 기업입니다.</p>' +
    //'<a href="http://www.daegu.go.kr" target="_blank">http://www.daegu.go.kr</a>'+ //링크도 넣을 수 있음
    '</div>';

    var myLatlng = new google.maps.LatLng(Y_point, X_point);
    var mapOptions = {
                        zoom: zoomLevel,
                        center: myLatlng,
                        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById('map_view'), mapOptions);

    var marker = new google.maps.Marker({
                                            position: myLatlng,
                                            map: map,
                                            title: markerTitle
    });

    var infowindow = new google.maps.InfoWindow(
                                                {
                                                    content: contentString,
                                                    maxWidth: markerMaxWidth
                                                }
    );

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });
}

