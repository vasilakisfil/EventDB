var GMAPS = window.GMAPS || {};
GMAPS.mainMap = function() {
  var map;

  function showPosition(position) {
    position = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    map.setCenter(position);
  }

  function addMarkers() {
    var jsonObject = {};

    var xhr = new XMLHttpRequest();
    xhr.open( "GET", "/home.json", true );
    xhr.onreadystatechange = function () {
      if ( xhr.readyState == 4 && xhr.status == 200 ) {
        jsonObject = JSON.parse( xhr.responseText );
        for (var i=0; i<jsonObject.length; i++) {
            for(var j=0; j<jsonObject[i].microposts.length; j++) {
              createMarker(jsonObject[i].name,
                    jsonObject[i].microposts[j].title,
                    jsonObject[i].microposts[j].content,
                    jsonObject[i].microposts[j].lat,
                    jsonObject[i].microposts[j].lon);
            }
        }
      }
    };
    xhr.send(null);
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

  function initAddress() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
      position = new google.maps.LatLng(0, 0);
      map.setCenter(position);
    }
  }

  return {
  
    initMap : function() {
      map = new google.maps.Map(document.getElementById('main_map'), {
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
      initAddress();
      addMarkers();
    },
  };
}();

document.addEventListener("DOMContentLoaded", GMAPS.mainMap.initMap, false);
