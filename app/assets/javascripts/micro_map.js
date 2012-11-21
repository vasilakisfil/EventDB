var GMAPS = window.GMAPS || {};
GMAPS.microMap = function() {
  var map;

  function addMicropostMarker() {
    url = document.URL + ".json"

    var jsonObject = {};
    var xhr = new XMLHttpRequest();
    xhr.open( "GET", url, true );
    xhr.onreadystatechange = function () {
      if ( xhr.readyState == 4 && xhr.status == 200 ) {
        jsonObject = JSON.parse( xhr.responseText );
        position = new google.maps.LatLng(jsonObject.lat, jsonObject.lon);
        map.setCenter(position)
        createMarker(jsonObject.user.name,
                        jsonObject.title,
                        jsonObject.content,
                        jsonObject.lat,
                        jsonObject.lon);
      }
    };
    xhr.send(null);
  }

  function createMap() {
    map = new google.maps.Map(document.getElementById('micro_map'), {
      zoom: 10,
      panControl: true,
      zoomControl: true,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL
      },
      mapTypeControl: true,
      scaleControl: true,
      streetViewControl: true,
      overviewMapControl: true,
      scrollwheel: false,
      center: new google.maps.LatLng(37.975327,23.728701),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
  }

  function createMarker(Name, Title, Content, Latitude, Longitude) {

    var position = new google.maps.LatLng(Latitude, Longitude);
    contentString = "<h4>" + Name.bold() + "</h4>" + "<br />" + Title.bold() + "<br />" + Content;

    var marker = new google.maps.Marker({
      position: position,
      title: Title,
      map: map
    });

    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });

  }

  return {
  
    initMap : function() {
      createMap();
      addMicropostMarker();
    },
  };
}();

document.addEventListener("DOMContentLoaded", GMAPS.microMap.initMap, false);
